import { memo, useEffect, useRef, useState } from "react";
import { SelectBird } from "../select-bird/SelectBird";

import styles from "./TotalCountList.module.scss";

type TotalCountListProps = {
  currentValue: number;
  onClick: ({ limit }:{ limit: number }) => void;
}

const countVariants = [100, 80, 60, 40, 20, 10, 5]

const TotalCountList = memo(({ currentValue, onClick }: TotalCountListProps) => {
  const [active, setActive] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)


  const handleClickValue = (num: number) => {
    onClick({limit: num})
    setActive(false)
  }

  const handleToggleContainer = () => {
    setActive(prev => !prev)
  }

  const clickOutside = (e: MouseEvent) => {
    if (!ref.current) return;
    const target = e.target;

    if (!ref.current.contains(target as Node)) {
      setActive(false)
    }
  }

  useEffect(() => {
    if (!ref.current) return;

    document.addEventListener('click', clickOutside)
    return () => {
      document.removeEventListener('click', clickOutside)
    }
  },[])


  return (
    <div ref={ref} className={styles.root}>
      {active &&
      <ul className={styles.variatnCountContainer}>
      {countVariants.map(num => 
        <li key={num} onClick={() => handleClickValue(num)} className={styles.variatnCountItem}>{num}</li>
        )}
      </ul>
      }
      <div onClick={handleToggleContainer} className={styles.currentCount}>
        <span className={styles.currentCountItem}>{currentValue}</span>
        <SelectBird active={active} />
        </div>
    </div>
  );
});

export  {TotalCountList};