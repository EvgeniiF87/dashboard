import { Outlet } from "react-router-dom";
import { NotificationList } from "../../notification";

const LayoutAuth = () => {


  return (
    <>
      <NotificationList/>
      <Outlet />
    </>
  );
};

export { LayoutAuth };