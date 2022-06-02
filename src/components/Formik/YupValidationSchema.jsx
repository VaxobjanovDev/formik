import * as Yup from "yup";

export const initialValues = {
    email: "",
    comment: "",
    selectOptions: "",
    radioOption: "",
    checkboxOption: []
};

export const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Required"),
    comment: Yup.string().required("Required"),
    selectOptions: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkboxOption: Yup.array().required("Required")
});