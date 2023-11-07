
import { CheckBox } from '../checkbox/CheckBox';
import styles from './TableHeader.module.scss';

type TableHeaderProps = {
  tableList: string[];
}

const TableHeader = ({ tableList }: TableHeaderProps) => {

  return (
    <ul className={styles.root}>
      {tableList.map((item, index) =>
      item === "checkBox" 
      ? <li className={styles.checkbox} key={index}><CheckBox/></li> 
      : <li key={index}>{item}</li>
      )}
    </ul>
  );
};

export { TableHeader };