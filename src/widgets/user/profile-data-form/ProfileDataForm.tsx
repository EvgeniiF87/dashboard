import styles from './ProfileDataForm.module.scss'
import { ButtonRG, Input, inputsLeft, inputsRight } from '../../../shared';
import { useState } from 'react';

const ProfileDataForm = () => {

  const [values, setValues] = useState({
    name: '',
    lastName: '',
    patronymic: '',
    password: '',
    confirmPassword: '',
    email: '',
    phone: '',
    netowrk: ''
  })

  return (
    <form>
      <div className={styles.inputs}>
        <div className={styles.inputsLeft}>
          {inputsLeft.map((item) => (
            <div
              className={
                item.placeholder.includes("пароль") ? styles.password : ""
              }
            >
              <Input
                value={values[item.value as keyof typeof values]}
                onChange={e => setValues({...values, [item.value]: e.target.value})}
                label={item.label}
                placeholder={item.placeholder}
                required={item.requierd}
                type={item?.type}
              />
            </div>
          ))}
        </div>
        <div className={styles.inputsRight}>
          {inputsRight.map((item) => (
            <Input
              errorText={'Error'}
              value={values[item.value as keyof typeof values]}
              onChange={e => setValues({...values, [item.value]: e.target.value})}
              label={item.label}
              placeholder={item.placeholder}
              required={item.requierd}
              type={item?.type}
            />
          ))}
          <p>
            Пароль должен сожержать 8-12 символов, а также, строчные буквы и
            символы @*%$#!
          </p>
        </div>
      </div>
      <div className={styles.btn}>
        <ButtonRG>Сохранить изменения</ButtonRG>
      </div>
    </form>
  );
}

export default ProfileDataForm