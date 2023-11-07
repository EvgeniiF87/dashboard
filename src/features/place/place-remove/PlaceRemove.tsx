import type { FC } from "react";
import {  usePlaceSelect, useRemovePlace } from "../../../entities";
import { ButtonRG } from "../../../shared";

interface PlaceRemoveProps {
  id: number;
}

const PlaceRemove: FC<PlaceRemoveProps> = (props) => {
  const { removePlace } = useRemovePlace()
  const { loading } = usePlaceSelect()

  const handleRemove = () => {
    removePlace(props)
  }

  return (
    <ButtonRG
    disabled={loading}
    handleClick={handleRemove}
    >
    Удалить
    </ButtonRG>
  );
};

export  { PlaceRemove };