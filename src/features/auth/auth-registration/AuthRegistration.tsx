import { FC } from "react";
import { useRegistration } from "../../../entities";
import { ButtonRG } from "../../../shared";

type AuthRegistrationProps = {
  file: File | null;
  email: string,
  name: string,
  phone?: string,
  roleId: number,
  disabled: boolean,
  className: string;
  password: string;
}

const AuthRegistration: FC<AuthRegistrationProps> = (props) => {
  const { handleRegistration  } = useRegistration()

  const handleSubmitRegistration = () => {
    handleRegistration(props)
  };

  return (
    <ButtonRG
      handleClick={handleSubmitRegistration}
      className={props.className}
      disabled={!props.disabled}
    >
      Подтвердить
    </ButtonRG>
  );
};

export { AuthRegistration };
