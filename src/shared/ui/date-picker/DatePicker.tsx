import { useCallback, useEffect, useRef, useState } from "react";
import { DatePickerSvg } from "../../svg";
import { TimeServices } from "../../service";
import { DatePickerPopap } from "../date-picker-popap/DatePickerPopap";

import styles from "./DatePicker.module.css";


export interface DatePickerProps {
  value: Date;
  min?: Date;
  max?: Date;
  language?: 'ru' | 'eng';
  label?: string;
  placeholder: string;
  changeDate?: (value: Date) => void;
  initDateRef?: Date;
  error?: string | null;
}

export const DatePicker = ({ error, placeholder, value,  language='ru', label, changeDate, initDateRef }: DatePickerProps) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const elementRef = useRef<HTMLDivElement>(null);


  const clickOutside = (e: MouseEvent) => {
    if (!elementRef.current) return;
    const target = e.target;

    if (!elementRef.current.contains(target as Node)) {
      setShowPopup(false);
    }
  }

  useEffect(() => {
    if (!elementRef.current) return;

    document.addEventListener("click", clickOutside);

    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, []);

  const handleChange = useCallback((value: Date) => {
    if (!changeDate) return;
    
    changeDate(value);
    setShowPopup(false);

    if (!showPlaceholder && initDateRef === value) {
      setShowPlaceholder(true)
    } else {
      setShowPlaceholder(false)
    }
  },[]);

  const onInputClick = () => {
    setShowPopup(true);
  };

  return (
    <div ref={elementRef} className={styles.root}>
      {error ? 
     <span className={styles.labelErrorText}>{error}</span>
     :  
     <span className={styles.labelText}>{label}</span>
     }
      <div className={styles.datePicker}>
        <div onClick={onInputClick} className={styles.datePickerInputContainer}>
          <div className={styles.datePickerInputSvg}>
            <DatePickerSvg />
          </div>

        {showPlaceholder ?
        <span className={styles.placeholder}>{placeholder}</span>
        :
        <span className={styles.selectedDay}>{TimeServices.getDayMonthYear(value.toString())}</span>
        }
        </div>
        {showPopup && (
          <DatePickerPopap
          isOpenCalendar={showPopup}
          onChange={handleChange}
          value={value}
          language={language}
          />
        )}
      </div>
    </div>
  );
};
