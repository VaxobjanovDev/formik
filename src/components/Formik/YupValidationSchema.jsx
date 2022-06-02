import * as Yup from "yup";

export const initialValues = {
  name: "",
  email: "",
  phone: "",
  comment: "",
  postCode: "",
  selectOptions: "",
  radioOption: "",
  checkboxOption: [],
  cardNumber: "",
  securityCode: "",
};

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  phone: Yup.number().required("Required"),
  comment: Yup.string().required("Required"),
  postCode: Yup.string().required("Required"),
  selectOptions: Yup.string().required("Required"),
  radioOption: Yup.string().required("Required"),
  checkboxOption: Yup.array().required("Required"),
  cardNumber: Yup.number().required("Required"),
  securityCode: Yup.number().required("Required"),
});
