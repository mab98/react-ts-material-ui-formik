import { Button } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import React from "react";
import MyField from "./MyField";

interface IValues {
  firstName: string;
  lastName: string;
  email: string;
}

interface IProps {
  onSubmit: (values: IValues) => void;
}

const MyForm: React.FC<IProps> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      onSubmit={(values: IValues, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {() => (
        <Form>
          <div>
            <Field
              name="firstName"
              placeholder="first name"
              label="first name"
              component={MyField}
            />
          </div>
          <div>
            <Field
              name="lastName"
              placeholder="last name"
              label="last name"
              component={MyField}
            />
          </div>
          <div>
            <Field
              name="email"
              placeholder="email"
              label="email"
              component={MyField}
            />
          </div>
          <Button type="submit">Submit</Button>
          {/* <pre>{JSON.stringify(values)}</pre> */}
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
