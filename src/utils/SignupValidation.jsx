import * as Yup from "yup";

export const SignupValidation = Yup.object({
  name: Yup.string().max(15).required("Please enter name"),
  email: Yup.string().email("Please enter valid email").required("Please enter email"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Please enter a valid 10-digit phone number")
    .min(10, "Please enter a 10-digit phone number") 
    .required("Please enter phone number"),
  password: Yup.string().min(4).required("Please enter password"),
  cpassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password not matched")
    .required("Please enter confirm password"),
});
