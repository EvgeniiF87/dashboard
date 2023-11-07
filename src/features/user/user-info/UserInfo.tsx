import type { FC } from 'react';
import { useGetUsersId } from "../../../entities";
import { ButtonRG } from '../../../shared';

type UserInfoProps = {
  id: number;
  buttonText?: string;
}

const UserInfo: FC<UserInfoProps> = ({ id, buttonText }) => {
  const { getOneUser } = useGetUsersId()

  const handleClick = () => {
    getOneUser({ id })
  }

  return (
    <ButtonRG
    color='violet'
    handleClick={handleClick}
    >
      {buttonText ? buttonText : "Данные пользователя"}
    </ButtonRG>
  );
};

export { UserInfo };