import type { FC } from "react";
import { useCreatePlace, usePlaceSelect, useUploadSelect } from "../../../entities";
import { PlaceService } from "../../../entities/place/domain/service";
import { ButtonRG } from "../../../shared";


type PlaceCreateProps = {
  preview: File | null;
  resetInputs: () => void;
}

const PlaceCreate: FC<PlaceCreateProps> = (props) => {
  const { resetInputs, preview } = props
  const { createPlace } = useCreatePlace()
  const { loading, inputsPlace } = usePlaceSelect()
  const { loading: loadingUpload } = useUploadSelect()


  const handleCreate = () => {
    const dropDownDirectionList = PlaceService.getDropdownDirections();
    const findDirectionValue = dropDownDirectionList.find(item => item.id === String(inputsPlace.directionSelect))

    if (!findDirectionValue || !preview) return;

    const params = {
      desc: inputsPlace.desc,
      direction: findDirectionValue.value,
      existTimeEnd: inputsPlace.existTimeEnd ? new Date(inputsPlace.existTimeEnd) : new Date(),
      existTimeStart: inputsPlace.existTimeStart ? new Date(inputsPlace.existTimeStart) : new Date(),
      preview: preview,
      publish: inputsPlace.public,
      title: inputsPlace.title 
    }
    createPlace(params, resetInputs)
  }

  return (
    <ButtonRG
    disabled={loading || loadingUpload}
    handleClick={handleCreate}
    >
    Сохранить
    </ButtonRG>
  );
};

export { PlaceCreate };