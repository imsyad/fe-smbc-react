import type { Book } from "../../types/book";

type BookListProps = {
  books: Book[];
  onClickDetail: (book: Book) => void;
  onClickRent: (book: Book) => void;
};

const BookList = ({ books, onClickRent, onClickDetail }: BookListProps) => {
  if (!books || !books.length) {
    return (
      <div className="text-center">Sorry, there is no available book 😢</div>
    );
  }

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 overflow-hidden">
      {books.map((book: Book) => (
        <div
          key={book.id}
          className="transition transform hover:scale-101 duration-200 shadow-md hover:cursor-pointer hover bg-white dark:bg-[#242424] flex flex-col justify-between"
          onClick={() => onClickDetail(book)}
        >
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96 flex items-center justify-center">
            <img
              src={
                book.imageUrl
                  ? book.imageUrl
                  : "https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061131_1280.png"
              }
              alt="card-image"
              className="object-contain w-full h-full"
            />
          </div>
          <div className="flex flex-col flex-1 justify-between">
            <div className="p-6">
              <div className="flex items-center justify-between mb-2 gap-4">
                <p className="text-base font-medium text-blue-gray-900">
                  {book.name}
                </p>
                <p className="text-base font-light text-blue-gray-900">
                  {`Stock: ${book.total > 0 ? book.total : 0}`}
                </p>
              </div>
              <p className="text-sm font-normal text-gray-700 dark:text-gray-300 opacity-75">
                {book.author}
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 hover:cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-300 dark:disabled:bg-gray-600"
                type="button"
                disabled={book.total < 1}
                onClick={(event) => {
                  event.stopPropagation();
                  onClickRent(book);
                }}
              >
                {book.total < 1 ? "Book is not available" : "Rent"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
