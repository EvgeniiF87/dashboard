import { ChildrenNodeType } from '../../types/children';

type ColorType =
  | "primary"
  | "secondary"
  | "warning"
  | "danger"
  | "info"
  | "light"
  | "dark"
  | "orange"
  | "violet"
  | "success";

interface ButtonRGProps {
  type?: "button" | "reset" | "submit";
  className?: string;
  color?: ColorType;
  children: string | ChildrenNodeType;
  size?: "sm" | "md" | "lg";
  id?: string;
  disabled?: boolean;
  handleClick?: () => void;
}

export type { ButtonRGProps };
