import { useState } from "react";
import { ButtonRG } from "../../../shared";
import { AddEventsMediaImagesCard } from "../add-events-media-images-card/AddEventsMediaImagesCard";
import { AddEventsMediaVideoCard } from "../add-events-media-video-card/AddEventsMediaVideoCard";

import styles from "./AddEventsMediaForms.module.scss";


const AddEventsMediaForms = () => {
  const [previewImg, ] = useState<string>('')
  const [eventsImgList, ] = useState<string[]>([])
  const [eventsVideoList, ] = useState<string[]>([])

  return (
    <div className={styles.root}>

      <AddEventsMediaImagesCard
      cardTitle="Изображения события"
      previewImg={previewImg}
      eventsImgList={eventsImgList}
      />

      <AddEventsMediaVideoCard
      cardTitle="Видео события"
      eventsVideoList={eventsVideoList}
      />

      <div className={styles.submitContainer}>
      <ButtonRG  handleClick={() => {}}>
      Продолжить
      </ButtonRG>
      </div>

    </div>
  );
};

export { AddEventsMediaForms };