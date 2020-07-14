import React from "react";
import clsx from "clsx";
import field from "../../decorators/Field";
import styles from "./text-field.module.css";

export interface ITextField {
  id: string;
  name: string;
  type: "email" | "text" | "password";
  onChange: () => void;
  value?: string;
  label?: string;
  className?: string;
  placeholder?: string;
  hasError?: boolean;
  min?: number;
}

export const TextField: React.FC<ITextField> = ({
  id,
  className,
  name,
  type,
  value,
  onChange,
  placeholder,
  label,
  hasError,
  min,
}) => {
  return (
    <div data-testid="text-field" className={className}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className={clsx(styles.input, { [styles.hasError]: hasError })}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={hasError}
        min={min}
      />
    </div>
  );
};

TextField.defaultProps = {
  type: "text",
  hasError: false,
  min: null,
};

export default field(TextField);
