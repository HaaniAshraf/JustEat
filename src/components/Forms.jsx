import React from "react";
import { Formik, Form, Field } from "formik";
import { SignupValidation } from "../utils/SignupValidation";

const initialValues = {
  name: "",
  email: "",
  phone:"",
  password: "",
  cpassword: "",
};

function Forms() {
  return (
    <div className="flex items-center justify-center">
      <Formik initialValues={initialValues} validationSchema={SignupValidation}>
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-7 border-2 border-gray-400 rounded-md px-5 py-10">
            <h1 className="text-center font-semibold text-2xl">Sign-Up</h1>
            <div className="flex justify-between">
              <label htmlFor="name">Name :</label>
              <Field
                type="text"
                name="name"
                className="px-1 bg-gray-200 ml-2"
              ></Field>
            </div>
            {touched.name && errors.name && (
              <small className="text-red-500">{errors.name}</small>
            )}
            <div className="flex justify-between">
              <label htmlFor="email">Email :</label>
              <Field
                type="email"
                name="email"
                className="px-1 bg-gray-200 ml-2"
              ></Field>
            </div>
            {touched.email && errors.email && (
              <small className="text-red-500">{errors.email}</small>
            )}
            <div className="flex justify-between">
              <label htmlFor="phone">Phone :</label>
              <Field
                type="number"
                name="phone"
                className="px-1 bg-gray-200 ml-2"
                inputMode="numeric"
              ></Field>
            </div>
            {touched.phone && errors.phone && (
              <small className="text-red-500">{errors.phone}</small>
            )}
            <div className="flex justify-between">
              <label htmlFor="password">Password :</label>
              <Field
                type="password"
                name="password"
                className="px-1 bg-gray-200 ml-2"
              ></Field>
            </div>
            {touched.password && errors.password && (
              <small className="text-red-500">{errors.password}</small>
            )}
            <div className="flex justify-between">
              <label htmlFor="cpassword">Confirm Password :</label>
              <Field
                type="password"
                name="cpassword"
                className="px-1 bg-gray-200 ml-2"
              ></Field>
            </div>
            {touched.cpassword && errors.cpassword && (
              <small className="text-red-500">{errors.cpassword}</small>
            )}
            <button
              type="submit"
              className=" bg-red-600 hover:bg-red-500 py-2 rounded-lg font-bold text-white"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Forms;
