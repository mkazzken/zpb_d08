(() => {
  const defaultLang = 'ru';
  let currentLang = localStorage.getItem('lang') || defaultLang;
  const cache = {};
  const listeners = [];

  // Embedded locales to avoid any HTTP/fetch usage
  const EMBEDDED_LOCALES = {
    "ru": {
      "pageTitle": "API Documentation",
      "languageName": "Русский",
      "breadcrumb": {
        "home": "Главная",
        "docs": "Документация API"
      },
      "nav": {
        "home": "Главная",
        "news": "Новости",
        "about": "О фонде",
        "contacts": "Контакты",
        "back": "Назад",
        "forward": "Вперед"
      },
      "headers": {
        "page": "API Documentation",
        "availableTables": "Доступные таблицы",
        "availableFolders": "Доступные папки"
      },
      "tableHeaders": {
        "field": "Поле",
        "description": "Описание",
        "valueExample": "Пример значения",
        "notes": "Примечание"
      },
      "tables": {
        "dsoTable": "ZBP_D08",
        "dsoTable2": "ZBP_TEST1",
        "dsoTable3": "ZBP_TEST2"
      },
      "folders": {
        "BP3_balance": "Формы по БАЛАНС",
        "BP4_dds": "Формы по ДДС",
        "BP6_TFR": "Формы ТФР: Отчет о прибылях и убытках и отчет по производственным показателям",
        "Баланс исполнения": "Баланс исполнения",
        "BP3-DZO-balance-dzo": "3.Баланс для DZO (BP3-DZO)",
        "BP3-P-PK-predicted-balance": "1. Прогнозный Баланс для ПК (BP3-P-PK)",
        "BP3-Q-PK": "2. Баланс исполнение ПК (BP3-Q-PK)",
        "BP4-DZO-dds": "3. Ежемесячное исполнение движения денежных средств для ДЗО (BP4-DZO)",
        "BP4-P-PK-predicted-dds": "1. Прогноз движения денежных средств для ПК (BP4-P-PK)",
        "BP4-Q-PK-dds-ispoln": "2. Ежеквартальное исполнение движения денежных средств для ПК (BP4-Q-PK)",
        "BP6-M-PK-tfr-monthly": "3. Ежемесячное исполнение отчета о прибылях и убытках и по производственным показателям для ПК (BP6-M-PK)",
        "BP6-P-PK_prognoz-tfr": "1. Прогнозный отчет о прибылях и убытках и по производственным показателям для ПК (BP6-P-PK)",
        "BP6-Q-PK-TFR": "2. Ежеквартальное исполнение отчета о прибылях и убытках и по производственным показателям для ПК (BP6-Q-PK)",
        "BP6-DZO-TFR": "4. Ежемесячное исполнение отчета о прибылях и убытках и по производственным показателям для ДЗО (BP6-DZO)"
      },
      "files": {
        "Баланс исполнения": "Баланс исполнения",
        "bp3-dzo": "Баланс для DZO (BP3-DZO)",
        "bp3-p-pk": "Прогнозный Баланс для ПК (BP3-P-PK)",
        "bp3-q-pk": "Баланс исполнение ПК (BP3-Q-PK)",
        "bp4-dzo": "Ежемесячное исполнение движения денежных средств для ДЗО (BP4-DZO)",
        "bp4-p-pk": "Прогноз движения денежных средств для ПК (BP4-P-PK)",
        "bp4-q-pk": "Ежеквартальное исполнение движения денежных средств для ПК (BP4-Q-PK)",
        "bp6-m-pk": "Ежемесячное исполнение отчета о прибылях и убытках и по производственным показателям для ПК (BP6-M-PK)",
        "bp6-p-pk": "Прогнозный отчет о прибылях и убытках и по производственным показателям для ПК (BP6-P-PK)",
        "bp6-q-pk": "Ежеквартальное исполнение отчета о прибылях и убытках и по производственным показателям для ПК (BP6-Q-PK)",
        "bp6-dzo": "Ежемесячное исполнение отчета о прибылях и убытках и по производственным показателям для ДЗО (BP6-DZO)"
      },

      "footer": {
        "rights": "© Все права защищены. 2024 Самрук-Казына"
      },
      "languageShort": {
        "ru": "Рус",
        "kz": "Қаз"
      }
    },
    "kz": {
      "pageTitle": "API Құжаттамасы",
      "languageName": "Қазақ тілі",
      "breadcrumb": {
        "home": "Басты бет",
        "docs": "API құжаттамасы"
      },
      "nav": {
        "home": "Басты бет",
        "news": "Жаңалықтар",
        "about": "Қор туралы",
        "contacts": "Байланыс",
        "back": "Артқа",
        "forward": "Алға"
      },
      "headers": {
        "page": "API Құжаттамасы",
        "availableTables": "Қолжетімді кестелер",
        "availableFolders": "Қолжетімді қалталар"
      },
      "tableHeaders": {
        "field": "Өріс",
        "description": "Сипаттама",
        "valueExample": "Мысал мәні",
        "notes": "Ескертпе"
      },
      "tables": {
        "dsoTable": "ZBP_D08",
        "dsoTable2": "ZBP_TEST1",
        "dsoTable3": "ZBP_TEST2"
      },
      "folders": {
          "BP3_balance": "БАЛАНС бойынша формалар",
          "BP4_dds": "ҚҚА бойынша формалар",
          "BP6_TFR": "ТФР формалары: Пайда мен залал есебі және өндірістік көрсеткіштер есебі",
          "balance-ispoln": "Орындау балансы",
          "BP3-DZO-balance-dzo": "3. DZO үшін баланс (BP3-DZO)",
          "BP3-P-PK-predicted-balance": "1. ПК үшін болжамды баланс (BP3-P-PK)",
          "BP3-Q-PK": "2. ПК орындау балансы (BP3-Q-PK)",
          "BP4-DZO-dds": "3. DZO үшін айлық ҚҚА орындау есебі (BP4-DZO)",
          "BP4-P-PK-predicted-dds": "1. ПК үшін ҚҚА болжамы (BP4-P-PK)",
          "BP4-Q-PK-dds-ispoln": "2. ПК үшін тоқсан сайынғы ҚҚА орындау есебі (BP4-Q-PK)",
          "BP6-M-PK-tfr-monthly": "3. ПК үшін ай сайынғы пайда мен залал және өндірістік көрсеткіштер есебі (BP6-M-PK)",
          "BP6-P-PK_prognoz-tfr": "1. ПК үшін болжамды пайда мен залал және өндірістік көрсеткіштер есебі (BP6-P-PK)",
          "BP6-Q-PK-TFR": "2. ПК үшін тоқсан сайынғы пайда мен залал және өндірістік көрсеткіштер есебі (BP6-Q-PK)",
          "BP6-DZO-TFR": "4. DZO үшін ай сайынғы пайда мен залал және өндірістік көрсеткіштер есебі (BP6-DZO)"
      },
      "files": {
          "Баланс исполнения": "Орындау балансы",
          "bp3-dzo": "DZO үшін баланс (BP3-DZO)",
          "bp3-p-pk": "ПК үшін болжамды баланс (BP3-P-PK)",
          "bp3-q-pk": "ПК орындау балансы (BP3-Q-PK)",
          "bp4-dzo": "DZO үшін ай сайынғы ҚҚА орындау есебі (BP4-DZO)",
          "bp4-p-pk": "ПК үшін ҚҚА болжамы (BP4-P-PK)",
          "bp4-q-pk": "ПК үшін тоқсан сайынғы ҚҚА орындау есебі (BP4-Q-PK)",
          "bp6-m-pk": "ПК үшін ай сайынғы пайда мен залал және өндірістік көрсеткіштер есебі (BP6-M-PK)",
          "bp6-p-pk": "ПК үшін болжамды пайда мен залал және өндірістік көрсеткіштер есебі (BP6-P-PK)",
          "bp6-q-pk": "ПК үшін тоқсан сайынғы пайда мен залал және өндірістік көрсеткіштер есебі (BP6-Q-PK)",
          "bp6-dzo": "DZO үшін ай сайынғы пайда мен залал және өндірістік көрсеткіштер есебі (BP6-DZO)"
      },


      "footer": {
        "rights": "© Барлық құқықтар қорғалған. 2024 Самрук-Казына"
      },
      "languageShort": {
        "ru": "Рус",
        "kz": "Қаз"
      }
    }
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

