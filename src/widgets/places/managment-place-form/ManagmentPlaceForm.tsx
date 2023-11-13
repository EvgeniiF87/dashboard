import { useEffect } from "react";
import { usePlaceSelect } from "../../../entities";
import { PlaceCreate, PlaceUpdate } from "../../../features";
import { Loader, useMediaFiles } from "../../../shared";
import { ManagmentPlaceFormDate, ManagmentPlaceFormInfo, ManagmentPlaceFormMedia } from "../managment-form";

import styles from "./ManagmentPlaceForm.module.scss";


const ManagmentPlaceForm = ({ id }: { id?: string }) => {
  const { currentPlace, loading } = usePlaceSelect()

  const {
    changeFile,
    fileRef,
    fileList,
    removeFile,
    handleEditFile,
    cancelFiles,
    fillMedia,
  } = useMediaFiles();

  const handleResetFields = () => {
    cancelFiles()
  };

  useEffect(() => {
    if (currentPlace?.preview) {
      fillMedia([currentPlace?.preview])
    }

    return () => {
      cancelFiles()
    }
  }, [currentPlace])

  if (loading) {
    return <Loader/>
  }

  return (
    <section className={styles.root}>
      <ManagmentPlaceFormInfo />
      <ManagmentPlaceFormMedia 
      changeFile={changeFile}
      fileRef={fileRef}
      fileList={fileList}
      removeFile={removeFile}
      handleEditFile={handleEditFile}
      />
      <ManagmentPlaceFormDate />

      <div className={styles.submitContainer}>
        {fileList[0]?.file && !id &&
          <PlaceCreate
          preview={fileList[0].file}
          resetInputs={handleResetFields}
          />
        }
        {id &&
        <PlaceUpdate
        id={Number(id)}
        fileList={fileList}
        />
        }
  
      </div>

    </section>
  );
};

export { ManagmentPlaceForm };
