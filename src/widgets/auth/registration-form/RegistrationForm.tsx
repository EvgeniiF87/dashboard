import { useState } from "react";
import type { FC } from "react";
import { Input, useMediaFiles, UserPhotoUploadIcon } from "../../../shared";
import { AuthRegistration } from "../../../features";

import styles from "./RegistrationForm.module.scss";


type RegistrationFormProps = {
  changeForm: () => void;
}

const RegistrationForm: FC<RegistrationFormProps> = ({ changeForm }) => {
  const { changeFile, fileRef, fileList, cancelFiles } = useMediaFiles();
  const [nameValue, setNameValue] = useState<string>("Ruslan");
  const [phoneValue, setPhoneValue] = useState<string>("213545643224");
  const [emailValue, setEmailValue] = useState<string>("example@gmail.ru");
  const [passwordValue, setPasswordValue] = useState<string>("123456");
  const [isWatchPassword, setIsWatchPassword] = useState<boolean>(false);


  const checkValues = () => {
    return passwordValue.length > 0 && emailValue.length > 0 && nameValue.length > 0 && phoneValue.length > 0 && fileList[0];
  };

  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.title}>Регистрация</h2>
        <div className={styles.subTitleContainer}>
          <span className={styles.subTitleText}>
            Не можете зарегестрироваться?
          </span>
          <button className={styles.subTitleLink}>
            Свяжитесь с поддержкой
          </button>
        </div>

        <div className={styles.dropDownContainer}>
          <label className={styles.labelImage}>Изображение</label>
            {fileList.length > 0 ? (
              <picture>
                <img
                  onClick={cancelFiles}
                  className={styles.userImage}
                  src={String(fileList[0].result)}
                  alt=" add Image"
                />
              </picture>
            ) : (
              <>
                <UserPhotoUploadIcon onClick={() => fileRef.current?.click()} />
                <input ref={fileRef} type="file" onChange={changeFile} hidden />
              </>
            )}
          </div>

        <div className={styles.inputEmailContainer}>
          <Input
            error={false}
            className={styles.input}
            value={nameValue}
            placeholder={"Введите имя"}
            label="Имя"
            onChange={(e) => setNameValue(e.target.value)}
          />
        </div>
        <div className={styles.inputEmailContainer}>
          <Input
            error={false}
            className={styles.input}
            value={phoneValue}
            placeholder={"+7 465 12 54"}
            label="Телефон"
            onChange={(e) => setPhoneValue(e.target.value)}
          />
        </div>
        <div className={styles.inputEmailContainer}>
          <Input
            variant="email"
            error={false}
            className={styles.input}
            value={emailValue}
            placeholder={"example@gmail.com"}
            label="E-mail"
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
          <button className={styles.buttonChangeForm} onClick={changeForm}>Войти</button>
           </div>
        </div>
          <AuthRegistration
          className={styles.buttonSubmit}
          disabled={!!checkValues()}
          email={emailValue}
          name={nameValue}
          phone={phoneValue}
          password={passwordValue}
          roleId={1}
          file={fileList[0].file}
          />
      </div>
    </section>
  );
};

export { RegistrationForm };
