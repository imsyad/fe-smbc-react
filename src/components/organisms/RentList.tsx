import type { RentWithBook } from "../../services/rent.service";

const RentBookList = ({ rentBooks }: { rentBooks: RentWithBook[] }) => {
  const localDateFormat: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };

  const localArgument: Intl.LocalesArgument = "en-EN";
  const today = new Date();

  if (!rentBooks || !rentBooks.length) {
    return (
      <div className="flex w-full">
        <p className="text-center place-self-center w-full">
          "Sorry, you haven't rented a book yet!"
        </p>
      </div>
    );
  }
  return (
    <div className="w-full grid grid-cols-1 gap-x-6 gap-y-10">
      <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
        {rentBooks
          .sort((a, b) => {
            const dateA = new Date(a.endDate).getTime();
            const dateB = new Date(b.endDate).getTime();

            return dateB - dateA;
          })
          .map((rb) => (
            <li className="flex justify-between gap-x-6 py-5 px-4" key={rb.id}>
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="size-12 flex-none rounded-full bg-gray-50"
                  src={
                    rb.book?.imageUrl ||
                    "https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061131_1280.png"
                  }
                  alt={`book-${rb.book?.name}-image`}
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm/6 font-semibold text-gray-900 dark:text-gray-200">
                    {rb.book?.name}
                  </p>
                  <p className="mt-1 truncate text-xs/5 text-gray-500 dark:text-gray-400">
                    {rb.book?.author}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end gap-2">
                <p className="text-sm/6 text-gray-900">
                  {today > rb.endDate ? (
                    <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-yellow-600/20 ring-inset">
                      Returned
                    </span>
                  ) : (
                    <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">
                      Rented
                    </span>
                  )}
                </p>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      Start:
                    </span>{" "}
                    <time dateTime={new Date(rb.startDate).toISOString()}>
                      {new Date(rb.startDate).toLocaleDateString(
                        localArgument,
                        localDateFormat
                      )}
                    </time>
                  </p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      End:
                    </span>{" "}
                    <time dateTime={new Date(rb.endDate).toISOString()}>
                      {new Date(rb.endDate).toLocaleDateString(
                        localArgument,
                        localDateFormat
                      )}
                    </time>
                  </p>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RentBookList;
