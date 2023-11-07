import { useState } from "react";
import type { FC } from "react";
import { AuthLogin } from "../../../features";
import { Input } from "../../../shared";

import styles from "./LoginForm.module.scss";

type LoginFormProps = {
  changeForm: () => void;
}

const LoginForm: FC<LoginFormProps> = ({ changeForm }) => {
  const [emailValue, setEmailValue] = useState<string>("admin@mail.ru");
  const [passwordValue, setPasswordValue] = useState<string>("123456789");
  const [isWatchPassword, setIsWatchPassword] = useState<boolean>(false);


  const checkValues = () => {
    return passwordValue.length > 0 && emailValue.length > 0;
  };

  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.title}>Вход в систему</h2>
        <div className={styles.subTitleContainer}>
          <span className={styles.subTitleText}>
            Не можете войти в аккаунт?
          </span>
          <button className={styles.subTitleLink}>
            Свяжитесь с поддержкой
          </button>
        </div>
        <div className={styles.inputEmailContainer}>
          <Input
            variant="email"
            error={false}
            className={styles.input}
            value={emailValue}
            placeholder={"example@gmail.com"}
            label="Телефон или e-mail"
            onChange={(e) => setEmailValue(e.target.value)}
          />
        </div>
        <div className={styles.inputPasswordContainer}>
          <Input
            passwordEyeClick={() => setIsWatchPassword((prev) => !prev)}
            variant="password"
            error={false}
            className={styles.input}
            value={passwordValue}
            placeholder="admin"
            label="Password"
            onChange={(e) => setPasswordValue(e.target.value)}
            type={isWatchPassword ? "string" : "password"}
          />
          <div className={styles.buttonLinkContainer}>
        <button className={styles.buttonChangeForm} onClick={changeForm}>Зарегистрироваться</button>
          </div>
        </div>
          <AuthLogin
          email={emailValue}
          password={passwordValue}
          disabled={!checkValues()}
          />
      </div>
    </section>
  );
};

export { LoginForm };
