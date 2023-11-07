import {
  AddCircle,
  Calendar,
  ListMenuSvg,
  LocationSvg,
  Managers,
  PaySvg,
  ProfileSvg,
  Star,
  TagSvg,
  UsersSvg,
} from "../svg";
import { SvgIconComponent } from "../types";

export interface IChildren {
  title: string;
  path: string;
  Icon: SvgIconComponent;
}

export interface Iitem {
  title: string;
  elem: string;
  path?: string;
  Icon: SvgIconComponent;
  children?: IChildren[];
}

export const menuSideBarList: Iitem[] = [
  {
    title: "События",
    elem: "events",
    Icon: Calendar,
    children: [
      {
        title: "Добавить",
        path: "event/add",
        Icon: AddCircle,
      },
      {
        title: "Список событий",
        path: "events",
        Icon: ListMenuSvg,
      },
    ],
  },
  {
    title: "Места",
    elem: "places",
    Icon: LocationSvg,
    children: [
      {
        title: "Добавить",
        path: "places/add",
        Icon: AddCircle,
      },
      {
        title: "Список мест",
        path: "places",
        Icon: ListMenuSvg,
      },
    ],
  },
  {
    title: "Оплата",
    elem: "costs",
    Icon: PaySvg,
    children: [
      {
        title: "Добавить",
        path: "cost/add",
        Icon: AddCircle,
      },
      {
        title: "Список вариантов",
        path: "costs",
        Icon: ListMenuSvg,
      },
    ],
  },

  {
    title: "Теги",
    elem: "tags",
    Icon: TagSvg,
    path: "tags",
    // children: [
    //   {
    //     title: "Добавить",
    //     path: "tag/add",
    //     Icon: AddMenuSvg,
    //   },
    //   {
    //     title: "Список тегов",
    //     path: "tags",
    //     Icon: ListMenuSvg,
    //   },
    // ],
  },
  {
    title: `Тематические карточки`,
    elem: "cards",
    Icon: Star,
    children: [
      {
        title: "Добавить",
        path: "cards/add",
        Icon: AddCircle,
      },
      {
        title: "Список карточек",
        path: "cards",
        Icon: ListMenuSvg,
      },
    ],
  },
  {
    title: "Менеджеры",
    path: "managers",
    elem: "managers",
    Icon: Managers,
  },
  {
    title: "Пользователи",
    path: "users",
    elem: "users",
    Icon: UsersSvg,
  },
  {
    title: "Профиль",
    path: "profile/1",
    elem: "setting",
    Icon: ProfileSvg,
  },
  // {
  //   title: "Статистика",
  //   path: "statistics",
  //   elem: "statistics",
  //   Icon: ProfileSvg,
  // },
];
