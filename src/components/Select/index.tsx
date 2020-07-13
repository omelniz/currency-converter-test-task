import React from "react";
import clsx from "clsx";
import styles from "./select.module.css";
import field from "../../decorators/Field";

interface IOption {
  label: string;
  value: string | number;
}

export interface ISelectProps {
  options?: Array<IOption>;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string | number;
  name: string;
  className?: string;
  "aria-label": string;
}

export const Select: React.FC<ISelectProps> = ({ name, options, value, onChange, className, ...props }) => (
  <select name={name} className={clsx(styles.select, className)} onChange={onChange} value={value} {...props}>
    {options.map((item) => (
      <option key={item.value} value={item.value}>
        {item.label}
      </option>
    ))}
  </select>
);

Select.defaultProps = {
  options: [],
};

export default field(Select);
