import {
  AddMedia,
  ButtonRG,
  MediaDisplay,
  useMediaFiles,
} from "../../../../shared";

import styles from "./ModalEventsImages.module.scss";


const ModalEventsImages = () => {
  const mediaPreview = useMediaFiles();
  const mediaImages = useMediaFiles();
  const mediaVideo = useMediaFiles();

  return (
    <div className={styles.root}>
      <span>Preview события</span>
      {mediaPreview.fileList.length > 0 ? (
        <MediaDisplay
          size="lg"
          image={mediaPreview.fileList[0].result}
          editDisplay={() =>
            mediaPreview.handleEditFile(mediaPreview.fileList[0].id)
          }
          removeDisplay={() =>
            mediaPreview.removeFile(mediaPreview.fileList[0].id)
          }
        />
      ) : (
        <AddMedia
          changeFile={mediaPreview.changeFile}
          fileRef={mediaPreview.fileRef}
          description="Добавить фото"
          size="lg"
        />
      )}
      <span>Изображения события</span>
      <ul className={ styles.container}>
        {mediaImages.fileList.map((file) => (
          <li key={file.id}>
            <MediaDisplay
              size={mediaImages.fileList.length > 5 ? "sm" : "lg"}
              image={file.result}
              editDisplay={() => mediaImages.handleEditFile(file.id)}
              removeDisplay={() => mediaImages.removeFile(file.id)}
            />
          </li>
        ))}
        <AddMedia
          changeFile={mediaImages.changeFile}
          fileRef={mediaImages.fileRef}
          description="Добавить фото"
          size={mediaImages.fileList.length > 5 ? "sm" : "lg"}
        />
      </ul>
      <span>Видео события</span>
      <ul className={ styles.container}>
        {mediaVideo.fileList.map((file) => (
          <li key={file.id}>
            <MediaDisplay
              size={mediaVideo.fileList.length > 5 ? "sm" : "lg"}
              video={file.result}
              editDisplay={() => mediaVideo.handleEditFile(file.id)}
              removeDisplay={() => mediaVideo.removeFile(file.id)}
            />
          </li>
        ))}
        <AddMedia
          accept="video/*"
          changeFile={mediaVideo.changeFile}
          fileRef={mediaVideo.fileRef}
          description="Добавить фото"
          size={mediaVideo.fileList.length > 5 ? "sm" : "lg"}
        />
      </ul>
      <div className={styles.submitContainer}>
        <ButtonRG handleClick={() => {}}>Сохранить</ButtonRG>
      </div>
    </div>
  );
};

export { ModalEventsImages };
