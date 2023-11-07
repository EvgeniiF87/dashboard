import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthSelect } from '../../entities';
import LoginContainer from '../../shared/ui/login-container/LoginContainer';
import styles from './LoginByPassword.module.scss';
import { Input } from '../../shared';
import { AuthLogin } from '../../features';

export default function LoginByPassword() {
  const [isWatchPassword, setIsWatchPassword] = useState<boolean>(false);
  const [emailValue, setEmailValue] = useState<string>('admin@mail.ru');
  const [passwordValue, setPasswordValue] = useState<string>('123456789');

  const { authorization } = useAuthSelect();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authorization) return;
    navigate('/');
  }, [authorization]);

  const handleRouteRegistration = () => {
    navigate('/registration');
  };

  const checkValues = () => {
    return passwordValue.length > 0 && emailValue.length > 0;
  };

  return (
    <LoginContainer>
      <div className={styles.inputEmailContainer}>
        <Input
          variant="email"
          error={false}
          className={styles.input}
          value={emailValue}
          placeholder={'example@gmail.com'}
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
          type={isWatchPassword ? 'string' : 'password'}
        />
        <div className={styles.buttonLinkContainer}>
          <button
            className={styles.buttonChangeForm}
            onClick={handleRouteRegistration}
          >
            Зарегистрироваться
          </button>
        </div>
      </div>
      <AuthLogin
        email={emailValue}
        password={passwordValue}
        disabled={!checkValues()}
      />
    </LoginContainer>
  );
}
