import type { FC } from "react";
import { AddMedia, FormCard, useMediaFiles } from "../../../shared";

import styles from "./AddEventsMediaImagesCard.module.scss";

type AddEventsMediaImagesCardProps = {
  cardTitle: string;
  previewImg: string;  //TODO 
  eventsImgList: string[];  //TODO 
}

const AddEventsMediaImagesCard: FC<AddEventsMediaImagesCardProps> = (props) => {
  const { cardTitle, } = props;
  const imagePlace = useMediaFiles()
  const imageEvents = useMediaFiles()

  return (
    <FormCard title={cardTitle}>
       <div className={styles.contentWrapper}>

      <div className={styles.contentMediaContainer}>
      <h2 className={styles.subTitle}>Preview события</h2>
      <AddMedia
      description="Добавить фото"
      changeFile={imagePlace.changeFile}
      fileRef={imagePlace.fileRef}
      accept='image/*'
      size='lg'
      />
      </div>

      <div className={styles.contentMediaContainer}>
      <h2 className={styles.subTitle}>Изображения события</h2>
      <AddMedia
      description="Добавить фото"
      changeFile={imageEvents.changeFile}
      fileRef={imageEvents.fileRef}
      accept='image/*'
      size='lg'
      />
      </div>

       </div>
    </FormCard>
  );
};

export { AddEventsMediaImagesCard };