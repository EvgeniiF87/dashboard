import { AuthLogout } from '../../../features';
import { Bell, Messages } from '../../../shared';
import Notification from '../../../shared/ui/notification/Notification';

import styles from './TopBar.module.scss';

const TopBar = () => {


  return (
    <header className={styles.root}>
      <div className={styles.icons}>
        <Notification Icon={Messages} color='red' number={3}/>
        <Notification Icon={Bell} color='red' number={1}/>
        <AuthLogout />
      </div>
  </header>
  );
};

export { TopBar };
