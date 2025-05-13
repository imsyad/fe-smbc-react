import type { Book } from "../../types/book";

type BookDetailActionProps = {
  onClick: (book: Book) => void;
};

type BookDetailProps = Book & BookDetailActionProps;
const BookDetail = (props: BookDetailProps) => {
  const {
    name: title,
    author,
    // synopsis = "No synopsis available.",
    total,
    imageUrl: imgUrl,
    id,
    onClick,
  } = props;

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex-shrink-0 w-full md:w-1/3 h-64 overflow-hidden rounded-md shadow">
        <img
          src={
            imgUrl ||
            "https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061131_1280.png"
          }
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            <strong>Author:</strong> {author}
          </p>
          {/* <p className="text-gray-700">{synopsis}</p> */}
        </div>
        <div className="mt-6">
          <button
            disabled={total < 1}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 hover:disabled:bg-blue-600 disabled:opacity-50 hover:cursor-pointer hover:disabled:cursor-not-allowed"
            onClick={() =>
              onClick({ id, author, name: title, total, imageUrl: imgUrl })
            }
          >
            {total > 0 ? "Rent Book" : "Not Available"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
