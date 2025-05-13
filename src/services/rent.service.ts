import type { Book } from "../types/book";
import type { CreateRent, Rent } from "../types/rent";
import type { ApiResponse } from "../types/response";
import API from "./api.service";
import { getBookById } from "./book.service";

const RENT_BASE_URL: string = import.meta.env.VITE_RENT_BASE_URL;

export const getRentBookByMemberId = async (): Promise<Rent[] | undefined> => {
  try {
    const url: string = `${RENT_BASE_URL}/rent`;
    const response = await API.get<ApiResponse<Rent[]>>(url);
    return response.data?.data ?? undefined;
  } catch (error) {
    console.error("Failed to fetch rent book list: ", error);
    throw error;
  }
};

export type RentWithBook = Rent & { book: Book | undefined };

export const getRentDetailsByMemberId = async (): Promise<RentWithBook[]> => {
  const rents = await getRentBookByMemberId();

  if (!rents) return [];
  const rentDetails = await Promise.all(
    rents?.map(async (rent) => {
      const book = await getBookById(rent.bookId);
      return { ...rent, book };
    })
  );

  return rentDetails;
};

export const createRentBook = async (createRentBook: CreateRent) => {
  try {
    const url: string = `${RENT_BASE_URL}/rent`;
    return await API.post<ApiResponse<unknown>>(url, createRentBook);
  } catch (error) {
    console.error("Failed to rent a book:", error);
    throw error;
  }
};
