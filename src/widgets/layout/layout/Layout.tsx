import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthSelect, useSideIsOpen } from "../../../entities";
import { NotificationList } from "../../notification";
import { SideBar } from "../layout-side-bar/SideBar";
import { TopBar } from "../layout-top-bar/TopBar";

import styles from './Layout.module.scss';

const Layout = () => {
  const { authorization } = useAuthSelect()
  const navigate = useNavigate()

  useEffect(() => {
    if (authorization) return;
    navigate('/login')
  }, [authorization])


  const { isOpen } = useSideIsOpen()

  return (
    <div className={styles.root}>
      <NotificationList/>
      <SideBar />
      <div
        className={
          isOpen
            ? `${styles.contentWrapper} ${styles.open}`
            : styles.contentWrapper
        }
      >
        <TopBar />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export { Layout };