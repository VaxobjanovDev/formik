import { ErrorMessage, Field } from "formik";
import TextError from '../Errors/TextError'


function TextArea(props){
    const {label,name, ...rest} = props
    return(
        <div className="form-control textarea">
            <label htmlFor={name}>{label}</label>
            <Field as='textarea' name={name} id={name} {...rest}/>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}

export default TextArea