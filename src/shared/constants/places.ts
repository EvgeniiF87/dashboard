const breadcrumbPlacesPage = [
  { name: "Главная", href: "/" },
  { name: "Добавить место", href: "/places/add" },
  { name: "Список мест", href: null },
];
const breadcrumbPlaceAddPage = [
  { name: "Главная", href: "/" },
  { name: "Список мест", href: "/places" },
  { name: "Добавить место", href: null },
];

const tableHeadList = [
  " ",
  "checkBox",
  "№",
  "Наименование",
  "Описание",
  "Направление",
  "Изображение",
  "Публичное",
];


export const PLACES = {
  breadcrumbPlacesPage,
  breadcrumbPlaceAddPage,
  tableHeadList,
}