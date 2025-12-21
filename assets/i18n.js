(() => {
  const defaultLang = 'ru';
  let currentLang = localStorage.getItem('lang') || defaultLang;
  const cache = {};
  const listeners = [];

  function getNested(obj, path) {
    return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), obj);
  }

  async function loadLocale(lang) {
    if (cache[lang]) return cache[lang];
    const response = await fetch(`./locales/${lang}.json`);
    if (!response.ok) throw new Error(`Cannot load locale ${lang}`);
    const data = await response.json();
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

  async function applyTranslations() {
    const locale = await loadLocale(currentLang);
    document.querySelectorAll('[data-i18n], [data-i18n-title]').forEach((el) => translateElement(el, locale));
    const shortLabel = getNested(locale, `languageShort.${currentLang}`) || currentLang.toUpperCase();
    const currentLanguageEl = document.getElementById('currentLanguage');
    if (currentLanguageEl) currentLanguageEl.textContent = shortLabel;
  }

  async function setLanguage(lang) {
    if (lang === currentLang) return;
    currentLang = lang;
    localStorage.setItem('lang', lang);
    await applyTranslations();
    listeners.forEach((cb) => cb(lang));
  }

  function onLanguageChange(cb) {
    if (typeof cb === 'function') listeners.push(cb);
  }

  async function initI18n() {
    try {
      await loadLocale(currentLang);
      await applyTranslations();
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
    ready: initI18n()
  };
})();

