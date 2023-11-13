import { useMemo } from "react";
import { usePlaceChangeInputs, usePlaceSelect } from "../../../../entities";
import { PlaceService } from "../../../../entities/place/domain/service";
import * as shared from "../../../../shared";

const dropDownDirectionList = PlaceService.getDropdownDirections();

const ManagmentPlaceFormInfo = () => {
  const { inputsPlace, errorsList } = usePlaceSelect()
  const { handleChangeInputs } = usePlaceChangeInputs()

  const findSelectDirectory = useMemo(() => {
    let result = null;
    dropDownDirectionList.forEach(item => {
      if (item.id === String(inputsPlace.directionSelect)) {
        result = item
      }
    })
    return result
  },[inputsPlace.directionSelect])

  return (
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
      onSelect={(value) => handleChangeInputs({field: 'directionSelect', value: Number(value.id) })}
      options={dropDownDirectionList}
      width={480}
      selected={findSelectDirectory}
    />
    <shared.CheckBox
      label="Публичное"
      active={inputsPlace.public}
      onClick={() => handleChangeInputs({ field: 'public', value: !inputsPlace.public })}
    />
  </shared.FormCard>
  );
};

export { ManagmentPlaceFormInfo };