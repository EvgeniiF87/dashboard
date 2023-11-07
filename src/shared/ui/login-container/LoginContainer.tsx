
import styles from './LoginContainer.module.scss';
import { ChildrenNodeType, CONFIG_APP } from '../../../shared';

export default function LoginContainer({ children }: {children: ChildrenNodeType}) {
  return (
    <div className={styles.root}>
      <section className={styles.wrapper}>
        <img
          className={styles.img}
          src={CONFIG_APP.AUTH_LOGIN_REGISTR_IMAGE_SIDE}
          alt="login-side.jpg"
        />
        <div className={styles.container}>
          <div className={styles.container_form}>
            <h2 className={styles.title}>Вход в систему</h2>
            <div className={styles.subTitleContainer}>
              <span className={styles.subTitleText}>
                Не можете войти в аккаунт?
              </span>
              <button className={styles.subTitleLink}>
                Свяжитесь с поддержкой
              </button>
            </div>
            {children}
          </div>
        </div>
      </section>
    </div>
  );
}
