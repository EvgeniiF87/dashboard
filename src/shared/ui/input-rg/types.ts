import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  searchClick?: () => void;
  passwordEyeClick?: () => void;
  downEnterCallback?: () => void;
  placeholder?: string;
  name?: string;
  label?: string;
  error?: boolean;
  type?: string;
  variant?: "search" | "email" | 'password';
  required?: boolean;
  value: string | number;
  errorText?: string | null;
}

export type { InputProps };
