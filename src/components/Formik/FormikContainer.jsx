import React from "react";
import { Form, Formik } from "formik";
import FormControl, { onSubmit } from "./FormControl";
import { initialValues, validationSchema } from "./YupValidationSchema";


function FormikContainer() {
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
              name="selectOptions"
              control="select"
              label="Select Option"
            />
            <FormControl
              name="radioOption"
              control="radio"
              label="Choose"
            />
             <FormControl
              name="checkboxOption"
              control="checkbox"
              label="Choose product color"
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikContainer;
