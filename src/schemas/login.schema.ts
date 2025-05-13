import * as yup from "yup";

export const loginSchema = yup.object({
  username: yup
    .string()
    .required("Please provide the username")
    .min(4, "The minimum length of username is 4 characters")
    .max(255, "The maximum length of username is 255 characters"),
  password: yup
    .string()
    .required("Please provide the username")
    .min(4, "The minimum length of username is 4 characters")
    .max(255, "The maximum length of username is 255 characters"),
});

export type LoginFormInputs = yup.InferType<typeof loginSchema>;
