import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object({
  firstName: Yup.string()
    .min(3, "Too Short!")
    .max(20, "name lmba hai")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
    password:Yup.string()
    .min(8,'minimum password should be at least 8 character').required('Required')
});
const Validation = () => (
  <div className="my-4 mx-auto max-w-sm border bg-white rounded-xl p-8">
    <h1 className="text-xl text-center">Signup</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field
            name="firstName"
            placeholder="Enter your firstname"
            className="block border rounded w-full p-1 mt-4"
          />
          {errors.firstName && touched.firstName ? ( <div className="text-red-600">{errors.firstName}</div>
          ) : null}
          <Field
            name="lastName"
            className="border rounded  w-full mt-4 p-1"
            placeholder="Enter your lastname"
          />
          
          {errors.lastName && touched.lastName ? ( <div className="text-red-600">{errors.lastName}</div>
          ) : null}
          <Field
            name="email"
            type="email"
            className="border rounded mt-4 w-full p-1"
            placeholder="Enter email address"
          />
          {errors.email && touched.email ? <div className="text-red-600">{errors.email}</div> : null}
          <Field  
          name="password"
          type="password"
          placeholder="Enter your password"
          className="border rounded mt-4 w-full p-1"
          />

          {errors.password && touched.password ?( <div className="text-red-600"> {errors.password}</div>):null}
          <button
            type="submit"
            className="border rounded w-full mt-4 mb-4 p-1 bg-blue-600 hover:bg-blue-400 text-white"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);
export default Validation;
