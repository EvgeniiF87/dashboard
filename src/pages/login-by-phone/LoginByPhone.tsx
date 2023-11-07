import { useState } from 'react';
import LoginContainer from '../../shared/ui/login-container/LoginContainer';
import style from './LoginByPhone.module.scss';

export default function LoginByPhone() {
  const [valuePhone, setValuePhone] = useState('');
  const [valueCode, setValueCode] = useState('');
  const [valid, setValid] = useState({ phone: false, code: false });
  const [toggleGetCode, isToggleGetCode] = useState(false);
  const [timer, setTimer] = useState('60');

  const checkValue = (evt: any, num: number) => {
    if (evt.target.value.length === num && evt.nativeEvent.data != null)
      return true;
  };

  const changeValuePhone = (evt: any) => {
    const data = evt.nativeEvent.data;
    const regex = /[0-9]/;
    const result = regex.test(data);

    if (data != null) {
      if (!result) return;
    }

    if (data === ' ') {
      console.log('stop');

      return;
    }

    if (evt.target.value.length === 3 && data === null) {
      setValuePhone('');
      return;
    }

    if (checkValue(evt, 1)) {
      setValuePhone(`+7 (${data}`);
      return;
    }
    if (checkValue(evt, 8)) {
      setValuePhone(`${valuePhone}) ${data}`);
      return;
    }

    if (checkValue(evt, 13)) {
      setValuePhone(`${valuePhone} ${data}`);
      return;
    }
    if (checkValue(evt, 16)) {
      setValuePhone(`${valuePhone} ${data}`);
      return;
    }
    setValuePhone(evt.target.value);

    setValid({
      ...valid,
      [evt.target.name]: evt.target.closest('form').checkValidity(),
    });
  };

  const changeValueCode = (evt: any) => {
    if (evt.target.value.length > 6) return;
    setValueCode(evt.target.value);

    if (evt.target.value.length >= 6) {
      setValid({
        ...valid,
        [evt.target.name]: true,
      });
    } else {
      setValid({
        ...valid,
        [evt.target.name]: false,
      });
    }
  };

  function startTimer() {
    let time = 59;
    const interval = setInterval(() => {
      if (time >= 10) {
        setTimer(`${time}`);
        time -= 1;
      } else if (time === 0) {
        setTimer('00');
        clearTimeout(interval);
        setValid({
          ...valid,
          phone: true,
        });
      } else {
        setTimer(`0${time}`);
        time -= 1;
      }
    }, 1000);
  }

  const getCode = (evt: any) => {
    evt.preventDefault();

    isToggleGetCode(true);
    setValueCode('');

    setValid({
      ...valid,
      phone: false,
    });
    startTimer();
  };

  const login = (evt: any) => {
    evt.preventDefault();
    console.log('login');
  };

  const changeStyleButton = () => {
    if (!valid.phone && !toggleGetCode) {
      return style.get_code;
    }

    if (valid.phone && toggleGetCode) {
      return `${style.get_code} ${style.get_code_repeat} ${style.get_code_active}`;
    }

    if (toggleGetCode) {
      return `${style.get_code} ${style.get_code_repeat}`;
    } else {
      return `${style.get_code} ${style.get_code_active}`;
    }
  };

  return (
    <LoginContainer>
      <form className={style.form}>
        <label>
          {toggleGetCode
            ? `Код отправлен на номер ${valuePhone}`
            : 'Введите номер телефона, на который будет выслан пароль для входа в систему'}
        </label>
        {toggleGetCode ? (
          <input
            name="code"
            className={style.input_code}
            value={valueCode ?? ''}
            onChange={(evt) => changeValueCode(evt)}
            required
            type="number"
            placeholder="введите код"
          />
        ) : (
          <div
            className={
              valid.phone
                ? `${style.container_input} ${style.container_input_active}`
                : style.container_input
            }
          >
            <input
              name="phone"
              pattern="^((\+7)[\- ])?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10}$"
              value={valuePhone ?? ''}
              onChange={(evt) => changeValuePhone(evt)}
              required
              type="tel"
              placeholder="+7"
              maxLength={18}
              minLength={18}
            />
          </div>
        )}
        {toggleGetCode && (
          <p className={style.timer}>
            Получить новый код можно через 00:{timer}
          </p>
        )}
        <div className={style.button_container}>
          {toggleGetCode && (
            <button
              onClick={(evt) => login(evt)}
              disabled={valid.code ? false : true}
              className={
                valid.code
                  ? `${style.get_code} ${style.get_code_active}`
                  : style.get_code
              }
            >
              Войти
            </button>
          )}

          <button
            onClick={(evt) => getCode(evt)}
            disabled={valid.phone ? false : true}
            className={valid.phone ? changeStyleButton() : changeStyleButton()}
          >
            Получить код
          </button>
        </div>
      </form>
      <p>Войти по паролю</p>
    </LoginContainer>
  );
}
