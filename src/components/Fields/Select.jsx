import { ErrorMessage, Field } from "formik"
import TextError from '../Errors/TextError'


const dropDownOptions = [
    { key: "Select any option", value: "" },
    { key: "Uzbekistan", value: "uz" },
    { key: "England", value: "en" },
    { key: "Russia", value: "ru" },
  ];

function Select(props) {

    const { name, label, options, ...rest } = props

    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <Field as='select' name={name} id={name} {...rest}>
                {dropDownOptions.map((option) => (
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