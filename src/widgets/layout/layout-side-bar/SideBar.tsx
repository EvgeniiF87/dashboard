import { useCallback, useMemo, useRef } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { ProfileSvg, SupportSvg, menuSideBarList } from "../../../shared";
import { SideBarItem } from "../layout-bar-item/SideBarItem";
import { useChangeMenuValue, useLayoutSelect, useSideIsOpen } from '../../../entities';
import { OpeningMenu } from '../../../features';

import styles from './SideBar.module.scss';

const SideBar = () => {
  const { changeMenu } = useChangeMenuValue()
  const { currentItemMenu } = useLayoutSelect()
  const { isOpen } = useSideIsOpen()
  const { pathname } = useLocation();
  const navigation = useNavigate();
  const ref = useRef<HTMLDListElement>(null)

  const titleMenu = menuSideBarList.map(item => item.title)
  
  const handleNavigationMenu = useCallback((href: string | undefined) => {
    if (typeof href === 'undefined') return;

    navigation(href);
  },[])

  const handleActiveMenu = useCallback(({value, path}:{value: string, path: string | undefined}) => {
    if (!titleMenu.includes(value)) return;

      changeMenu(value)

    if (path) {
      handleNavigationMenu(path)
    }  
    
  },[])


  const activePath = useMemo(() => pathname.slice(1), [pathname])


  return (
    <aside
      ref={ref}
      className={!isOpen ? `${styles.root} ${styles.smallRoot}` : styles.root}
    >
      <div className={
            isOpen
              ? `${styles.header} ${styles.header_active}`
              : styles.header
          }>
        <h2
          className={styles.headerText}
        >
          Панель управления
        </h2>
        <div className={styles.burger}>
          <OpeningMenu/>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.infoImg}>
          <ProfileSvg />
        </div>
        <div
          className={
            isOpen
              ? `${styles.infoValue} ${styles.infoValue_active}`
              : styles.infoValue
          }
        >
          JDMvDuB
        </div>
      </div>
      {menuSideBarList.map((menu) => (
        <SideBarItem
          isOpenBar={isOpen}
          isOpen={currentItemMenu === menu.title}
          onClick={handleActiveMenu}
          key={menu.elem}
          item={menu}
          onClicNav={handleNavigationMenu}
          activePath={activePath}
        />
      ))}
      <div 
        onClick={() => handleNavigationMenu('support')} 
        className={styles.support}
      >
        <SupportSvg/>
      </div>
    </aside>
  );
};

export { SideBar };
