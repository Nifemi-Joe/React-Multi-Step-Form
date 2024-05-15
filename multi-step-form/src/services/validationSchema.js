import * as yup from "yup";

// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const phoneRules =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

export const BusinessFormSchema = yup.object().shape({

  name: yup
      .string()
      .min(3, "Miniumum 3 characters")
      .required("Full Name is required"),
  email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is Required"),
  company: yup
      .string()
      .min(3, "Miniumum 3 characters")
      .required("Company is required"),
  job: yup
      .string()
      .min(3, "Miniumum 3 characters")
      .required("Job Title is required"),


})
