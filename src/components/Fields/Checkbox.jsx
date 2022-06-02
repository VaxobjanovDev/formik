import { ErrorMessage, Field } from "formik";
import TextError from "../Errors/TextError";

export const checkboxOptions = [
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
              console.log(option)
            return (
              <div>
                <input
                  type="checkbox"
                  id={option.key}
                  value={option.key}
                  checked={field.values.includes(option.key)}
                  {...field}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </div>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError}/>
    </div>
  );
}

export default Checkbox;
