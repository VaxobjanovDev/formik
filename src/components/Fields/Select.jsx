import { ErrorMessage, Field } from "formik"
import TextError from '../Errors/TextError'


export const dropDownOptions = [
    { key: "Select any option", value: "" },
    { key: "Option 1", value: "option" },
    { key: "Option 2", value: "option1" },
    { key: "Option 3", value: "option2" },
  ];

function Select(props) {

    const { name, label, options, ...rest } = props

    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <Field as='select' name={name} id={name} {...rest}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.key}
                    </option>
                ))}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Select