import { FC } from "react";
import { useAuthSelect, useFetchAuthorization } from "../../../entities";
import { ButtonRG } from "../../../shared";

import styles from "./AuthLogin.module.scss";

type AuthLoginProps = {
  email: string;
  password: string;
  disabled: boolean;
}

const AuthLogin: FC<AuthLoginProps> = ({ email, password, disabled }) => {
  const { loading } = useAuthSelect();
  const { handleAuthorization } = useFetchAuthorization();

  const handleSubmitLogin = () => {
    handleAuthorization({
      email,
      password,
    });
  };

  return (
    <ButtonRG
      handleClick={handleSubmitLogin}
      className={styles.buttonSubmit}
      disabled={loading || disabled}
    >
      Войти
    </ButtonRG>
  );
};

export { AuthLogin };
