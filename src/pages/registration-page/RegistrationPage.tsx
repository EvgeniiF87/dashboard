import { useNavigate } from "react-router-dom";
import { useAuthSelect } from "../../entities";
import { CONFIG_APP } from "../../shared";
import { RegistrationForm } from "../../widgets";

import styles from "./RegistrationPage.module.scss";

const RegistrationPage = () => {
  const {  } = useAuthSelect()
  const navigate = useNavigate()

  // useEffect(() => {
  //   if (!authorization) return;
  //   navigate('/')
  // }, [authorization])

  const handleRouteLogin = () => {
    navigate('/login')
  }

  return (
    <div className={styles.root}>
      <section className={styles.wrapper}>
        <img
          className={styles.img}
          src={CONFIG_APP.AUTH_LOGIN_REGISTR_IMAGE_SIDE}
          alt="login-side.jpg"
        /> 
       <RegistrationForm changeForm={handleRouteLogin} />
       </section>
    </div>
  );
};

export default RegistrationPage;