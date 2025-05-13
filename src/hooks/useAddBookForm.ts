import { useForm } from "react-hook-form";
import {
  type AddBookFormInputs,
  addBookSchema,
} from "../schemas/add-book.schema";
import { yupResolver } from "@hookform/resolvers/yup";

const useAddBookForm = () => {
  const { register, handleSubmit, formState } = useForm<AddBookFormInputs>({
    resolver: yupResolver(addBookSchema),
    mode: "onTouched",
  });

  return {
    register,
    handleSubmit,
    errors: formState.errors,
    isSubmitting: formState.isSubmitting,
    isDirty: formState.isDirty,
    isValid: formState.isValid,
  };
};

export default useAddBookForm;
