import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import * as page from "../../pages";
import { Layout, LayoutAuth } from "../../widgets";
import { NAV } from "./nav-links";

export const routerApp = createBrowserRouter(
  createRoutesFromElements(
    <> 
    <Route path={`${NAV.MAIN}`} element={<Layout />}>
      <Route index element={<page.HomePage />} />
      <Route path={`${NAV.STATISTICS}`} element={<page.Statistics />} />
      <Route path={`${NAV.EVENTS}`} element={<page.EventsPage />} />
      <Route path={`${NAV.EVENT_ADD}`} element={<page.EventAddPage />} />
      <Route path={`${NAV.PLACES}`} element={<page.PlacesPage />} />
      <Route path={`${NAV.PLACE_ADD}`} element={<page.PlaceAddPage />} />
      <Route path={`${NAV.EVENT_UPDATA}`} element={<page.EventUpdataPage />} />
      <Route path={`${NAV.PROFILE}`} element={<page.ProfilePage />} />
      <Route path={`${NAV.SUPPORT}`} element={<page.SupportPage/>}/>
      <Route path={`${NAV.NO_PAGE}`} element={<page.NoPage />} />
    </Route>
    <Route path={`${NAV.LOGIN_BY_PASSWORD}`} element={<LayoutAuth />}>
      <Route index element={<page.LoginByPasswordPage />} />
      <Route path={`${NAV.LOGIN_BY_PHONE}`} element={<page.LoginByPhonePage />} />
      <Route path={`${NAV.REGISTRATION}`} element={<page.RegistrationPage />} />
    </Route>
    </>
  )
);
