import type { FC } from "react";
import { useCreateEventPlaceTag, useTagSelect } from "../../../entities";
import { ButtonRG } from "../../../shared";

type TagCreateEventPlaceProps = {
  eventId?: number;
  placeId?: number;
  tagsId: number;
} 

const TagCreateEventPlace: FC<TagCreateEventPlaceProps> = (props) => {
  const { loading } = useTagSelect()
  const { createEvetnPlaceTag } = useCreateEventPlaceTag()

  const handleClick = () => {
    createEvetnPlaceTag(props)
  }

  return (
    <ButtonRG
    disabled={loading}
    handleClick={handleClick}
    >
    Создать
    </ButtonRG>
  );
};

export { TagCreateEventPlace };