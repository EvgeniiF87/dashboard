import { FormCard, SearchTags } from "../../../shared";

import styles from "./AddEventsAdditionslTagsCard.module.scss";

type AddEventsAdditionslTagsCardProps = {
  cardTitle: string;
  tagValue: string;
  tagsList: { category: string; tags: string[] }[];
  onChange: (value: string) => void;
};

const AddEventsAdditionslTagsCard = ({
  cardTitle,
  tagValue,
  tagsList,
  onChange,
}: AddEventsAdditionslTagsCardProps) => {
  return (
    <FormCard title={cardTitle}>
      <h2 className={styles.additionSubTitle}>
        Добавьте не более 6 тегов для вашего события, чтобы пользователи могли
        быстрее его найти
      </h2>
      <SearchTags
        resultSearch={tagsList}
        value={tagValue}
        onChange={onChange}
      />
    </FormCard>
  );
};

export { AddEventsAdditionslTagsCard };
