// import { formatPhoneNumber } from '../../../shared/lib/helpers/formatPhone';

import { useNavigate } from 'react-router-dom';
import styles from './UserCard.module.scss';

type UserCardProps = {
  image: string;
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  patronymic?: string;
  role?: string;
};

const UserCard = ({
  //email,
  image,
  //phone,
  firstName = '',
  lastName = '',
  // patronymic = '',
  role = '',
}: UserCardProps) => {
  const pablished = 79;
  const eventsHeld = 74;
  const sumViews = 5423;

  const navigation = useNavigate()

  return (
    <section className={styles.root}>
      <picture className={styles.image}>
        <img src={image} alt={'user image'} />
      </picture>
      <h2 className={styles.name}>{[firstName, lastName].join(' ')}</h2>
      <h2 className={styles.role}>{role}</h2>
      <ul className={styles.container_statistics}>
        <li className={styles.statistics}>
          Опубликованных событий
          <span>{pablished}</span>
        </li>
        <li className={styles.statistics}>
          Проведенных событий<span>{eventsHeld}</span>
        </li>
        <li className={styles.statistics}>
          Количество просмотров<span>{sumViews}</span>
        </li>
      </ul>
      <button onClick={() => navigation('/profile/:id/edit')} className={styles.button}>Редактировать профиль</button>
    </section>
  );
};

export { UserCard };
