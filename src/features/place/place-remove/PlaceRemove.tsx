import type { FC } from "react";
import {  usePlaceSelect, useRemovePlace } from "../../../entities";
import { ButtonRG } from "../../../shared";

interface PlaceRemoveProps {
  id: number;
}

const PlaceRemove: FC<PlaceRemoveProps> = (props) => {
  const { removePlace } = useRemovePlace()
  const { loadingRemove } = usePlaceSelect()

  const handleRemove = () => {
    removePlace(props)
  }

  return (
    <ButtonRG
    disabled={loadingRemove}
    handleClick={handleRemove}
    color='danger'
    >
    Удалить
    </ButtonRG>
  );
};

export  { PlaceRemove };