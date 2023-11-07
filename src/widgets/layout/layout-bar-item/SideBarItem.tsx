import { memo } from "react";
import type { FC } from "react";
import { ArrowBirdSvg, Iitem } from "../../../shared";

import styles from "./SideBarItem.module.scss";

interface IProps {
  item: Iitem;
  isOpen: boolean;
  isOpenBar: boolean;
  activePath: string;
  onClick: ({value, path}:{value: string, path: string | undefined}) => void;
  onClicNav: (href: string) => void;
}

const SideBarItem: FC<IProps> = memo(
  ({ item, onClick, isOpen, onClicNav, activePath,  isOpenBar }) => {
    const { title, Icon, children }: Iitem = item;


    return (
      <>
        <div
          onClick={() => onClick({ value: title, path: item.path})}
          className={
            children?.some(({path}) => activePath === path)
              ? `${styles.titleItem} ${styles.navActive}`
              : styles.titleItem
          }
        >
          <div className={styles.titleLeftContainer}>
            
            <div className={styles.iconMenu}>
            <Icon color="white"/>
            </div>
            <span className={isOpenBar ? `${styles.iconText} ${styles.iconText_active}` : styles.iconText}> {title}</span>
          </div>
          {item.children  && <ArrowBirdSvg direction={!isOpen ? "down" : "up"} />}
        </div>
        {isOpen && children?.length && (
          <ul>
            {children.map(({ title, path, Icon }) => (
              <li
                key={title}
                onClick={() => onClicNav(path)}
                className={
                  activePath === path
                    ? `${styles.childrenTitle} ${styles.activeLink}`
                    : styles.childrenTitle
                }
              >
                <div className={styles.titleLeftContainer}>
                <div className={isOpenBar
                                ? `${styles.iconMenu} ${styles.iconSmallMenu}`
                                : styles.iconMenu}>
                  <Icon color={activePath === path ? "#000" : "#E8E7E7"}/>
                </div>
                <span className={isOpenBar ? `${styles.iconText} ${styles.iconText_active}` : styles.iconText}>{title}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
);

export { SideBarItem };
