import React from "react";
import classes from "./field.module.css";

interface IInputProps {
  id: string;
  name: string;
  type: "email" | "text";
  onChange: () => void;
  value?: string;
  placeholder?: string;
}

interface IMetaProps {
  touched: boolean;
  error: string | null;
}

export interface IFieldProps {
  meta: IMetaProps;
  input: IInputProps;
}

const field = (Component: React.FC<any>) => {
  const Field: React.FC<IFieldProps> = ({ meta, input, ...props }) => {
    const hasError = Boolean(meta.touched && meta.error);

    return (
      <div className={classes.field}>
        <Component {...input} {...props} hasError={hasError} />
        {hasError && <p role="alert" className={classes.error}>{meta.error}</p>}
      </div>
    );
  };

  Field.displayName = `Field(${Component.displayName})`;

  return Field;
};

export default field;
