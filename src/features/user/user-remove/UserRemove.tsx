import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRemoveUser, useUserSelect } from '../../../entities';
import { ButtonRG } from '../../../shared';

type UserRemoveProps = {
  id?: number;
  buttonText?: string;
  navigateAfter?: string;
}

const UserRemove: FC<UserRemoveProps> = ({ buttonText, navigateAfter, id }) => {
  const { removeUser } = useRemoveUser()
  const { loading } = useUserSelect()
  const navigate = useNavigate()

  const handleClick = () => {
    removeUser({ id })

    if (navigateAfter) {
      navigate(navigateAfter)
    }
  }

  return (
    <ButtonRG
    color='danger'
    disabled={loading}
    handleClick={handleClick}
    >
      {buttonText ? buttonText : "Удалить пользователя"}
    </ButtonRG>
  );
};

export { UserRemove };