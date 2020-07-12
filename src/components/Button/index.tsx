import React from "react";
import clsx from "clsx";
import styles from "./button.module.css";

export interface IButtonProps {
  children: any;
  type?: "submit" | "button";
  fullWidth?: boolean;
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({ children, type, fullWidth, disabled }) => (
  <button className={clsx(styles.button, { [styles.fullWidth]: fullWidth })} disabled={disabled} type={type}>
    {children}
  </button>
);

Button.defaultProps = {
  type: "button",
  fullWidth: false,
  disabled: false,
};

export default Button;
