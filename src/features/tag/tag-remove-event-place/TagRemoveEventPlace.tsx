import type { FC } from "react";
import { useRemoveEventPlaceTag, useTagSelect } from "../../../entities";
import { ButtonRG } from "../../../shared";

type TagRemoveEventPlaceProps = {
  id: number;
} 

const TagRemoveEventPlace: FC<TagRemoveEventPlaceProps> = (props) => {
  const { loading } = useTagSelect()
  const { removeEvetnPlaceTag } = useRemoveEventPlaceTag()

  const handleClick = () => {
    removeEvetnPlaceTag(props)
  }

  return (
    <ButtonRG
    disabled={loading}
    handleClick={handleClick}
    >
    Удалить
    </ButtonRG>
  );
};

export { TagRemoveEventPlace };