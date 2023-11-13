import { ContentHeader, EVENTS } from '../../shared';
import { Rating, Subscription, UserCard } from '../../widgets';
import GraphColumn from '../../widgets/statistics/graph-column/GraphColumn';
import GraphLine from '../../widgets/statistics/graph-line/GraphLine.js';


import styles from './ProfilePage.module.scss';

const mockUser = {
  firstName: 'Иван',
  lastName: 'Петров',
  patronymic: 'Сергеевич',
  role: 'role',
  email: 'testuser@mail.com',
  image:
    'https://res.cloudinary.com/ds289tkqj/image/upload/v1671866967/Users/qwcg9w11qwqzeshkbccy.jpg',
  phone: '79497772345',
  id: '124dasf',
};

const ProfilePage = () => {
  return (
    <div className={styles.root}>
      <ContentHeader
        title="Список событий"
        breadcrumbs={EVENTS.breadcrumbProfilePage}
      />
      <div className={styles.container}>
        <div className={styles.user}>
          <UserCard
            image={mockUser.image}
            email={mockUser.email}
            firstName={mockUser.firstName}
            lastName={mockUser.lastName}
            patronymic={mockUser.patronymic}
            phone={mockUser.phone}
            role={mockUser.role}
          />
        </div>
        <div className={styles.rating}>
          <Rating />
        </div>
        <div className={styles.subscription}>
          <Subscription
            label='Добавьте свое событие в'
            topic='ТОП-10'
            amount='5000'
            title='Продвижение'
            price='99'
          />
        </div>
        <div className={styles.graphLine}>
          <GraphLine />
        </div>
      </div>
      <GraphColumn />
    </div>
  );
};

export default ProfilePage;
