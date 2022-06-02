import React from "react";
import { Form, Formik } from "formik";
import { dropDownOptions } from "../Fields/Select";
import FormControl, { initialValues, onSubmit, validationSchema } from "./FormControl";
import { checkboxOptions } from "../Fields/Checkbox";

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
              options={dropDownOptions}
            />
             <FormControl
              name="checkboxOption"
              control="checkbox"
              label="Choose product color"
              options={checkboxOptions}
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikContainer;
