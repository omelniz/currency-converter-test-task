import React from "react";
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
}

export const Select: React.FC<ISelectProps> = ({ options, value, onChange }) => (
  <select className={styles.select} onChange={onChange} value={value}>
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
