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
            <div className="personal-detail">
              <h1>Step 1:Your details</h1>
              <FormControl
                type="text"
                name="name"
                label="Name"
                control="input"
              />
              <FormControl
                type="email"
                name="email"
                label="Email"
                control="input"
              />
              <FormControl
                type="text"
                name="phone"
                label="Phone"
                control="input"
              />
            </div>
            <div className="delivery-address">
              <h1>Step 2:Delivery address</h1>
              <FormControl
                type="text"
                name="comment"
                label="Comment"
                control="textarea"
              />
              <FormControl
                type="text"
                name="postCode"
                label="Post Code"
                control="input"
              />
              <FormControl
                name="selectOptions"
                control="select"
                label="Your location"
              />
            </div>
            <div className="card-detail">
              <h1>Step 3:Card details</h1>
              <FormControl
                name="radioOption"
                control="radio"
                label="Choose card"
              />
              <FormControl
                name="checkboxOption"
                control="checkbox"
                label="Choose product color"
              />
              <FormControl
                type="text"
                name="cardNumber"
                label="Card Number"
                control="input"
              />
              <FormControl
                type="text"
                name="securityCode"
                label="Security code"
                control="input"
              />
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikContainer;
