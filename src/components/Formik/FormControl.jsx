import * as Yup from "yup";
import Checkbox from "../Fields/Checkbox";
import Input from "../Fields/Input";
import Select from "../Fields/Select";
import TextArea from "../Fields/TextArea";


export const initialValues = {
  email: "",
  comment: "",
  selectOptions: "",
  checkboxOption:[]
};

export const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Required"),
  comment: Yup.string().required("Required"),
  selectOptions: Yup.string().required("Required"),
  checkboxOption:Yup.array().required("Required")
});

export const onSubmit = (values) => {
  console.log(values);
};

function FormControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    // case "radio":
    //   return <Radio />;
    case "checkbox":
      return <Checkbox />;
    // case "date":
    //   return <Date />;
    default:
      return null;
  }
}

export default FormControl;
