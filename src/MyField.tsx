import { TextField } from "@material-ui/core";
import { FieldProps } from "formik";
import React from "react";

interface IProps extends FieldProps {
  placeholder: string;
}

const MyField: React.FC<IProps> = ({ placeholder, field }) => {
  return <TextField placeholder={placeholder} {...field} />;
};

export default MyField;
