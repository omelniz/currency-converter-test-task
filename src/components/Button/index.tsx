import React from "react";
import clsx from "clsx";
import styles from "./button.module.css";

export interface IButtonProps {
  children: any;
  type?: "submit" | "button";
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<IButtonProps> = ({ children, type, fullWidth, disabled, className }) => (
  <button className={clsx(styles.button, className, { [styles.fullWidth]: fullWidth })} disabled={disabled} type={type}>
    {children}
  </button>
);

Button.defaultProps = {
  type: "button",
  fullWidth: false,
  disabled: false,
  className: "",
};

export default Button;
