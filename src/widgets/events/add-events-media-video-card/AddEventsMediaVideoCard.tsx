import type { FC } from "react";
import { AddMedia, FormCard, useMediaFiles } from "../../../shared";

import styles from "./AddEventsMediaVideoCard.module.scss";

type AddEventsMediaVideoCardProps = {
  cardTitle: string;
  eventsVideoList: string[];  //TODO 
}

const AddEventsMediaVideoCard: FC<AddEventsMediaVideoCardProps> = (props) => {
  const { cardTitle,  } = props;
  const video = useMediaFiles()

  return (
    <FormCard title={cardTitle}>
      <div className={styles.contentMediaContainer}>
      <AddMedia
      fileRef={video.fileRef}
      changeFile={video.changeFile}
      accept='video/*'
      description="Добавить видео"
      size='lg'
      />
      </div>
    </FormCard>
  );
};

export { AddEventsMediaVideoCard };