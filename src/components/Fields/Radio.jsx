import { ErrorMessage, Field } from "formik";
import TextError from "../Errors/TextError";

const radioOptions = [
  { key: "Visa", value: "visa" },
  { key: "Mastercard", value: "masterCard" },
  { key: "AmEx", value: "amex" },
];

function Radio(props) {
  const { name, label, rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return radioOptions.map((radio) => {
            return (
              <div key={radio.key}>
                <input
                  type="radio"
                  {...field}
                  id={radio.value}
                  value={radio.key}
                  defaultChecked={field.value === radio.value}
                />
                <label htmlFor={radio.value}>{radio.key}</label>
              </div>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Radio;
