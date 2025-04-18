import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  password: "",
};

const validateSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at 6 characters")
    .required("Password is required"),
});
function FormWithFormik() {
  const handleSubmit = (values: FormValues) => {
    alert("form submitted");
    console.log("Submitted form details: ", values);
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validateSchema}>
        <Form>
            <div>
                <label>Name</label>
                <Field type='text' name='name' placeholder='Enter your name'/>
                <ErrorMessage name="name" component="p" />
            </div>
            <div>
                <label>Email</label>
                <Field type='email' name='email' placeholder='Enter your email'/>
                <ErrorMessage name="email" component="p" />
            </div>
            <div>
                <label>Password</label>
                <Field type='password' name='password' placeholder='Enter your password'/>
                <ErrorMessage name="password" component="p" />
            </div>
            <br/>
            <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormWithFormik;
