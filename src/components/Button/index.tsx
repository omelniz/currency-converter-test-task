import React from "react";
import clsx from "clsx";
import styles from "./button.module.css";

export interface IButtonProps {
  children: any;
  type?: "submit" | "button";
  fullWidth?: boolean;
}

const Button: React.FC<IButtonProps> = ({ children, type, fullWidth }) => (
  <button className={clsx(styles.button, { [styles.fullWidth]: fullWidth })} type={type}>
    {children}
  </button>
);
 
Button.defaultProps = {
  type: "button",
  fullWidth: false,
};

export default Button;
