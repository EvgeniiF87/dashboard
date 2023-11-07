import type { FC } from "react";
import { useTagSelect, useUpdateTag } from "../../../entities";
import { ButtonRG } from "../../../shared";

type TagUpdateProps = {
  id: number;
  name?: string;
}

const TagUpdate: FC<TagUpdateProps> = (props) => {
  const { loading } = useTagSelect()
  const { updateTag } = useUpdateTag()

  const handleClick = () => {
    updateTag(props)
  }

  return (
    <ButtonRG
    disabled={loading}
    handleClick={handleClick}
    >
    Изменить
    </ButtonRG>
  );
};

export { TagUpdate };