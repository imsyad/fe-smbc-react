import useRentBookForm from "../../hooks/useRentBookForm";
import type { Book } from "../../types/book";
import type { CreateRent } from "../../types/rent";

type RentBookActionProps = {
  book: Book;
  onClick: (createRent: CreateRent) => void;
};

const RentBook = ({ book, onClick }: RentBookActionProps) => {
  const { register, handleSubmit, errors, isDirty, isSubmitting, isValid } =
    useRentBookForm();

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex-shrink-0 w-full md:w-1/3 h-64 overflow-hidden rounded-md shadow">
        <img
          src={
            book.imageUrl ||
            "https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061131_1280.png"
          }
          alt={book.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">{book.name}</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            <strong>Author:</strong> {book.author}
          </p>

          <form
            onSubmit={handleSubmit((data) => {
              onClick(data);
            })}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Start Date
              </label>
              <input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                {...register("startDate")}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              />
              {errors.startDate && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.startDate.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                End Date
              </label>
              <input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                {...register("endDate")}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              />
              {errors.endDate && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.endDate.message}
                </p>
              )}
            </div>
            <input hidden {...register("bookId", { value: book.id })} />
            <input hidden {...register("amount", { value: 1 })} />
            <button
              type="submit"
              disabled={book.total < 1 || !isDirty || !isValid}
              className="w-full mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {book.total > 0
                ? !isSubmitting
                  ? "Rent"
                  : "Loading..."
                : "Not Available"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RentBook;
