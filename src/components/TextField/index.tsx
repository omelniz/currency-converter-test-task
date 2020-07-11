import React from "react";
import clsx from "clsx";
import field from "../../decorators/Field";
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
  hasError?: boolean;
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
      />
    </div>
  );
};

TextField.defaultProps = {
  type: "text",
  hasError: false,
};

export default field(TextField);
