import Input from "./Input"
import Select from "./Select"
import TextArea from "./TextArea"

function FormControl(props){
    const {control,...rest} = props
    switch(control){
        case 'input':
            return<Input {...rest}/>
        case 'textarea':
            return <TextArea {...rest}/>
        case 'select':
            return <Select {...rest}/>
        case 'radio':
        case 'checkbox':
        case 'date':
        default:
            return null
    }

}

export default FormControl