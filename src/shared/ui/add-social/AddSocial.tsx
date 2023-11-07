
import styles from "./AddSocial.module.scss";

type AddSocialProps = {
  onClick: () => void;
}

const AddSocial = ({ onClick }: AddSocialProps) => {

  return (
    <button onClick={onClick} className={styles.root}>
      <div className={styles.buttonPlus}></div>
      <span className={styles.buttonText}>Добавить соцсеть</span>
    </button>
  );
};

export { AddSocial };