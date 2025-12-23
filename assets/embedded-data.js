window.EMBEDDED_DATA = {
  "ru": {
    "BP3_balance": {
      "Баланс исполнения": [
        {
          "field": "ZBPDATYPE",
          "description": "Тип данных",
          "value_example": " ",
          "notes": "DT_3 - Оценка"
        },
        {
          "field": "ZBPMETD",
          "description": "Метод планирования",
          "value_example": "1M - Базовый план<br>2M - Альтернативный план<br>3M - Альтернативный план<br>4M - Альтернативный план<br>5M - Альтернативный план<br>6M - Альтернативный план<br>7M - Альтернативный план<br>8M - Альтернативный план",
          "notes": "4M"
        },
        {
          "field": "ZPORTFCOM",
          "description": "ID портфеля компаний",
          "value_example": "Посмотрите в справочнике компаний",
          "notes": "DO0005"
        },
        {
          "field": "ZBPTIME",
          "description": "Отчетный период",
          "value_example": "мм.гггг. Исполнение данные заполняется ежеквартально (03, 06, 09, 12).",
          "notes": "09.2024"
        },
        {
          "field": "ZBPACCT",
          "description": "План счетов",
          "value_example": " ",
          "notes": "000200000000"
        },
        {
          "field": "ZBPPOLIT",
          "description": "Тип политики",
          "value_example": "POL_PC или POL_FU",
          "notes": "POL_FU"
        },
        {
          "field": "ZBPSUM",
          "description": "Сумма",
          "value_example": "",
          "notes": ""
        },
        {
          "link1": "www.example.com",
          "link2": "www.example2.com"
        }

      ],
      "bp3-dzo": [
        {
          "field": "ZBPDATYPE",
          "description": "Тип данных",
          "value_example": "DT_1 -План<br>DT_2 - Факт<br>DT_3 - Оценка",
          "notes": "DT_1"
        },
        {
          "field": "ZBPMETD",
          "description": "Метод планирования",
          "value_example": "1M - Базовый план<br>2M - Альтернативный план<br>3M - Альтернативный план<br>4M - Альтернативный план<br>5M - Альтернативный план<br>6M - Альтернативный план<br>7M - Альтернативный план<br>8M - Альтернативный план",
          "notes": "8M"
        },
        {
          "field": "ZPORTFCOM",
          "description": "ID портфеля компаний",
          "value_example": "Посмотрите в справочнике компаний",
          "notes": "DO0006"
        },
        {
          "field": "ZBPTIME",
          "description": "Отчетный период",
          "value_example": "Заполняется по логике: мм.гггг. Для данных \"Факт прошлого года\" всегда 12.гггг.<br>Для данных \"Оценка\" мм.гггг.<br>Для данных \"План\" всегда 12.гггг.",
          "notes": "  12.2024"
        },
        {
          "field": "ZBPACCT",
          "description": "План счетов",
          "value_example": "",
          "notes": "000200000000"
        },
        {
          "field": "ZBPPOLIT",
          "description": "Политика консолидации",
          "value_example": "Тип политики: для всех компаний POL_FU",
          "notes": "POL_FU"
        },
        {
          "field": "ZBPREP",
          "description": "Признак отчетности",
          "value_example": "MONTHLY - Факт<br>MONTHLY - Оценка<br>PLANNING - План",
          "notes": "MONTHLY"
        },
        {
          "field": "ZBPSUM",
          "description": "Сумма",
          "value_example": "",
          "notes": ""
        }
      ],
      "bp3-p-pk": [
        {
          "field": "ZBPDATYPE",
          "description": "Тип данных",
          "value_example": "DT_1 - План<br>DT_3 - Оценка<br>DT_4 -Прогноз",
          "notes": "DT_3"
        },
        {
          "field": "ZBPMETD",
          "description": "Метод планирования",
          "value_example": "1M - Базовый план<br>2M - Альтернативный план<br>3M - Альтернативный план<br>4M - Альтернативный план<br>5M - Альтернативный план<br>6M - Альтернативный план<br>7M - Альтернативный план<br>8M - Альтернативный план",
          "notes": "8M"
        },
        {
          "field": "ZPORTFCOM",
          "description": "ID портфеля компаний",
          "value_example": "Посмотрите в справочнике компаний",
          "notes": "DO0006"
        },
        {
          "field": "ZBPPER",
          "description": "Плановая пятилетка",
          "value_example": "Заполняется по логике: гггг-(гггг+4)",
          "notes": "2025-2029"
        },
        {
          "field": "ZBPTIME",
          "description": "Отчетный период",
          "value_example": "Заполняется по логике: мм.гггг. Для данных \"Оценка\" всегда 12.гггг.<br>Для данных \"План\" квартальные месяца (03, 06, 09, 12).<br>Для данных \"Прогноз\" месячные месяца (01-12).",
          "notes": "12.2024"
        },
        {
          "field": "ZBPACCT",
          "description": "План счетов",
          "value_example": " ",
          "notes": "000200000000"
        },
        {
          "field": "ZBPSUM",
          "description": "Сумма",
          "value_example": "",
          "notes": ""
        }
      ],
      "bp3-q-pk": [
        {
          "field": "ZBPDATYPE",
          "description": "Тип данных",
          "value_example": "DT_3 - Оценка",
          "notes": "DT_3"
        },
        {
          "field": "ZBPMETD",
          "description": "Метод планирования",
          "value_example": "1M - Базовый план<br>2M - Альтернативный план<br>3M - Альтернативный план<br>4M - Альтернативный план<br>5M - Альтернативный план<br>6M - Альтернативный план<br>7M - Альтернативный план<br>8M - Альтернативный план",
          "notes": "8M"
        },
        {
          "field": "ZPORTFCOM",
          "description": "ID портфеля компаний",
          "value_example": "Посмотрите в справочнике компаний",
          "notes": "DO0005"
        },
        {
          "field": "ZBPTIME",
          "description": "Отчетный период",
          "value_example": "мм.гггг",
          "notes": "12.2024"
        },
        {
          "field": "ZBPACCT",
          "description": "План счетов",
          "value_example": "",
          "notes": "000200000000"
        },
        {
          "field": "ZBPSUM",
          "description": "Сумма",
          "value_example": "",
          "notes": ""
        }
      ],
    },

    "BP4_dds": {
      "bp4-dzo": [
        {
          "field": "ZBPDATYPE",
          "description": "Тип данных",
          "value_example": "DT_2 - Факт",
          "notes": "DT_2 - Факт"
        }
      ],
      "bp4-p-pk": [
        {
          "field": "ZBPDATYPE",
          "description": "Тип данных",
          "value_example": " DT_1 - План<br>DT_3 - Оценка<br>DT_4 - Прогноз",
          "notes": "DT_3"
        },
        {
          "field": "ZBPMETD",
          "description": "Метод планирования",
          "value_example": "1M - Базовый план<br>2M - Альтернативный план<br>3M - Альтернативный план<br>4M - Альтернативный план<br>5M - Альтернативный план<br>6M - Альтернативный план<br>7M - Альтернативный план<br>8M - Альтернативный план",
          "notes": "1M"
        },
        {
          "field": "ZPORTFCOM",
          "description": "ID портфеля компаний",
          "value_example": "Посмотрите в справочнике компаний",
          "notes": "DO0005"
        },
        {
          "field": "ZBPPER",
          "description": "Плановая пятилетка",
          "value_example": "Заполняется по логике: гггг-(гггг+4)",
          "notes": "2025-2029"
        },
        {
          "field": "ZBPTIME",
          "description": "Отчетный период",
          "value_example": "Отчетный период для данных Оценка всегда 12.гггг.<br>Для данных План - квартальные месяца (03, 06, 09, 12).<br>Для данных Прогноз - месячные месяца (01-12).",
          "notes": "12.2024"
        },
        {
          "field": "ZBPACCT",
          "description": "План счетов",
          "value_example": "",
          "notes": "000200000000"
        },
        {
          "field": "ZBPSUM",
          "description": "Сумма",
          "value_example": "(Числовое значение)",
          "notes": "Сумма"
        }
      ],
      "bp4-q-pk": [
        {
          "field": "ZBPDATYPE",
          "description": "Тип данных",
          "value_example": "DT_3 - Оценка",
          "notes": "DT_3"
        },
        {
          "field": "ZBPMETD",
          "description": "Метод планирования",
          "value_example": "1M - Базовый план<br>2M - Альтернативный план<br>3M - Альтернативный план<br>4M - Альтернативный план<br>5M - Альтернативный план<br>6M - Альтернативный план<br>7M - Альтернативный план<br>8M - Альтернативный план",
          "notes": "1M"
        },
        {
          "field": "ZPORTFCOM",
          "description": "ID портфеля компаний",
          "value_example": "Посмотрите в справочнике компаний",
          "notes": "DO0005"
        },
        {
          "field": "ZBPTIME",
          "description": "Отчетный период",
          "value_example": "Отчетный период заполняется по логике: мм.гггг.<br>В данной форме исполнение данные заносят на квартала. Например: 03.2025; 06.2025; 09.2025; 12.2025",
          "notes": "09.2024"
        },
        {
          "field": "ZBPPOLIT",
          "description": "Тип политики",
          "value_example": "POL_PC или POL_FU",
          "notes": "POL_FU"
        },
        {
          "field": "ZBPSUM",
          "description": "Сумма",
          "value_example": "",
          "notes": ""
        }
      ],
    },
    "BP6_TFR": {
      "bp6-m-pk": [
        {
          "field": "ZBPDATYPE",
          "description": "Тип данных",
          "value_example": "DT_03 - Оценка<br>DT_02 - Факт<br>DT_01 - Текстовый показатель",
          "notes": "DT_02"
        },
        {
          "field": "ZPORTFCOM",
          "description": "ID портфеля компаний",
          "value_example": "Посмотрите в справочнике компаний",
          "notes": "DO0005"
        },
        {
          "field": "ZBPSTFC",
          "description": "Статья-фактор",
          "value_example": "При формировании формы, соответсвующие статьи к пятилетке и ПК подтягивается из DSO ZBP_D33 (смотреть лист ZBP_D33)",
          "notes": ""
        },
        {
          "field": "ZBPTTYPE",
          "description": "Тип транзакции",
          "value_example": "",
          "notes": "для Текстового показателя<br>T_007-Пояснения к изм. оценки к плану<br>T_008-Пояснения к изм. оценки к факту аналогич. периода прошлого<br>T_014-Реализованные существенные риски не достижения показателя<br>T_015-Реализованные предупредительные мероприятия для снижения рис"
        },
        {
          "field": "ZBPTXT1",
          "description": "Текст проводки",
          "value_example": "#",
          "notes": "для Текстового покозателя - текстовый ввод до 250 символа"
        },
        {
          "field": "ZBPSUM1",
          "description": "Сумма 1",
          "value_example": "",
          "notes": "для Текстового показателя - 0"
        }
      ],
      "bp6-p-pk": [
        {
          "field": "ZBPDATYPE",
          "description": "Тип данных",
          "value_example": "DT_04 - Прогноз, DT_03 - Оценка, DT_01 - План",
          "notes": "DT_04 - Прогноз"
        },
        {
          "field": "ZBPMETD",
          "description": "Метод планирования",
          "value_example": "1M - Базовый план<br>2M - Альтернативный план<br>3M - Альтернативный план<br>4M - Альтернативный план<br>5M - Альтернативный план<br>6M - Альтернативный план<br>7M - Альтернативный план<br>8M - Альтернативный план",
          "notes": "1M"
        },
        {
          "field": "ZPORTFCOM",
          "description": "ID портфеля компаний",
          "value_example": "Посмотрите в справочнике компаний",
          "notes": "DO0005"
        },
        {
          "field": "ZBPPER",
          "description": "Плановая пятилетка",
          "value_example": "Заполняется по логике: гггг-(гггг+4)",
          "notes": "2025-2029"
        },
        {
          "field": "ZBPTIME",
          "description": "Отчетный период",
          "value_example": "Заполняется по логике: ггггмм.Для данных \"План\" с разбивкой по месяцам. Например: 202501; 202512<br>Для данных \"ПРогноз\" с разбивкой по годам. Например: 202612; 202712",
          "notes": "202612; 202712"
        },
        {
          "field": "ZBPSTFC",
          "description": "Статья-фактор",
          "value_example": "При формировании формы, соответствующие статьи к пятилетке и ПК подтягивается из DSO ZBP_D33 (смотреть лист ZBP_D33)",
          "notes": ""
        },
        {
          "field": "ZBPSUM",
          "description": "Сумма",
          "value_example": "(Числовое значение)",
          "notes": "Сумма"
        }
      ],
      "bp6-q-pk": [
        {
          "field": "ZBPDATYPE",
          "description": "Тип данных",
          "value_example": "DT_02 - Факт, DT_03 - Оценка, DT_01 - Текстовый показатель",
          "notes": "DT_02"
        },
        {
          "field": "ZPORTFCOM",
          "description": "ID портфеля компаний",
          "value_example": "Посмотрите в справочнике компаний",
          "notes": "DO0005"
        },
        {
          "field": "ZBPTIME",
          "description": "Отчетный период",
          "value_example": "Отченый период заполняется по логике: ггггмм",
          "notes": "202409"
        },
        {
          "field": "ZBPSTFC",
          "description": "Статья-фактор",
          "value_example": "При формировании формы, соответствующие статьи к пятилетке и ПК подтягивается из DSO ZBP_D33 (смотреть лист ZBP_D33)",
          "notes": ""
        },
        {
          "field": "ZBPTTYPE",
          "description": "Тип транзакции",
          "value_example": "#",
          "notes": "для Текстового показателя<br>T_007-Пояснения к изм. оценки к плану<br>T_008-Пояснения к изм. оценки к факту аналогич. периода прошлого<br>T_014-Реализованные существенные риски не достижения показателя<br>T_015-Реализованные предупредительные мероприятия для снижения рис"
        },
        {
          "field": "ZBPTXT1",
          "description": "Текст проводки",
          "value_example": "",
          "notes": "для Текстового покозателя - текстовый ввод до 250 символа"
        },
        {
          "field": "ZBPSUM1",
          "description": "Сумма 1",
          "value_example": "",
          "notes": "для Текстового показателя - 0"
        }
      ], 
      "bp6-dzo": [
        {
          "field": "ZBPDATYPE",
          "description": "Дерек түрі",
          "value_example": "DT_02 - Факт, DT_03 - Бағалау, DT_01 - Тексттік көрсеткіш",
          "notes": "DT_02"
        }
      ]
    }
  },
  "kz": {
    "BP3_balance ": {
      "Баланс исполнения": [
        {
          "field": "ZBPDATYPE",
          "description": "Дерек түрі",
          "value_example": " ",
          "notes": "DT_3 - Бағалау"
        },
        {
          "field": "ZBPMETD",
          "description": "Жоспарлау әдісі",
          "value_example": "1M - Негізгі жоспар<br>2M - Балама жоспар<br>3M - Балама жоспар<br>4M - Балама жоспар<br>5M - Балама жоспар<br>6M - Балама жоспар<br>7M - Балама жоспар<br>8M - Балама жоспар",
          "notes": "4M"
        },
        {
          "field": "ZPORTFCOM",
          "description": "Компаниялар портфелінің ID",
          "value_example": "Компаниялар анықтамалығын қараңыз",
          "notes": "DO0005"
        },
        {
          "field": "ZBPTIME",
          "description": "Есепті кезең",
          "value_example": "аа.жжжж. Орындалу деректері тоқсана сай толтырылады (03, 06, 09, 12).",
          "notes": "09.2024"
        },
        {
          "field": "ZBPACCT",
          "description": "Есеп жоспары",
          "value_example": " ",
          "notes": "000200000000"
        },
        {
          "field": "ZBPPOLIT",
          "description": "Саясат түрі",
          "value_example": "POL_PC немесе POL_FU",
          "notes": "POL_FU"
        },
        {
          "field": "ZBPSUM",
          "description": "Сома",
          "value_example": "",
          "notes": ""
        }
      ],
      "bp3-dzo": [
        {
          "field": "ZBPDATYPE",
          "description": "Дерек түрі",
          "value_example": "DT_1 - Жоспар<br>DT_2 - Факт<br>DT_3 - Бағалау",
          "notes": "DT_1"
        },
        {
          "field": "ZBPMETD",
          "description": "Жоспарлау әдісі",
          "value_example": "1M - Негізгі жоспар<br>2M - Балама жоспар<br>3M - Балама жоспар<br>4M - Балама жоспар<br>5M - Балама жоспар<br>6M - Балама жоспар<br>7M - Балама жоспар<br>8M - Балама жоспар",
          "notes": "8M"
        },
        {
          "field": "ZPORTFCOM",
          "description": "Компаниялар портфелінің ID",
          "value_example": "Компаниялар анықтамалығын қараңыз",
          "notes": "DO0006"
        },
        {
          "field": "ZBPTIME",
          "description": "Есепті кезең",
          "value_example": "Логика бойынша толтырылады: аа.жжжж. \"Өткен жылдың фактісі\" деректері үшін әрқашан 12.жжжж.<br>\"Бағалау\" деректері үшін аа.жжжж.<br>\"Жоспар\" деректері үшін әрқашан 12.жжжж.",
          "notes": "  12.2024"
        },
        {
          "field": "ZBPACCT",
          "description": "Есеп жоспары",
          "value_example": "",
          "notes": "000200000000"
        },
        {
          "field": "ZBPPOLIT",
          "description": "Консолидация саясаты",
          "value_example": "Саясат түрі: барлық компаниялар үшін POL_FU",
          "notes": "POL_FU"
        },
        {
          "field": "ZBPREP",
          "description": "Есептілік белгісі",
          "value_example": "MONTHLY - Факт<br>MONTHLY - Бағалау<br>PLANNING - Жоспар",
          "notes": "MONTHLY"
        },
        {
          "field": "ZBPSUM",
          "description": "Сома",
          "value_example": "",
          "notes": ""
        }
      ],
      "bp3-p-pk": [
        {
          "field": "ZBPDATYPE",
          "description": "Дерек түрі",
          "value_example": "DT_1 - Жоспар<br>DT_3 - Бағалау<br>DT_4 -Болжам",
          "notes": "DT_3"
        },
        {
          "field": "ZBPMETD",
          "description": "Жоспарлау әдісі",
          "value_example": "1M - Негізгі жоспар<br>2M - Балама жоспар<br>3M - Балама жоспар<br>4M - Балама жоспар<br>5M - Балама жоспар<br>6M - Балама жоспар<br>7M - Балама жоспар<br>8M - Балама жоспар",
          "notes": "8M"
        },
        {
          "field": "ZPORTFCOM",
          "description": "Компаниялар портфелінің ID",
          "value_example": "Компаниялар анықтамалығын қараңыз",
          "notes": "DO0006"
        },
        {
          "field": "ZBPPER",
          "description": "Жоспарлы бесжылдық",
          "value_example": "Логика бойынша толтырылады: жжжж-(жжжж+4)",
          "notes": "2025-2029"
        },
        {
          "field": "ZBPTIME",
          "description": "Есепті кезең",
          "value_example": "Логика бойынша толтырылады: аа.жжжж. \"Бағалау\" деректері үшін әрқашан 12.жжжж.<br>\"Жоспар\" деректері үшін тоқсандық айлар (03, 06, 09, 12).<br>\"Болжам\" деректері үшін айлық айлар (01-12).",
          "notes": "12.2024"
        },
        {
          "field": "ZBPACCT",
          "description": "Есеп жоспары",
          "value_example": " ",
          "notes": "000200000000"
        },
        {
          "field": "ZBPSUM",
          "description": "Сома",
          "value_example": "",
          "notes": ""
        }
      ],
      "bp3-q-pk": [
        {
          "field": "ZBPDATYPE",
          "description": "Дерек түрі",
          "value_example": "DT_3 - Бағалау",
          "notes": "DT_3"
        },
        {
          "field": "ZBPMETD",
          "description": "Жоспарлау әдісі",
          "value_example": "1M - Негізгі жоспар<br>2M - Балама жоспар<br>3M - Балама жоспар<br>4M - Балама жоспар<br>5M - Балама жоспар<br>6M - Балама жоспар<br>7M - Балама жоспар<br>8M - Балама жоспар",
          "notes": "8M"
        },
        {
          "field": "ZPORTFCOM",
          "description": "Компаниялар портфелінің ID",
          "value_example": "Компаниялар анықтамалығын қараңыз",
          "notes": "DO0005"
        },
        {
          "field": "ZBPTIME",
          "description": "Есепті кезең",
          "value_example": "аа.жжжж",
          "notes": "12.2024"
        },
        {
          "field": "ZBPACCT",
          "description": "Есеп жоспары",
          "value_example": "",
          "notes": "000200000000"
        },
        {
          "field": "ZBPSUM",
          "description": "Сома",
          "value_example": "",
          "notes": ""
        }
      ]
    },
    "BP4_dds": {
      "bp4-dzo": [
        {
          "field": "ZBPDATYPE",
          "description": "Дерек түрі",
          "value_example": "DT_2 - Факт",
          "notes": "DT_2 - Факт"
        }
      ],
      "bp4-p-pk": [
        {
          "field": "ZBPDATYPE",
          "description": "Дерек түрі",
          "value_example": " DT_1 - Жоспар<br>DT_3 - Бағалау<br>DT_4 - Болжам",
          "notes": "DT_3"
        },
        {
          "field": "ZBPMETD",
          "description": "Жоспарлау әдісі",
          "value_example": "1M - Негізгі жоспар<br>2M - Балама жоспар<br>3M - Балама жоспар<br>4M - Балама жоспар<br>5M - Балама жоспар<br>6M - Балама жоспар<br>7M - Балама жоспар<br>8M - Балама жоспар",
          "notes": "1M"
        },
        {
          "field": "ZPORTFCOM",
          "description": "Компаниялар портфелінің ID",
          "value_example": "Компаниялар анықтамалығын қараңыз",
          "notes": "DO0005"
        },
        {
          "field": "ZBPPER",
          "description": "Жоспарлы бесжылдық",
          "value_example": "Логика бойынша толтырылады: жжжж-(жжжж+4)",
          "notes": "2025-2029"
        },
        {
          "field": "ZBPTIME",
          "description": "Есепті кезең",
          "value_example": "Бағалау деректері үшін есепті кезең әрқашан 12.жжжж.<br>Жоспар деректері үшін - тоқсандық айлар (03, 06, 09, 12).<br>Болжам деректері үшін - айлық айлар (01-12).",
          "notes": "12.2024"
        },
        {
          "field": "ZBPACCT",
          "description": "Есеп жоспары",
          "value_example": "",
          "notes": "000200000000"
        },
        {
          "field": "ZBPSUM",
          "description": "Сома",
          "value_example": "(Сандық мән)",
          "notes": "Сома"
        }
      ],
      "bp4-q-pk": [
        {
          "field": "ZBPDATYPE",
          "description": "Дерек түрі",
          "value_example": "DT_3 - Бағалау",
          "notes": "DT_3"
        },
        {
          "field": "ZBPMETD",
          "description": "Жоспарлау әдісі",
          "value_example": "1M - Негізгі жоспар<br>2M - Балама жоспар<br>3M - Балама жоспар<br>4M - Балама жоспар<br>5M - Балама жоспар<br>6M - Балама жоспар<br>7M - Балама жоспар<br>8M - Балама жоспар",
          "notes": "1M"
        },
        {
          "field": "ZPORTFCOM",
          "description": "Компаниялар портфелінің ID",
          "value_example": "Компаниялар анықтамалығын қараңыз",
          "notes": "DO0005"
        },
        {
          "field": "ZBPTIME",
          "description": "Есепті кезең",
          "value_example": "Есепті кезең логика бойынша толтырылады: аа.жжжж.<br>Бұл формада орындалу деректері тоқсанға енгізіледі. Мысалы: 03.2025; 06.2025; 09.2025; 12.2025",
          "notes": "09.2024"
        },
        {
          "field": "ZBPPOLIT",
          "description": "Саясат түрі",
          "value_example": "POL_PC немесе POL_FU",
          "notes": "POL_FU"
        },
        {
          "field": "ZBPSUM",
          "description": "Сома",
          "value_example": "",
          "notes": ""
        }
      ],
      "bp4-dzo": [
        {
          "field": "ZBPDATYPE",
          "description": "Дерек түрі",
          "value_example": "DT_01 - Жоспар",
          "notes": "DT_01 - Жоспар"
        }
      ]
    },
    "BP6_TFR": {
      "bp6-m-pk": [
        {
          "field": "ZBPDATYPE",
          "description": "Дерек түрі",
          "value_example": "DT_03 - Бағалау<br>DT_02 - Факт<br>DT_01 - Мәтіндік көрсеткіш",
          "notes": "DT_02"
        },
        {
          "field": "ZPORTFCOM",
          "description": "Компаниялар портфелінің ID",
          "value_example": "Компаниялар анықтамалығын қараңыз",
          "notes": "DO0005"
        },
        {
          "field": "ZBPSTFC",
          "description": "БАӘ - фактор",
          "value_example": "Пішін құрастыру кезінде бесжылдыққа және ПК-ға сәйкес баптар DSO ZBP_D33-тен алынады (ZBP_D33 парағын қараңыз)",
          "notes": ""
        },
        {
          "field": "ZBPTTYPE",
          "description": "Транзакция түрі",
          "value_example": "",
          "notes": "Мәтіндік көрсеткіш үшін<br>T_007-Жоспарға қатысты бағалау өзгерістерінің түсіндірмесі<br>T_008-Өткен жылдың ұқсас кезеңінің фактісіне қатысты бағалау өзгерістерінің түсіндірмесі<br>T_014-Көрсеткішті орындамаудың іске асырылған айтарлықтай тәуекелдері<br>T_015-Тәуекелді азайту үшін іске асырылған алдын алу шаралары"
        },
        {
          "field": "ZBPTXT1",
          "description": "Жазба мәтіні",
          "value_example": "#",
          "notes": "Мәтіндік көрсеткіш үшін - 250 таңбаға дейін мәтіндік енгізу"
        },
        {
          "field": "ZBPSUM1",
          "description": "Сома 1",
          "value_example": "",
          "notes": "Мәтіндік көрсеткіш үшін - 0"
        }
      ],
      "bp6-p-pk": [
        {
          "field": "ZBPDATYPE",
          "description": "Дерек түрі",
          "value_example": "DT_04 - Болжам, DT_03 - Бағалау, DT_01 - Жоспар",
          "notes": "DT_04 - Болжам"
        },
        {
          "field": "ZBPMETD",
          "description": "Жоспарлау әдісі",
          "value_example": "1M - Негізгі жоспар<br>2M - Балама жоспар<br>3M - Балама жоспар<br>4M - Балама жоспар<br>5M - Балама жоспар<br>6M - Балама жоспар<br>7M - Балама жоспар<br>8M - Балама жоспар",
          "notes": "1M"
        },
        {
          "field": "ZPORTFCOM",
          "description": "Компаниялар портфелінің ID",
          "value_example": "Компаниялар анықтамалығын қараңыз",
          "notes": "DO0005"
        },
        {
          "field": "ZBPPER",
          "description": "Жоспарлы бесжылдық",
          "value_example": "Логика бойынша толтырылады: жжжж-(жжжж+4)",
          "notes": "2025-2029"
        },
        {
          "field": "ZBPTIME",
          "description": "Есепті кезең",
          "value_example": "Логика бойынша толтырылады: жжжжаа. \"Жоспар\" деректері үшін айлар бойынша бөлінген. Мысалы: 202501; 202512<br>\"Болжам\" деректері үшін жылдар бойынша бөлінген. Мысалы: 202612; 202712",
          "notes": "202612; 202712"
        },
        {
          "field": "ZBPSTFC",
          "description": "БАӘ - фактор",
          "value_example": "Пішін құрастыру кезінде бесжылдыққа және ПК-ға сәйкес баптар DSO ZBP_D33-тен алынады (ZBP_D33 парағын қараңыз)",
          "notes": ""
        },
        {
          "field": "ZBPSUM",
          "description": "Сома",
          "value_example": "(Сандық мән)",
          "notes": "Сома"
        }
      ],
      "bp6-q-pk": [
        {
          "field": "ZBPDATYPE",
          "description": "Дерек түрі",
          "value_example": "DT_02 - Факт, DT_03 - Бағалау, DT_01 - Мәтіндік көрсеткіш",
          "notes": "DT_02"
        },
        {
          "field": "ZPORTFCOM",
          "description": "Компаниялар портфелінің ID",
          "value_example": "Компаниялар анықтамалығын қараңыз",
          "notes": "DO0005"
        },
        {
          "field": "ZBPTIME",
          "description": "Есепті кезең",
          "value_example": "Есепті кезең логика бойынша толтырылады: жжжжаа",
          "notes": "202409"
        },
        {
          "field": "ZBPSTFC",
          "description": "БАӘ - фактор",
          "value_example": "Пішін құрастыру кезінде бесжылдыққа және ПК-ға сәйкес баптар DSO ZBP_D33-тен алынады (ZBP_D33 парағын қараңыз)",
          "notes": ""
        },
        {
          "field": "ZBPTTYPE",
          "description": "Транзакция түрі",
          "value_example": "#",
          "notes": "Мәтіндік көрсеткіш үшін<br>T_007-Жоспарға қатысты бағалау өзгерістерінің түсіндірмесі<br>T_008-Өткен жылдың ұқсас кезеңінің фактісіне қатысты бағалау өзгерістерінің түсіндірмесі<br>T_014-Көрсеткішті орындамаудың іске асырылған айтарлықтай тәуекелдері<br>T_015-Тәуекелді азайту үшін іске асырылған алдын алу шаралары"
        },
        {
          "field": "ZBPTXT1",
          "description": "Жазба мәтіні",
          "value_example": "",
          "notes": "Мәтіндік көрсеткіш үшін - 250 таңбаға дейін мәтіндік енгізу"
        },
        {
          "field": "ZBPSUM1",
          "description": "Сома 1",
          "value_example": "",
          "notes": "Мәтіндік көрсеткіш үшін - 0"
        }
      ]
    }
  }
}