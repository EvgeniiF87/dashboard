import type { FC } from "react";
import { useUpdateInfo } from "../../../entities/info/application/useInfo";
import { ButtonRG } from "../../../shared";
import type { UpdateInfoFields } from "../../../entities/info/DTO/info-dto";
import { useInfoSelect } from "../../../entities";

type InfoCreateProps = {
  fields: UpdateInfoFields;
}

const InfoUpdate: FC<InfoCreateProps> = ({ fields }) => {
  const { loading } = useInfoSelect()
  const { updateInfo } = useUpdateInfo()

  const handleUpdate = () => {
    updateInfo(fields)
  }

  return (
    <ButtonRG
    disabled={loading}
    handleClick={handleUpdate}
    >
      Изменить
    </ButtonRG>
  );
};

export { InfoUpdate };