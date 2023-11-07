import styles from "./CreationProgress.module.scss";

type CreationProgressProps = {
  progressList: string[];
  activeIndex: number;
};

const CreationProgress = ({
  progressList,
  activeIndex,
}: CreationProgressProps) => {
  return (
    <ul className={styles.root}>
      {progressList &&
        progressList.map((item, index) => (
          <li key={item} className={styles.progressItem}>
            <span
              className={
                activeIndex === index
                  ? `${styles.currentIndex} ${styles.currentIndexActive}`
                  : styles.currentIndex
              }
            >
              {index + 1}
            </span>
            <span className={styles.currentTitle}>{item}</span>
            {progressList.length - 1 !== index && (
              <div className={styles.separator}></div>
            )}
          </li>
        ))}
    </ul>
  );
};

export { CreationProgress };
