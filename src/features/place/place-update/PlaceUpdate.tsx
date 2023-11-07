import type { FC } from "react";
import { PlaceDirections, usePlaceSelect, useUpdatePlace } from "../../../entities";
import { ButtonRG } from "../../../shared";

type PlaceUpdateProps = {
  id: number;
  desc?: string;
  direction?: PlaceDirections;
  existTimeEnd?: string;
  existTimeStart?: string;
  preview?: string;
  publish?: boolean;
  title?: string;
};

const PlaceUpdate: FC<PlaceUpdateProps> = (props) => {
  const { loading } = usePlaceSelect()
  const { updatePlace } = useUpdatePlace();

  const handleUpdate = () => {
    updatePlace(props);
  };

  return (
    <ButtonRG
    disabled={loading}
    handleClick={handleUpdate}
    >
    Редактировать
    </ButtonRG>
  );
};

export { PlaceUpdate };
