import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, type LoginFormInputs } from "../schemas/login.schema";
import { useForm } from "react-hook-form";
import { login } from "../services/login.service";
import { useNavigate } from "react-router";

export const useLoginForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm<LoginFormInputs>({
    resolver: yupResolver(loginSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      await login(data);
      navigate("/catalogue");
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
