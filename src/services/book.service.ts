import type { AddBookFormInputs } from "../schemas/add-book.schema";
import type { Book } from "../types/book";
import type { ApiResponse } from "../types/response";
import API from "./api.service";

const CATALOGUE_BASE_URL: string = import.meta.env.VITE_CATALOGUE_BASE_URL;

export const getAllBooks = async (): Promise<Book[]> => {
  try {
    const response = await API.get<ApiResponse<Book[]>>(
      `${CATALOGUE_BASE_URL}/catalogue`
    );
    const books = response.data?.data ?? [];
    return books.sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.error("Failed to fetch books:", error);
    return [];
  }
};

export const getBookById = async (id: number): Promise<Book | undefined> => {
  try {
    const url: string = `${CATALOGUE_BASE_URL}/catalogue`;
    const params = new URLSearchParams();
    params.append("bookId", id.toString());

    const response = await API.get<ApiResponse<Book | undefined>>(url, {
      params,
    });
    const books = response.data?.data ?? undefined;
    return books;
  } catch (error) {
    console.error("Failed to fetch books:", error);
    return undefined;
  }
};

export const registerNewBook = async (register: AddBookFormInputs) => {
  try {
    const url: string = `${CATALOGUE_BASE_URL}/catalogue`;
    return await API.post<ApiResponse<Book>>(url, { ...register });
  } catch (error) {
    console.error("Failed to register books:", error);
    throw error;
  }
};
