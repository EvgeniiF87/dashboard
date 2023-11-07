import { FC, useMemo,  } from "react";
import { ArrowBirdSvg } from "../../svg";

import styles from "./TimeHours.module.scss";

type TimeHoursProps = {
  time: string;
  label: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const TimeHours: FC<TimeHoursProps> = ({ label, time, onChange }) => {



  const hourFrom = useMemo(() => {
    return `${time[0]}${time[1]}`
  },[time])

  const minutesFrom = useMemo(() => {
    return `${time[2]}${time[3]}`
  },[time])

  const handleChangeHours = (variant?: string) => {
    const isIncrement = (variant === 'increment');
    if (isIncrement && hourFrom === '23' || !isIncrement && hourFrom === '00') return;

    let hoursString = ''
    let initHours = +hourFrom

    if (isIncrement) {
      initHours++
    } else {
      initHours--
    }

    if (initHours < 10) {
      hoursString = `0${initHours}`
    } else {
      hoursString = `${initHours}`
    }
    onChange(() => `${hoursString}${minutesFrom}`)
  }

  const handleChangeMinutes = (variant?: string) => {
    const isIncrement = (variant === 'increment');
    if (isIncrement && minutesFrom === '55' || !isIncrement && minutesFrom === '00') return;
    
    let minutesString = ''
    let initMinutes = +minutesFrom

    if (isIncrement) {
      initMinutes += 5
    } else {
      initMinutes -= 5
    }

    if (initMinutes < 10) {
      minutesString = `0${initMinutes}`
    } else {
      minutesString = `${initMinutes}`
    } 

    onChange(() => `${hourFrom}${minutesString}`)
  }

 

  return (
    <div className={styles.root}>

      <label className={styles.label}>{label}</label>
      <div className={styles.timeValueContainer}>

      <div className={styles.timeContainer}>
      <button className={styles.buttonDecrement}>
      <ArrowBirdSvg  direction="left" fill="#494949" onClick={handleChangeHours} />
      </button>
      <span className={styles.hoursValue}>{hourFrom} ч</span>
      <button className={styles.buttonIncrement}>
      <ArrowBirdSvg direction="right" fill="#494949" onClick={() => handleChangeHours('increment')}  />
      </button>
      </div>

      <div className={styles.timeContainer}>
      <button className={styles.buttonDecrement}>
      <ArrowBirdSvg  direction="left" fill="#494949" onClick={handleChangeMinutes} />
      </button>
      <span className={styles.minutesValue}>{minutesFrom} м</span>
      <button className={styles.buttonIncrement}>
      <ArrowBirdSvg direction="right" fill="#494949" onClick={() => handleChangeMinutes('increment')}  />
      </button>
      </div>
      </div>
    </div>
  );
};

export  {TimeHours};