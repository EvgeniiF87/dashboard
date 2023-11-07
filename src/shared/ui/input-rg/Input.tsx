import { FC, memo, useCallback, useEffect, useRef, useState } from "react";
import { InputProps } from "./types";
import { InputEmailSvg } from "../../svg/InputEmailSvg";
import { InputEyeSvg, InputPasswordSvg, InputSearchSvg } from "../../svg";

import "./Input.css";

const Input: FC<InputProps> = memo(
  ({
    className,
    value,
    searchClick,
    passwordEyeClick,
    variant,
    error,
    errorText,
    name,
    placeholder,
    label,
    type = "text",
    required,
    downEnterCallback,
    ...props
  }) => {
    const [inputFocus, setInputFocus] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const checkEnterClick = useCallback(
      (event: KeyboardEvent) => {
        if (event.key !== "Enter" && !downEnterCallback) {
          return;
        }

        if (event.key === "Enter" && downEnterCallback) {
          downEnterCallback();
        }
      },
      [downEnterCallback]
    );

    const handleFocusInput = () => setInputFocus(true);
    const handleBlurInput = () => setInputFocus(false);

    useEffect(() => {
      if (!downEnterCallback) return;
      if (!inputRef.current) return;
      const node = inputRef.current;

      node.addEventListener("keydown", checkEnterClick);

      node.addEventListener("focus", handleFocusInput);
      node.addEventListener("blur", handleBlurInput);

      return () => {
        node.removeEventListener("keydown", checkEnterClick);
        node.removeEventListener("focus", handleFocusInput);
        node.removeEventListener("blur", handleBlurInput);
      };
    }, [checkEnterClick]);

    return (
      <label htmlFor={name} className="inputrg-label">
        <span style={error ? {color: 'red'} :{}} className={inputFocus ? `label label-active` : "label"}>
          {error ? errorText : label}
          {required ? <span className="required">*</span> : ""}
        </span>
        <div className="input-before__svg">
          {variant === "email" && <InputEmailSvg active={!!value} />}
          {variant === "password" && <InputPasswordSvg active={!!value} />}
          {variant === "search" && searchClick && (
            <InputSearchSvg active={!!value} onClick={searchClick} />
          )}
        </div>
        <input
          style={error ? { borderColor: "#FF9393" } : {}}
          ref={inputRef}
          value={value}
          type={type}
          id={name}
          autoComplete="off"
          className={
            !variant ? "inputrg-input inputrg-input__nosvg" : "inputrg-input"
          }
          placeholder={placeholder}
          {...props}
        />

        <div className="input-after__svg">
          {variant === "password" && !!value && passwordEyeClick && (
            <InputEyeSvg onClick={passwordEyeClick} />
          )}
        </div>
      </label>
    );
  }
);

Input.displayName = "Input";

export { Input };


