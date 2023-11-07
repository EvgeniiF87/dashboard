import { formatPhoneNumber } from "../../../shared/lib/helpers/formatPhone";

import styles from "./UserCard.module.scss";

type UserCardProps = {
  image: string;
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  patronymic?: string;
};

const UserCard = ({
  email,
  image,
  phone,
  firstName='',
  lastName='',
  patronymic='',
}: UserCardProps) => {
  return (
    <section className={styles.root}>
      <picture className={styles.image}>
        <img
          src={image}
          alt={"user image"}
          width={163}
          height={136}
        />
      </picture>
      <span className={styles.name}>{[firstName, lastName].join(" ")}</span>

      <div className={styles.detailInfo}>
        <span className={styles.detailTitle}>Details</span>
        <p>
          <span>Name:</span> {[firstName, lastName, patronymic].join(" ")}
        </p>
        {email &&
        <p>
          <span>Email:</span> {email}
        </p>
        }
        {phone &&
        <p>
          <span>Phone:</span> {formatPhoneNumber(phone)}
        </p>
        }
      </div>
    </section>
  );
};

export { UserCard };
