import { OptionsSvg } from '../svg';

export const evetManagementList = [
  //{ title: "Редактировать", svg: UpdateEventSvg },
  { title: 'Опции', svg: OptionsSvg },
  // { title: "Add Info", svg: AddInfoSvg },
  // { title: "Add Image", svg: AddImagesSvg },
  // { title: "Add Tag", svg: AddTagSvg },
  // { title: "Add Cost", svg: AddMoneySvg },
  // { title: "Payment Methods", svg: PaymentMethodsSvg },
  // { title: "Remove", svg: RemoveSvg },
];

export const modalManagementHeaderList = [
  'Инцормация',
  'Изображение',
  'Теги',
  'Стоимость',
  'Оплата',
  // "Удалить" ,
];

const breadcrumbEventsPage = [
  { name: 'Главная', href: '/' },
  { name: 'Добавить событие', href: '/event/add' },
  { name: 'Cписок событий', href: null },
];

const breadcrumbAddEventPage = [
  { name: 'Главная', href: '/' },
  { name: 'События', href: '/events' },
  { name: 'Добавление события', href: null },
];

const breadcrumbProfilePage = [
  { name: 'Главная', href: '/' },
  { name: 'Личный кабинет', href: '/' },
];

const progressList = [
  'Основная информация',
  'Изображения, видео',
  'Дополнительная информация',
];

const tableHeadList = [
  ' ',
  'checkBox',
  '№',
  'Наименование',
  'Описание',
  'Направление',
  'Изображение',
  'Просмотры',
  'Публичное',
  'Рекомендуемое',
];

export const EVENTS = {
  tableHeadList,
  perPage: 17,
  progressList,
  breadcrumbAddEventPage,
  breadcrumbEventsPage,
  breadcrumbProfilePage,
};
