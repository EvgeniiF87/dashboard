import { useRef, useState } from "react";
import { PlaceCreate } from "../../../features";
import {  usePlaceChangeInputs,  usePlaceSelect } from "../../../entities";
import { PlaceService } from "../../../entities/place/domain/service";
import * as shared from "../../../shared";

import styles from "./CreatePlaceForm.module.scss";


const dropDownDirectionList = PlaceService.getDropdownDirections();

const CreatePlaceForm = () => {
  const dateInitRef = useRef<Date>(new Date())
  const { changeFile, fileRef, fileList, removeFile, handleEditFile, cancelFiles } =
    shared.useMediaFiles();
  const [dateStart, setDateStart] = useState(() => dateInitRef.current)
  const [dateEnd, setDateEnd] = useState(() => dateInitRef.current)
    const { inputsPlace, errorsList } = usePlaceSelect()
    const { handleChangeInputs } = usePlaceChangeInputs()
 
    const handleResetFields = () => {
      cancelFiles()
      setDateStart(() => dateInitRef.current)
      setDateEnd(() => dateInitRef.current)
    }

  return (
    <section className={styles.root}>
      <shared.FormCard title={"Основная информация"}>
        <shared.Input
          error={errorsList.title ? true : false}
          errorText={errorsList.title}
          value={inputsPlace.title}
          label={errorsList.title ? errorsList.title : "Наименование"}
          placeholder="Введите наименование"
          onChange={(e) => handleChangeInputs({ field: 'title', value: e.target.value })}
        />
        <shared.TextArea
          placeholder="Введите описание"
          onChange={(e) => handleChangeInputs({ field: 'desc', value: e.target.value })}
          value={inputsPlace.desc}
          errorText={errorsList.desc ? errorsList.desc : ''}
          error={errorsList.desc ? true : false}
          labelText="Описание"
        />
        <shared.Dropdown
          error={errorsList.selection ? true : false}
          errorText={errorsList.selection ? errorsList.selection : ''}
          label="Направление"
          onSelect={(value) => handleChangeInputs({field: 'directionSelect', value })}
          options={dropDownDirectionList}
          width={480}
          selected={inputsPlace.directionSelect}
        />
        <shared.CheckBox
          label="Публичное"
          active={inputsPlace.public}
          onClick={() => handleChangeInputs({ field: 'public', value: !inputsPlace.public })}
        />
      </shared.FormCard>
      <shared.FormCard title={"Изображение места"}>
        <div className={styles.contentMediaContainer}>
          <h2 className={styles.subTitle}>Preview места</h2>
          {fileList.length > 0 ? (
            <shared.MediaDisplay
              size="lg"
              image={fileList[0].result}
              editDisplay={() => handleEditFile(fileList[0].id)}
              removeDisplay={() => removeFile(fileList[0].id)}
            />
          ) : (
            <shared.AddMedia
              changeFile={changeFile}
              fileRef={fileRef}
              description="Добавить фото"
              size="lg"
            />
          )}
        </div>
      </shared.FormCard>
      <shared.FormCard title={"Дата места"}>
        <div className={styles.dateContainer}>
          <shared.DatePicker
            error={errorsList.timeStart ? errorsList.timeStart : null}
            initDateRef={dateInitRef.current}
            changeDate={setDateStart}
            label="Дата начала"
            value={dateStart}
            language="ru"
            placeholder={"Введите дату начала"}
          />
          <shared.DatePicker
            error={errorsList.timeEnd ? errorsList.timeEnd : null}
            initDateRef={dateInitRef.current}
            changeDate={setDateEnd}
            label="Дата окончания"
            value={dateEnd}
            language="ru"
            placeholder={"Введите дату окончания"}
          />
        </div>
      </shared.FormCard>
      <div className={styles.submitContainer}>
        {fileList.length > 0 && fileList[0].file &&
        <PlaceCreate
        resetInputs={handleResetFields}
        title={inputsPlace.title}
        desc={inputsPlace.desc}
        direction={inputsPlace.directionSelect.value}
        preview={fileList[0].file}
        publish={inputsPlace.public}
        existTimeEnd={dateInitRef.current === dateEnd ? undefined : dateEnd}
        existTimeStart={dateInitRef.current === dateStart ? undefined : dateStart}
        />
      }
      </div>
    </section>
  );
};

export { CreatePlaceForm };
