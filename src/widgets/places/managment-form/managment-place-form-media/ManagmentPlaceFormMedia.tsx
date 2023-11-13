import { AddMedia, FormCard, MediaDisplay } from "../../../../shared";

import styles from "./ManagmentPlaceFormMedia.module.scss";

type Props = {
  changeFile: (e: any) => void
  fileRef: React.RefObject<HTMLInputElement>
  fileList:{
    id: string;
    result: string | ArrayBuffer | null;
    file: File | null;
}[];
  removeFile: (id: string) => void
  handleEditFile: (id?: string | undefined) => void
}

const ManagmentPlaceFormMedia = (props: Props) => {
  const {  changeFile, fileList, fileRef, handleEditFile, removeFile } = props;
 

  return (
    <FormCard title={"Изображение места"}>
      <div className={styles.contentMediaContainer}>
        <h2 className={styles.subTitle}>Preview места</h2>
        {fileList.length > 0 ? (
          <MediaDisplay
            size="lg"
            image={fileList[0].result}
            editDisplay={() => handleEditFile(fileList[0].id)}
            removeDisplay={() => removeFile(fileList[0].id)}
          />
        ) : (
          <AddMedia
            changeFile={changeFile}
            fileRef={fileRef}
            description="Добавить фото"
            size="lg"
          />
        )}
      </div>
    </FormCard>
  );
};

export { ManagmentPlaceFormMedia };
