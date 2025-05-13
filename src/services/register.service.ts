import { HttpStatusCode } from "axios";
import type { RegisterFormInputs } from "../schemas/register.schema";
import type { ApiResponse } from "../types/response";
import API from "./api.service";

const AUTH_BASE_URL: string = import.meta.env.VITE_AUTH_BASE_URL;
export const registerService = async (credential: RegisterFormInputs) => {
  try {
    localStorage.removeItem("_a");
    const response = await API.post<ApiResponse<unknown>>(
      `${AUTH_BASE_URL}/auth/register`,
      {
        ...credential,
      }
    );

    if (response.data.status === HttpStatusCode.Created) {
      return true;
    } else {
      throw new Error("Register failed.");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
