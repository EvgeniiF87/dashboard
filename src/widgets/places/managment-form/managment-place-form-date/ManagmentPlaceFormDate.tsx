import { usePlaceChangeInputs, usePlaceSelect } from "../../../../entities";
import * as shared from "../../../../shared";

import styles from "./ManagmentPlaceFormDate.module.scss";

const ManagmentPlaceFormDate = () => {
  const { errorsList } = usePlaceSelect();
  const { inputsPlace } = usePlaceSelect()
  const { handleChangeInputs } = usePlaceChangeInputs()

  return (
    <shared.FormCard title={"Дата места"}>
      <div className={styles.dateContainer}>
        <shared.DatePicker
          error={errorsList.existTimeStart ? errorsList.existTimeStart : null}
          changeDate={(value) => handleChangeInputs({ field: 'existTimeStart', value: value.toString()})}
          label="Дата начала"
          value={inputsPlace.existTimeStart ? new Date(inputsPlace.existTimeStart) : null}
          language="ru"
          placeholder={"Введите дату начала"}
        />
        <shared.DatePicker
          error={errorsList.existTimeEnd ? errorsList.existTimeEnd : null}
          changeDate={(value) => handleChangeInputs({ field: 'existTimeEnd', value: value.toString()})}
          label="Дата окончания"
          value={inputsPlace.existTimeEnd ? new Date(inputsPlace.existTimeEnd) : null}
          language="ru"
          placeholder={"Введите дату окончания"}
        />
      </div>
    </shared.FormCard>
  );
};

export { ManagmentPlaceFormDate };
