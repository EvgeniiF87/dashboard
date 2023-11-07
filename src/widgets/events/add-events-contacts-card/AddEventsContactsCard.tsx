import type { FC } from "react";
import { AddSocial, FormCard, Input } from "../../../shared";

import styles from "./AddEventsContactsCard.module.scss";


type AddEventsContactsCardProps = {
  cardTitle: string;
  saitValue: string;
  phoneValue: string;
  socialValue: string;
  socialList: string[];
}

const AddEventsContactsCard: FC<AddEventsContactsCardProps> = (props) => {
  const { cardTitle, saitValue, phoneValue, socialValue, socialList } = props;

  return (
    <FormCard title={cardTitle}>
      <div className={styles.contentContainder}>
      <div className={styles.side}>
      <Input
        error={false}
        value={saitValue}
        label="Сайт"
        placeholder="Введите ссылку на сайт"
        onChange={() => {}}
        />
      <Input
        error={false}
        value={phoneValue}
        label="Телефон"
        placeholder="Введите номер телефона"
        onChange={() => {}}
        />
      </div>
      <div className={styles.side}>
      <Input
        error={false}
        value={socialValue}
        label="Соцсети"
        placeholder="Введите ссылку на социальную сеть"
        onChange={() => {}}
        />
        <AddSocial onClick={() => console.log('add social')}/>
        <ul className={styles.socialList}>
          {socialList.length > 0 && socialList.map(social =>
            <li key={social}  className={styles.socialListItem}>
              <span  className={styles.socialListItemTitle}>{social}</span>
            </li>
            )}
        </ul>
      </div>
      </div>
    </FormCard>
  );
};

export { AddEventsContactsCard };