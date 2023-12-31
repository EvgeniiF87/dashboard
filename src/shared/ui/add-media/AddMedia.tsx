import { AddCross } from "../../svg";

import styles from "./AddMedia.module.scss";

type AddMediaProps = {
  description: string;
  size: "lg" | "sm";
  accept?: "image/*" | "video/*";
  changeFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fileRef: React.RefObject<HTMLInputElement>;
};

const AddMedia = (props: AddMediaProps) => {
  const { fileRef, changeFile, description, size, accept = "image/*" } = props;

  return (
    <div className={size === 'sm' ? `${styles.root} ${styles.smallSize}` :  styles.root} >
      <div
        className={
          size === "lg"
            ? `${styles.add_file}`
            : `${styles.add_file} ${styles.more_file}`
        }
        onClick={() => fileRef.current?.click()}
      >
        <AddCross />
        {size === "lg" && <p>{description}</p>}
        <input
          type="file"
          accept={accept}
          onChange={changeFile}
          ref={fileRef}
          hidden
        />
      </div>
    </div>
  );
};

export { AddMedia };
