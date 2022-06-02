import { ErrorMessage, Field } from "formik";
import TextError from "../Errors/TextError";

const radioOptions = [
  { key: "Color1", value: "green" },
  { key: "Color2", value: "red" },
  { key: "Color3", value: "blue" },
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
              <div>
                <input
                  type="radio"
                  {...field}
                  id={radio.value}
                  value={radio.key}
                  defaultChecked={field.value === radio.value}
                />
                <label htmlFor={radio.value}>{label}</label>
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
