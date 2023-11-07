import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthSelect } from '../../entities';
import { CONFIG_APP } from '../../shared';
import { LoginForm } from '../../widgets';

import styles from './Login.module.scss';

const Login = () => {
  const { authorization } = useAuthSelect();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authorization) return;
    navigate('/');
  }, [authorization]);

  const handleRouteRegistration = () => {
    navigate('/registration');
  };

  return (
    <div className={styles.root}>
      <section className={styles.wrapper}>
        <img
          className={styles.img}
          src={CONFIG_APP.AUTH_LOGIN_REGISTR_IMAGE_SIDE}
          alt="login-side.jpg"
        />
        <LoginForm changeForm={handleRouteRegistration} />
      </section>
    </div>
  );
};

export default Login;
