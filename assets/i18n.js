(() => {
  const defaultLang = 'ru';
  let currentLang = localStorage.getItem('lang') || defaultLang;
  const cache = {};
  const listeners = [];

  // Embedded locales to avoid any HTTP/fetch usage
  const EMBEDDED_LOCALES = {
    ru: (() => {
      try {
        // Load from generated ru.json file at build time
        return JSON.parse(`
${require('fs').readFileSync('./locales/ru.json', 'utf-8')}
        `);
      } catch (e) {
        console.error('Failed to embed RU locale:', e);
        return {};
      }
    })(),
    kz: (() => {
      try {
        // Load from generated kz.json file at build time
        return JSON.parse(`
${require('fs').readFileSync('./locales/kz.json', 'utf-8')}
        `);
      } catch (e) {
        console.error('Failed to embed KZ locale:', e);
        return {};
      }
    })()
  };

  function getNested(obj, path) {
    return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), obj);
  }

  function loadLocaleSync(lang) {
    if (cache[lang]) return cache[lang];
    const data = EMBEDDED_LOCALES[lang];
    if (!data) {
      throw new Error(`Cannot load embedded locale ${lang}`);
    }
    cache[lang] = data;
    return data;
  }

  function translateElement(el, locale) {
    const key = el.getAttribute('data-i18n');
    if (key) {
      const value = getNested(locale, key);
      if (value !== null && value !== undefined) {
        if (el.tagName === 'TITLE') {
          document.title = value;
        }
        el.textContent = value;
      }
    }

    const titleKey = el.getAttribute('data-i18n-title');
    if (titleKey) {
      const titleValue = getNested(locale, titleKey);
      if (titleValue !== null && titleValue !== undefined) {
        el.setAttribute('title', titleValue);
      }
    }
  }

  function applyTranslations() {
    const locale = loadLocaleSync(currentLang);
    document.querySelectorAll('[data-i18n], [data-i18n-title]').forEach((el) => translateElement(el, locale));
    const shortLabel = getNested(locale, `languageShort.${currentLang}`) || currentLang.toUpperCase();
    const currentLanguageEl = document.getElementById('currentLanguage');
    if (currentLanguageEl) currentLanguageEl.textContent = shortLabel;
  }

  async function setLanguage(lang) {
    if (lang === currentLang) return;
    currentLang = lang;
    localStorage.setItem('lang', lang);
    applyTranslations();
    listeners.forEach((cb) => cb(lang));
  }

  function onLanguageChange(cb) {
    if (typeof cb === 'function') listeners.push(cb);
  }

  function initI18n() {
    try {
      loadLocaleSync(currentLang);
      applyTranslations();
    } catch (error) {
      console.error('i18n init error:', error);
    }
  }

  window.i18n = {
    t: (key) => {
      const locale = cache[currentLang];
      if (!locale) return '';
      const value = getNested(locale, key);
      return value !== null && value !== undefined ? value : '';
    },
    get currentLang() {
      return currentLang;
    },
    setLanguage,
    onLanguageChange,
    ready: (initI18n(), Promise.resolve())
  };
})();

