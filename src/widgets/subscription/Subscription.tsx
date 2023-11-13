import type { FC } from 'react';
import { AddCircle } from '../../shared';

import styles from './Subscription.module.scss';

interface ISubcription {
  label: string
  topic: string
  amount: string
  price: string
  title: string
}

const Subscription: FC<ISubcription> = ({label,topic, amount, price, title}) => {
  return (
    <div className={styles.subscription}>
      <ul className={styles.subscription_header}>
        <li>
          <p>{label}</p>
          <span>{topic}</span>
        </li>
        <li>
          <p>Увеличьте охват пользователей до</p>
          <span>{amount}</span>
        </li>
      </ul>
      <div className={styles.conteiner_main}>
        <h3>{title}</h3>
        <p className={styles.discription}>
          Оформите подписку, чтобы продвигать свое событие для большего охвата
          пользователей
        </p>
        <div>
          <span>от {price}₽/мес</span>
          <div className={styles.button}>
            <p>Подключить</p>
            <AddCircle color='#fff'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Subscription }
