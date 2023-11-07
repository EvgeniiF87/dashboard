import { ChildrenNodeType } from "../../types";

import styles from "./FormCard.module.scss";

type FormCardProps = {
  title: string;
  children: ChildrenNodeType;
};

const FormCard = ({ children, title }: FormCardProps) => {
  return (
    <div className={styles.formCardWrapper}>
      <h2 className={styles.formCardTitle}>{title}</h2>
      <div className={styles.contentContainer}>
      {children}
      </div>
    </div>
  );
};

export { FormCard };
