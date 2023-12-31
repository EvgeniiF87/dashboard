import { FC, memo } from "react";
import "./CloseIcon.css";

interface CloseIconProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const CloseIcon: FC<CloseIconProps> = memo(
  ({ onClick, className, size = "md" }) => {
    const rootClasses = ["close__wrapper"];
    rootClasses.push(`close-size__${size}`);

    if (className) {
      rootClasses.push(className);
    }

    return <div onClick={onClick} className={rootClasses.join(" ")}></div>;
  }
);

CloseIcon.displayName = 'CloseIcon';

export { CloseIcon };
