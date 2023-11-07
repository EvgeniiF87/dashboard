import type { FC } from "react";
import { useCreatePlace, usePlaceSelect, useUploadSelect } from "../../../entities";
import { CreatePlaceFields } from "../../../entities/place/DTO/place-dto";
import { ButtonRG } from "../../../shared";


interface PlaceCreateProps extends CreatePlaceFields {
  resetInputs: () => void;
}

const PlaceCreate: FC<PlaceCreateProps> = (props) => {
  const { resetInputs, ...params } = props
  const { createPlace } = useCreatePlace()
  const { loading } = usePlaceSelect()
  const { loading: loadingUpload } = useUploadSelect()

  const handleCreate = () => {
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

export  {PlaceCreate};