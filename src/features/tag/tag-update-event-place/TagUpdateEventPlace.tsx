import type { FC } from "react";
import { useTagSelect, useUpdateEventPlaceTag } from "../../../entities";
import { ButtonRG } from "../../../shared";

type TagUpdateEventPlaceProps = {
  eventId?: number;
  id: number;
  placeId?: number;
  tagsId?: number;
};

const TagUpdateEventPlace: FC<TagUpdateEventPlaceProps> = (props) => {
  const { loading } = useTagSelect();
  const { updateEvetnPlaceTag } = useUpdateEventPlaceTag();

  const handleClick = () => {
    updateEvetnPlaceTag(props);
  };

  return (
    <ButtonRG disabled={loading} handleClick={handleClick}>
      Изменить
    </ButtonRG>
  );
};

export { TagUpdateEventPlace };
