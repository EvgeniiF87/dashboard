import {  useEffect, useRef, useState } from "react";
import { OptionsSelectType } from "../../types";
import { SelectBird } from "../select-bird/SelectBird";

import styles from "./Dropdown.module.scss";


type DropdownProps = {
  options: OptionsSelectType[];
  onSelect: (value: OptionsSelectType) => void;
  width: number;
  selected: OptionsSelectType | null;
  label: string;
  error: boolean;
  errorText: string;
};

const Dropdown = ({ onSelect, options, width, selected, error, errorText, label }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null)

  const handleOptionClick = (option: OptionsSelectType) => {
    if (selected?.id && selected?.id === option.id) {
      onSelect(options[0]);
    } else {
      onSelect(option);
    }
    setIsOpen(false);
  };

  const handleToggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChechClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    window.document.addEventListener('click', handleChechClickOutside)
    return () => {
    window.document.removeEventListener('click', handleChechClickOutside)
    }
  }, [isOpen])

  return (
    <div ref={ref} style={{width}} className={styles.dropdown}>
      <label style={error ? {color: 'red'} : {}} className={error && errorText && label ? `${styles.dropdownLabel} ${styles.dropdownLabelError}` : styles.dropdownLabel}>{error ? `${errorText}` : `${label}`}</label>
      <div onClick={handleToggleDropdown} className={styles.dropdown_selected}>
        <div className={styles.value_container}>
          <span className={Number(selected?.id) === 0 ? `${styles.dropdown_selected__value} ${styles.dropdown_selected__value_opasity}` :  styles.dropdown_selected__value}>
            {selected && selected.label}
          </span>
        </div>
        <SelectBird active={isOpen} />
      </div>
      {isOpen && (
        <div className={styles.dropdown_menu__container}>
          <ul className={styles.dropdown_menu}>
            {options.slice(1).map((option) => (
                <li
                className={
                  selected?.id === option.id
                  ? `${styles.dropdown_menu__li} ${styles.dropdown_menu__active}`
                  : styles.dropdown_menu__li
                }
                key={option.value}
                onClick={() => handleOptionClick(option)}
              >
                <span className={styles.dropdown_menu__item}>
                {option.label}
                </span>
                </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export { Dropdown };
