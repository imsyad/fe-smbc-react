import { HttpStatusCode } from "axios";
import type { LoginFormInputs } from "../schemas/login.schema";
import type { ApiResponse } from "../types/response";
import API from "./api.service";

const AUTH_BASE_URL: string = import.meta.env.VITE_AUTH_BASE_URL;
export const login = async (credential: LoginFormInputs): Promise<string> => {
  try {
    localStorage.removeItem("_a");
    const data = await API.post<ApiResponse<string>>(
      `${AUTH_BASE_URL}/auth/login`,
      {
        ...credential,
      }
    );

    if (data.data.status === HttpStatusCode.Ok) {
      const token = data.data.data;

      if (!token) {
        throw new Error("Token is not found!");
      }

      localStorage.setItem("_a", token);
      return token;
    } else {
      throw new Error("Login failed.");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
