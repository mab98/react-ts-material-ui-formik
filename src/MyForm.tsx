import { Button, TextField } from "@material-ui/core";
import { Form, Formik } from "formik";
import React from "react";

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
      onSubmit={(values: IValues) => onSubmit(values)}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <div>
            <TextField
              name="firstName"
              placeholder="first name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />
          </div>
          <div>
            <TextField
              name="lastName"
              placeholder="last name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
          </div>
          <div>
            <TextField
              name="email"
              placeholder="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
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
