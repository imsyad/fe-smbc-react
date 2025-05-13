import { yupResolver } from "@hookform/resolvers/yup";
import {
  registerSchema,
  type RegisterFormInputs,
} from "../schemas/register.schema";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { registerService } from "../services/register.service";

const useRegisterForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm<RegisterFormInputs>({
    resolver: yupResolver(registerSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: RegisterFormInputs) => {
    try {
      await registerService(data);
      navigate("/auth/login");
    } catch (error) {
      console.error(error);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors: formState.errors,
    isSubmitting: formState.isSubmitting,
    isDirty: formState.isDirty,
    isValid: formState.isValid,
  };
};

export default useRegisterForm;
