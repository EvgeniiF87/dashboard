import { DiagramPie } from '../../../shared';

import styles from './DiagramCircle.module.scss';

type DiagramCircleProps = {
  title: string;
  list: { name: string; color: string; count: number }[];
};

export function DiagramCircle({ title, list }: DiagramCircleProps) {
  return (
    <>
      <div className={styles.root}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.container_diagram}>
          <ul className={styles.list}>
            {list.map((data) => (
              <li key={data.name}>
                <div
                  style={{ backgroundColor: data.color }}
                  className={styles.beforName}
                ></div>
                <span>{data.name}</span>
              </li>
            ))}
          </ul>
          <DiagramPie selectorList={list} />
        </div>
      </div>
    </>
  );
}
