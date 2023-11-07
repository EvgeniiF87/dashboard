import type { FC } from "react";
import { useRemoveTag, useTagSelect } from "../../../entities";
import { ButtonRG } from "../../../shared";

type TagRemoveProps = {
  id: number;
}

const TagRemove: FC<TagRemoveProps> = (props) => {
  const { loading } = useTagSelect()
  const { removeTag } = useRemoveTag()

  const handleClick = () => {
    removeTag(props)
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

export { TagRemove };