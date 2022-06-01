import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormControl from "./FormControl";

function FormikContainer() {
  const dropDownOptions = [
    { key: "Select any option", value: "" },
    { key: "Option 1", value: "option" },
    { key: "Option 2", value: "option1" },
    { key: "Option 3", value: "option2" },
  ];

  const initialValues = {
    email: "",
    comment: "",
    selectOptions: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Required"),
    comment: Yup.string().required("Required"),
    selectOptions: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="formik">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <FormControl
              type="email"
              name="email"
              label="Email"
              control="input"
            />
            <FormControl
              type="text"
              name="comment"
              label="Comment"
              control="textarea"
            />
            <FormControl
                name="selectOption"
                control="select"
                label="Select Option"
                options={dropDownOptions}
                />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikContainer;
