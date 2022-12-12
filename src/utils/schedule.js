import shift_11 from '../images/shift_11.svg';
import shift_12 from '../images/shift_12.svg';

export const SHIFT_ICONS = [shift_11, shift_12];

export const TIP = {
  title: 'Как пользоваться расписанием?',
  content: [
    'На данной странице показана информация о расписании точки. Цветом выделено ваше расписание.',
    'Чтобы перемещаться между сотрудниками точки - используйте стрелки.'
  ]
};

export const SCHEDULE_11 = {
  'header': ['null', 'null', 30],
  'rows': [{
    'employee': {
      'name': 'Татьяна Крючкова',
      'role': 'Бариста'
    },
    'summary': {
      'hours': 168,
      'count': 21
    },
    'shifts': [
      11, 11, null, null, 12, 12, null, null, 11, 11,
      null, null, 12, 12, null, null, 11, 11, null, null,
      12, 12, null, null, 11, 11, null, null, 12, 12
    ],
    'spots': [
      'Малышева', 'Малышева', null, null, 'Малышева', 'Малышева', null, null, 'Малышева', 'Малышева',
      null, null, 'Малышева', 'Малышева', null, null, 'Малышева', 'Малышева', null, null,
      'Малышева', 'Малышева', null, null, 'Малышева', 'Малышева', null, null, 'Малышева', 'Малышева'
    ]
  },
  {
    'employee': {
      'name': 'Евгения Ишкина',
      'role': 'Фотограф'
    },
    'summary': {
      'hours': 128,
      'count': null
    },
    'shifts': [
      11, 11, null, null, 12, 12, null, null, 11, 11,
      null, null, 12, 12, null, null, 11, 11, null, null,
      12, 12, null, null, 11, 11, null, null, 12, 12
    ],
    'spots': [
      'Малышева', 'Малышева', null, null, 'Малышева', 'Малышева', null, null, 'Малышева', 'Малышева',
      null, null, 'Малышева', 'Малышева', null, null, 'Малышева', 'Малышева', null, null,
      'Малышева', 'Малышева', null, null, 'Малышева', 'Малышева', null, null, 'Малышева', 'Малышева'
    ]
  },
  {
    'employee': {
      'name': 'Денис Байдиев',
      'role': 'Старший бариста'
    },
    'summary': {
      'hours': 168,
      'count': 21
    },
    'shifts': [
      11, 11, null, null, 12, 12, null, null, 11, 11,
      null, null, 12, 12, null, null, 11, 11, null, null,
      12, 12, null, null, 11, 11, null, null, 12, 12
    ],
    'spots': [
      'Малышева', 'Малышева', null, null, 'Малышева', 'Малышева', null, null, 'Малышева', 'Малышева',
      null, null, 'Малышева', 'Малышева', null, null, 'Малышева', 'Малышева', null, null,
      'Малышева', 'Малышева', null, null, 'Малышева', 'Малышева', null, null, 'Малышева', 'Малышева'
    ]
  }]
};
