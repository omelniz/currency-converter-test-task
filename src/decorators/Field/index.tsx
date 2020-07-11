import React from "react";

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

    return <Component {...input} {...props} hasError={hasError} />;
  };

  Field.displayName = `Field(${Component.displayName})`;

  return Field;
};

export default field;
