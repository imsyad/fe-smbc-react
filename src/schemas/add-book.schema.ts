import * as yup from "yup";
export const addBookSchema = yup.object({
  name: yup.string().required(),
  author: yup.string().required(),
  total: yup.number().required().min(1),
  imageUrl: yup.string().notRequired().default(""),
});

export type AddBookFormInputs = yup.InferType<typeof addBookSchema>;
