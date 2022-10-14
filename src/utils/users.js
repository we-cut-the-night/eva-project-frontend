export const USER_1 = {
  id: 1,
  account_email: "baristov_chef@yandex.ru",
  account_password: "",
  empl_name: "Баристов Борис Борисович",
  empl_initials: "ББ",
  empl_start: "2022-01-01",
  empl_end: "2099-12-31",
  empl_birth: "1998-01-01",
  empl_type: "Полная",
  empl_role: "Шеф-бариста",
  empl_add: "Подбор и обучение бариста",
  empl_grade: {
    "Стажер": "2022-01-01",
    "Классика (базовая)": "2022-03-01",
    "Брюверс": "2022-04-01",
    "Классика (полная)": "2022-05-01",
    "Доп. обязанности": "2022-09-01",
  },
  empl_schedule: [
    {
      date: "15.10.2022",
      type: "11",
      hh: 9
    },
    {
      date: "16.10.2022",
      type: "12",
      hh: 8
    },
    {
      date: "17.10.2022",
      type: "11",
      hh: 9
    }
  ],
  empl_income: [
    {
      mm: "Октябрь",
      date: "1 - 15",
      hh: 66,
      salary: 16500
    },
    {
      mm: "Октябрь",
      date: "16 - 31",
      hh: 58,
      salary: 14500
    }
  ],
  empl_salary: {
    2022: {
    "Почасовая ставка": [100, 100, 120, 140, 160, 160, 160, 160, 180, 180, 180, 180],
    "Фикс": [null, null, null, null, null, null, null, null, null, null, null, null]
    }
  },
  empl_contacts: {
    address: "г. Екатеринбург, ул. Бориса Ельцина, 3",
    phone: "+79008007060",
    telegram: "@boris_britva",
    instagram: "@barista_boris"
  },
  empl_docs: {
    "СНИЛС": "123-456-789 00",
    "Паспорт": "11 04 999999",
    "Трудовая книжка": 2015723,
    "ИНН": 7736050003,
    "Медкнижка": true
  },
  org_name: "Кофе и булка",
  org_depart: "Бар",
  org_spot: "Аэропорт Кольцово",
  empl_agree: true,
  empl_grants: {
    "Редактирование ролей": true
  }
};

export const USER_2 = {
  id: 2,
  account_email: "barista_zoomer@yandex.ru",
  account_password: "",
  empl_name: "Зумер Иван Иванович",
  empl_initials: "ЗИ",
  empl_start: "2022-03-01",
  empl_end: "2099-12-31",
  empl_birth: "2002-01-01",
  empl_type: "Полная",
  empl_role: "Бариста",
  empl_add: "SMM",
  empl_grade: {
    "Стажер": "2022-03-01",
    "Классика (базовая)": "2022-05-01",
    "Брюверс": "",
    "Классика (полная)": "",
    "Доп. обязанности": "",
  },
  empl_schedule: [
    {
      date: "15.10.2022",
      type: "12",
      hh: 8
    },
    {
      date: "16.10.2022",
      type: "11",
      hh: 9
    }
  ],
  empl_income: [
    {
      mm: "Октябрь",
      date: "1 - 15",
      hh: 56,
      salary: 11200
    },
    {
      mm: "Октябрь",
      date: "16 - 31",
      hh: 48,
      salary: 9600
    }
  ],
  empl_salary: {
    2022: {
    "Почасовая ставка": [null, null, 100, 100, 120, 120, 120, 120, 120, 120, 120, 120],
    "Фикс": [null, null, null, null, null, null, null, null, null, null, null, null]
    }
  },
  empl_contacts: {
    address: "г. Екатеринбург, ул. Гоголя, 5",
    phone: "+79008007060",
    telegram: "@no_money_no_honey",
    instagram: "@z___ii"
  },
  empl_docs: {
    "СНИЛС": "789-456-123 99",
    "Паспорт": "12 05 000000",
    "Трудовая книжка": 3026834,
    "ИНН": 8847060004,
    "Медкнижка": false
  },
  org_name: "Кофе и булка",
  org_depart: "Бар",
  org_spot: "Аэропорт Кольцово",
  empl_agree: true,
  empl_grants: {
    "Редактирование ролей": false
  }
};
