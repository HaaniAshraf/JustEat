import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { SignupValidation } from "../utils/SignupValidation";
import Logo from "../assets/justEat.png";
import { useNavigate } from "react-router-dom";
import { saveUserDetails } from "../redux/reducers/userReducer";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  password: "",
  cpassword: "",
};

function Forms() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (data) => {
    dispatch(saveUserDetails(data));
    navigate("/home");
  };
  return (
    <div className="flex items-center justify-center">
      <Formik
        initialValues={initialValues}
        validationSchema={SignupValidation}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-7 border-2 border-gray-400 rounded-md px-5 py-10">
            <div className="flex gap-1 items-center justify-center">
              <img src={Logo} alt="" className="h-12" />
              <h2 className="font-bold text-3xl">JustEat</h2>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <label htmlFor="name">Name : </label>
                <Field
                  type="text"
                  name="name"
                  className="px-1 bg-gray-200 ml-2"
                ></Field>
              </div>
              {touched.name && errors.name && (
                <small className="text-red-500">{errors.name}</small>
              )}
            </div>
            <div className="flex flex-col gap-2">
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
            </div>
            <div className="flex flex-col gap-2">
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
            </div>
            <div className="flex flex-col gap-2">
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
            </div>
            <div className="flex flex-col gap-2">
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
            </div>
            <button
              type="submit"
              className=" bg-[#aa081c] hover:bg-[#aa0808db] py-2 rounded-lg font-bold text-white"
            >
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Forms;
