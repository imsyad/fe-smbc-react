import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  type RentBookFormInputs,
  rentBookSchema,
} from "../schemas/rent.schema";

const useRentBookForm = () => {
  const { register, handleSubmit, formState } = useForm<RentBookFormInputs>({
    resolver: yupResolver(rentBookSchema),
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

export default useRentBookForm;
