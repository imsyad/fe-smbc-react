import * as yup from "yup";

export const registerSchema = yup.object({
  fullname: yup
    .string()
    .required("Please provide the fullname.")
    .min(1, "The minimum lenght of fullname is 1 character.")
    .max(255, "The maximum length of fullname is 255 characters."),
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

export type RegisterFormInputs = yup.InferType<typeof registerSchema>;
