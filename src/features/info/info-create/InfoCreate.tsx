import type { FC } from "react";
import { useInfoSelect } from "../../../entities";
import { useCreateInfo } from "../../../entities/info/application/useInfo";
import {  CreateInfoInputFields } from "../../../entities/info/DTO/info-dto";
import { ButtonRG } from "../../../shared"


type InfoCreateProps = {
  fields: CreateInfoInputFields;
}

const InfoCreate: FC<InfoCreateProps> = ({ fields }) => {
    const { loading } = useInfoSelect()
  const { createInfo } = useCreateInfo()

  const handleCreate = () => {
    createInfo(fields)
  }

  return (
    <ButtonRG
    disabled={loading}
    handleClick={handleCreate}
    >
      Создать
    </ButtonRG>
  );
};

export { InfoCreate };