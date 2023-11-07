import type { FC } from "react";
import { useCreateTag, useTagSelect } from "../../../entities";
import { ButtonRG } from "../../../shared";

type TagCreateProps = {
  name: string;
}

const TagCreate: FC<TagCreateProps> = (props) => {
  const { loading } = useTagSelect()
  const { createTag } = useCreateTag()

  const handleClick = () => {
    createTag(props)
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

export { TagCreate };