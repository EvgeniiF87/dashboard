import type { FC } from "react";
import { useInfoSelect } from "../../../entities";
import { useRemoveInfo } from "../../../entities/info/application/useInfo";
import { ButtonRG } from "../../../shared";

type InfoRemoveProps = {
  id: number;
}

const InfoRemove: FC<InfoRemoveProps> = ({ id }) => {
  const { loading } = useInfoSelect()
  const { removeInfo } = useRemoveInfo()

  const handleRemove = () => {
    removeInfo({ id })
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

export { InfoRemove };