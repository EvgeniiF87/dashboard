import type { FC } from 'react';
import { useLogoutUser } from '../../../entities';

import styles from './AuthLogout.module.scss'
import { LogoutSvg } from '../../../shared';


const AuthLogout: FC = () => {
  const { logoutUser } = useLogoutUser()

  const handleLogout = () => {
    logoutUser()
  }

  return (
    <button onClick={handleLogout} className={styles.buttonLogout} >
      Выйти
      <LogoutSvg/>
    </button>
  );
};

export  { AuthLogout };