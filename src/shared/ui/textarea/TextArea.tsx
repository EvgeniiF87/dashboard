import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';

import styles from './TextArea.module.scss';

interface TextAreaProps {
  value:string;
  onChange:(e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  labelText?: string;
  error?: boolean;
  errorText?: string;
}

const TextArea: FC<TextAreaProps> = (props) => {
  const { value, onChange, placeholder, error, errorText, labelText='' } = props;
  const [inputFocus, setInputFocus] = useState(false)
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleFocusInput = () => setInputFocus(true)
  const handleBlurInput = () => setInputFocus(false)

  useEffect(() => {
    if (!textAreaRef.current) return;
    const texarea = textAreaRef.current;

    texarea.style.height = "100px";
    const scrollHeight = texarea.scrollHeight;

    texarea.style.height = scrollHeight + "px";

    texarea.addEventListener('focus', handleFocusInput)
    texarea.addEventListener('blur', handleBlurInput)
    
    return () => {
      texarea.removeEventListener('focus', handleFocusInput)
      texarea.removeEventListener('blur', handleBlurInput)
    }
  }, [textAreaRef, value]);

  return (
    <label className={styles.label}>
      {error ?
      <span className={styles.errorText}>{errorText}</span>
      :  
      <span className={inputFocus ? `${styles.labelText} ${styles.labelTextActive}` : styles.labelText}> {labelText}</span>
      }
    <textarea
        className={styles.textarea}
        id="review-text"
        onChange={onChange}
        placeholder={placeholder}
        ref={textAreaRef}
        rows={2}
        value={value}
      />
   </label>
  );
};

export { TextArea };