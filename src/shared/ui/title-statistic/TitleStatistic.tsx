import styles from './TitleStatistic.module.scss';

export default function TitleStatistic({
  text,
  listValue,
}: {
  text: string;
  listValue: string[] | null;
}) {
  return (
    <div className={styles.discription}>
      <p className={styles.quantity}>{text}</p>
      {listValue && (
        <div className={styles.change_time}>
          <p>{listValue[0]}</p>
        </div>
      )}
    </div>
  );
}
