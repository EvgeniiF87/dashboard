import { lazy } from "react";

export const HomePage = lazy(() => import("./home/HomePage"));
export const LoginByPasswordPage = lazy(() => import("./login-by-password/LoginByPassword"))
export const LoginByPhonePage = lazy(() => import("./login-by-phone/LoginByPhone"))
export const LoginPage = lazy(() => import("./login/Login"));
export const RegistrationPage = lazy(() => import("./registration-page/RegistrationPage"));
export const EventAddPage = lazy(() => import("./event-add-page/EventAddPage"));
export const EventUpdataPage = lazy(() => import("./event-updata-page/EventUpdataPage"));
export const EventsPage = lazy(() => import("./events-page/EventsPage"));
export const TagsPage = lazy(() => import("./tags-page/TagsPage"));
export const NoPage = lazy(() => import("./no-page/NoPage"));
export const ProfilePage = lazy(() => import("./profile-page/ProfilePage"));
export const Statistics = lazy(() => import("./statistics/Statistics"));
export const PlaceAddPage = lazy(() => import("./place-add-page/PlaceAddPage"));
export const PlacesPage = lazy(() => import("./places-page/PlacesPage"));
export const SupportPage = lazy(() => import("./support-page/SupportPage"));
export const ProfileDataPage = lazy(() => import("./profile-data-page/ProfileData"));
export const ProfileEditPage = lazy(() => import("./profile-edit-page/ProfileEdit"));
export const PlaceUpdatePage = lazy(() => import("./place-update-page/PlaceUpdatePage"));
