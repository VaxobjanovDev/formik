import { useFormik } from "formik";
import Checkbox from "../Fields/Checkbox";
import Input from "../Fields/Input";
import Radio from "../Fields/Radio";
import Select from "../Fields/Select";
import TextArea from "../Fields/TextArea";

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
    case "radio":
      return <Radio {...rest} />;
    case "checkbox":
      return <Checkbox {...rest}/>;
    // case "date":
    //   return <Date />;
    default:
      return null;
  }
}

export default FormControl;
