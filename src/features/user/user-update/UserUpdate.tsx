import type { FC } from 'react';
import { useUpdateUser, useUserSelect } from '../../../entities';
import { ButtonRG } from '../../../shared';

type UserUpdateProps = {
  name: string;
  email: string;
  id?: number;  
  buttonText?: string;
}

const UserUpdate: FC<UserUpdateProps> = ({ email, name, buttonText, id }) => {
  const { updateUser } = useUpdateUser()
  const { loading } = useUserSelect()

  const handleClick = () => {
    updateUser({email, name, id})
  }

  return (
    <ButtonRG
    color='orange'
    disabled={loading}
    handleClick={handleClick}
    >
      {buttonText ? buttonText : "Подтвердить изменения"}
    </ButtonRG>
  );
};

export { UserUpdate };