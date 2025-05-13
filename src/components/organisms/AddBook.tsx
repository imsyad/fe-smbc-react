import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSpinner } from "@fortawesome/free-solid-svg-icons";
import useAddBookForm from "../../hooks/useAddBookForm";
import type { AddBookFormInputs } from "../../schemas/add-book.schema";

const AddBook = ({
  onClickBook,
}: {
  onClickBook: (book: AddBookFormInputs) => void;
}) => {
  const { errors, handleSubmit, isDirty, isSubmitting, isValid, register } =
    useAddBookForm();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 ">Add a New Book</h2>
      <form
        onSubmit={handleSubmit((data) => onClickBook(data))}
        className="space-y-4"
      >
        <div>
          <label className="block text-sm font-medium ">Name</label>
          <input
            {...register("name")}
            className={`bg-white mt-1 block w-full rounded px-3 py-2 border focus:outline-none focus:ring focus:border-blue-500 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6
              ${
                errors.name
                  ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                  : "initial"
              }`}
          />
          {errors.name && (
            <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium ">Author</label>
          <input
            {...register("author")}
            className={`bg-white mt-1 block w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6
              ${
                errors.author
                  ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                  : "initial"
              }`}
          />
          {errors.author && (
            <p className="text-sm text-red-600 mt-1">{errors.author.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium ">Total</label>
          <input
            {...register("total")}
            type="number"
            min={1}
            className={`bg-white mt-1 block w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6
              ${
                errors.total
                  ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                  : "initial"
              }`}
          />
          {errors.total && (
            <p className="text-sm text-red-600 mt-1">{errors.total.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium ">Image URL</label>
          <input
            {...register("imageUrl")}
            className={`bg-white mt-1 block w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6
              ${
                errors.imageUrl
                  ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                  : "initial"
              }`}
          />
          {errors.imageUrl && (
            <p className="text-sm text-red-600 mt-1">
              {errors.imageUrl.message}
            </p>
          )}
        </div>
        <button
          disabled={!isDirty || !isValid || isSubmitting}
          type="submit"
          className={`bg-white flex items-center gap-2 border border-blue-500 text-blue-500 px-4 py-2 rounded transition  
    disabled:cursor-not-allowed disabled:bg-gray-300 dark:disabled:bg-gray-600
    ${isSubmitting ? "opacity-60 cursor-wait" : "hover:bg-blue-50"}`}
        >
          {isSubmitting ? (
            <FontAwesomeIcon
              icon={faSpinner}
              className="h-4 w-4 animate-spin"
            />
          ) : (
            <FontAwesomeIcon icon={faPlus} className="h-4 w-4" />
          )}
          <span>{isSubmitting ? "Adding..." : "Add Book"}</span>
        </button>
      </form>
    </div>
  );
};

export default AddBook;
