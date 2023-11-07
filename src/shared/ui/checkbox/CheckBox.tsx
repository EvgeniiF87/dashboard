import {memo} from 'react';

import styles from './CheckBox.module.scss';

interface CheckBoxProps {
  active?: boolean
  onClick?: () => void
  label?: string;
}

const CheckBox = memo(({active, onClick, label}: CheckBoxProps) => {
  
  return (
    <div> 
    <div onClick={onClick} className={styles.root}>
      <input type='checkbox' onChange={() => {}} checked={active} id='check'/>
      <label htmlFor="check"  className={active ? `${styles.checkbox} ${styles.active}`  : styles.checkbox}></label>
      {label &&
        <span className={styles.labelText}>{label}</span>
      }
    </div>
    </div>
  );
});

export { CheckBox };