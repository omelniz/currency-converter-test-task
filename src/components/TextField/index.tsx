import React from "react";
import styles from "./text-field.module.css";

export interface ITextField {
  id: string;
  name: string;
  type: "email" | "text";
  onChange: () => void;
  value?: string;
  label?: string;
  className?: string;
  placeholder?: string;
}

const TextField: React.FC<ITextField> = ({ id, className, name, type, value, onChange, placeholder, label }) => {
  return (
    <div data-testid="text-field" className={className}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className={styles.input}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

TextField.defaultProps = {
  type: "text",
};

export default TextField;
