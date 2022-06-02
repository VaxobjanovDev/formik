import { ErrorMessage, Field } from "formik";
import TextError from "../Errors/TextError";

const checkboxOptions = [
  { key: "Color1", value: "green" },
  { key: "Color2", value: "red" },
  { key: "Color3", value: "blue" },
];

function Checkbox(props) {
  const { name, label, rest } = props;

  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return checkboxOptions.map((option) => {

            return (
              <div key={option.key}>
                <input
                  type="checkbox"
                  id={option.key}
                  value={option.key}
                  defaultChecked={!field.value.includes(option.value)}
                  {...field}
                />
                <label htmlFor={option.key}>{option.key}</label>
              </div>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Checkbox;
