import { UserCard } from '../../widgets';
import GraphLine from '../../widgets/graph-line/GraphLine.jsx';

import styles from './ProfilePage.module.scss';

const mockUser = {
  firstName: 'Иван',
  lastName: 'Петров',
  patronymic: 'Сергеевич',
  email: 'testuser@mail.com',
  image:
    'https://res.cloudinary.com/ds289tkqj/image/upload/v1671866967/Users/qwcg9w11qwqzeshkbccy.jpg',
  phone: '79497772345',
  id: '124dasf',
};

const ProfilePage = () => {
  return (
    <div className={styles.root}>
      <UserCard
        image={mockUser.image}
        email={mockUser.email}
        firstName={mockUser.firstName}
        lastName={mockUser.lastName}
        patronymic={mockUser.patronymic}
        phone={mockUser.phone}
      />
      <GraphLine />
    </div>
  );
};

export default ProfilePage;
