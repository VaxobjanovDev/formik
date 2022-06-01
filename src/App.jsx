// import { ErrorMessage, Field, Form, Formik } from "formik";
import "./App.css";
// import * as yup from 'yup'

// import Teaxt from "./components/Teaxt";
import FormikContainer from "./FormikContainer";

function App() {

  // const initialValues = {
  //   name: "Boy",
  //   email: "",
  //   channel: "",
  // }
  // const onSubmit = (values) => {
  //   console.log(values);
  // }

  // const validationSchema = yup.object().shape({
  //   name: yup.string().required("Required"),
  //   email: yup.string().email("Invalid property").required("Required"),
  //   channel: yup.string().required("Required")
  // })


  return (
    <div className="App">
      {/* <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form>
          <div>
            <label htmlFor="name">Name:</label>
            <Field
              type="text"
              id="name"
              name="name"
            />
            <ErrorMessage name="name" component={Teaxt}/>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
            />
            <ErrorMessage name="email" />
          </div>

          <div>
            <label htmlFor="channel">Channel</label>
            <Field
              type="text"
              id="channel"
              name="channel"
            />
            <ErrorMessage name="channel" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik> */}
      <FormikContainer/>
    </div>
  );
}

export default App;
