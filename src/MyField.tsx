import { TextFieldProps } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { FieldProps } from "formik";
import React from "react";

const MyField: React.FC<FieldProps & TextFieldProps> = ({
  label,
  placeholder,
  field,
}) => {
  return <TextField label={label} placeholder={placeholder} {...field} />;
};

export default MyField;
