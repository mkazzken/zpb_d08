// AUTO-GENERATED FROM data DIRECTORY. DO NOT EDIT MANUALLY.
window.EMBEDDED_DATA = {
  "ru": {
    "BP3_balance": {
      "balance-ispoln": {
        "zbp_d08_ocenka.json": [
          {
            "field": "ZBPDATYPE",
            "description": "Тип данных",
            "value_example": " ",
            "notes": "DT_3 - Оценка"
          },
          {
            "field": "ZBPMETD",
            "description": "Метод планирования",
            "value_example": "1M - Базовый план<br>2M - Альтернативный план<br>3M - Альтернативный план<br>4M - Альтернативный план<br>5M - Альтернативный план<br>6M - Альтернативный план<br>7M - Альтернативный план<br>8M - Альтернативный план"
            ,
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
          }
        ]
      },
      "BP3-DZO-balance-dzo": {
        "structure_zbp_d06_fact.json": [
          {
            "field": "ZBPDATYPE",
            "description": "Тип данных",
            "value_example": "DT_1 -План<br>DT_2 - Факт<br>DT_3 - Оценка",
            "notes": "DT_1"
          },
          {
            "field": "ZBPMETD",
            "description": "Метод планирования",
            "value_example": "1M - Базовый план<br>2M - Альтернативный план<br>3M - Альтернативный план<br>4M - Альтернативный план<br>5M - Альтернативный план<br>6M - Альтернативный план<br>7M - Альтернативный план<br>8M - Альтернативный план"
            ,
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
      },
      "BP3-P-PK-predicted-balance": {
        "bp3-p-pk_zbp_d06_ocenka.json": [
           {
            "field": "ZBPDATYPE",
            "description": "Тип данных",
            "value_example": "DT_1 - План<br>DT_3 - Оценка<br>DT_4 -Прогноз",
            "notes": "DT_3"
          },
          {
            "field": "ZBPMETD",
            "description": "Метод планирования",
            "value_example": "1M - Базовый план<br>2M - Альтернативный план<br>3M - Альтернативный план<br>4M - Альтернативный план<br>5M - Альтернативный план<br>6M - Альтернативный план<br>7M - Альтернативный план<br>8M - Альтернативный план"
            ,
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
      },
      "BP3-Q-PK": {
        "zpb_d08.json": [
          {
            "field": "ZBPDATYPE",
            "description": "Тип данных",
            "value_example": "DT_3 - Оценка",
            "notes": "DT_3"
          },
          {
            "field": "ZBPMETD",
            "description": "Метод планирования",
            "value_example": "1M - Базовый план<br>2M - Альтернативный план<br>3M - Альтернативный план<br>4M - Альтернативный план<br>5M - Альтернативный план<br>6M - Альтернативный план<br>7M - Альтернативный план<br>8M - Альтернативный план"
            ,
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
        ]
      }
    },
    "BP3_dds": {
      "BP4-DZO-dds": {
        "zbp_d03_fact.json": 
        [
          {
            "field": "ZBPDATYPE",
            "description": "Тип данных",
            "value_example": "DT_2 - Факт",
            "notes": "DT_2 - Факт"
          }
        ]
      },
      "BP4-P-PK-predicted-dds": {
        "zbp_d05_ocenka.json": [
          {
            "field": "ZBPDATYPE",
            "description": "Тип данных",
            "value_example": " DT_1 - План<br>DT_3 - Оценка<br>DT_4 - Прогноз",
            "notes": "DT_3"
          },
          {
            "field": "ZBPMETD",
            "description": "Метод планирования",
            "value_example": "1M - Базовый план<br>2M - Альтернативный план<br>3M - Альтернативный план<br>4M - Альтернативный план<br>5M - Альтернативный план<br>6M - Альтернативный план<br>7M - Альтернативный план<br>8M - Альтернативный план"
            ,
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
        ]
      },
      "BP4-Q-PK-dds-ispoln": {
        "bp4-q-pk-zbp_d03_ocenka.json": [
          {
            "field": "ZBPDATYPE",
            "description": "Тип данных",
            "value_example": "DT_3 - Оценка",
            "notes": "DT_3"
          },
          {
            "field": "ZBPMETD",
            "description": "Метод планирования",
            "value_example": "1M - Базовый план<br>2M - Альтернативный план<br>3M - Альтернативный план<br>4M - Альтернативный план<br>5M - Альтернативный план<br>6M - Альтернативный план<br>7M - Альтернативный план<br>8M - Альтернативный план"
            ,
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
        ]
      }
    },
    "BP6_TFR": {
      "BP6-DZO-TFR": {
        "zbp_d15_plan.json": [
          {
            "field": "ZBPDATYPE",
            "description": "Тип данных",
            "value_example": "DT_01 - План",
            "notes": "DT_01 - План"
          }
        ],
      },
      "BP6-M-PK-tfr-monthly": {
        "bp6-m-pk-zbp_d17_fact.json": [
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
          },
        ]
      },
      "BP6-P-PK_prognoz-tfr": {
        "bp6-p-pk-zbp_d06_prognoz.json": [
          {
            "field": "ZBPDATYPE",
            "description": "Тип данных",
            "value_example": "DT_04 - Прогноз, DT_03 - Оценка, DT_01 - План",
            "notes": "DT_04 - Прогноз"
          },
         {
            "field": "ZBPMETD",
            "description": "Метод планирования",
            "value_example": "1M - Базовый план<br>2M - Альтернативный план<br>3M - Альтернативный план<br>4M - Альтернативный план<br>5M - Альтернативный план<br>6M - Альтернативный план<br>7M - Альтернативный план<br>8M - Альтернативный план"
            ,
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
      },
      "BP6-Q-PK-TFR": {
        "bp6-q-pk-zbp_d17_fact_period.json": [
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
        
        ]
      }
    }
  }
};
