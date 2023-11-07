import  { FC, useEffect, useState } from 'react';
import { Cross } from '../../svg';

import styles from './WindowNotification.module.scss';


type MessageErrorProps = {
  text: string;
}

const WindowNotification: FC<MessageErrorProps> = ({ text }) => {
  const [toggel, isToggel] = useState(false);

  useEffect(() => { // для демонстрации 
    setTimeout(() => isToggel(!toggel), 3000);
  }, []);

  return (
    <div
      className={
        toggel
          ? `${styles.conteiner} ${styles.conteiner_on}`
          : `${styles.conteiner}`
      }
    >
      <h1>{text}</h1>
      <div onClick={() => isToggel(false)}>
        <Cross />
      </div>
    </div>
  );
}

export { WindowNotification };