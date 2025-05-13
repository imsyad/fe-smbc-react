import { useEffect, useState } from "react";
import BookList from "../../components/organisms/BookList";
import ListTemplate from "./ListTemplate";
import type { Book } from "../../types/book";
import { getAllBooks, registerNewBook } from "../../services/book.service";
import BookDetail from "../../components/organisms/BookDetail";
import RentBook from "../../components/organisms/RentBook";
import type { CreateRent } from "../../types/rent";
import { createRentBook } from "../../services/rent.service";
import AddBook from "../../components/organisms/AddBook";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { AddBookFormInputs } from "../../schemas/add-book.schema";
import { ModalAtom } from "../../components/atoms/Modal";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { HttpStatusCode } from "axios";

const BookListPage = () => {
  useDocumentTitle("Catalogue");
  const [books, setBooks] = useState<Book[]>([]);
  useEffect(() => {
    const fetchBook = async () => {
      const result = await getAllBooks();
      setBooks(result);
    };

    fetchBook();
  }, []);

  const [selectedBook, setSelectedBook] = useState<Book | undefined>();
  const [bookToRent, setBookToRent] = useState<Book | undefined>();

  const onClickDetail = (book: Book) => {
    setSelectedBook(book);
  };

  const onClickRent = (book: Book) => {
    setBookToRent(book);
  };

  useEffect(() => {
    if (selectedBook) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedBook]);

  const closeModal = () => setSelectedBook(undefined);
  const closeModalRent = () => {
    setBookToRent(undefined);
    setSelectedBook(undefined);
  };

  const handleCreateRent = async (createRent: CreateRent) => {
    const result = await createRentBook(createRent);
    if (result.data.status === HttpStatusCode.Ok) {
      const updatedBooks = await getAllBooks();
      setBooks(updatedBooks);
    } else {
      console.error("Failed to rent a book");
    }
    closeModalRent();
  };

  const [openAddBook, setOpenAddBook] = useState<boolean>(false);
  const openAddBookModal = () => setOpenAddBook(true);
  const closeAddBookModal = () => setOpenAddBook(false);
  const handleAddBook = async (data: AddBookFormInputs) => {
    const response = await registerNewBook(data);
    if (response?.data.status === HttpStatusCode.Created) {
      const updatedBooks = await getAllBooks();
      setBooks(updatedBooks);
    } else {
      console.error("Failed to register a new book");
    }
    closeAddBookModal();
  };

  return (
    <ListTemplate>
      <div className="flex flex-row-reverse p-4">
        <button
          className="flex items-center gap-2 border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-50 transition"
          onClick={openAddBookModal}
        >
          <FontAwesomeIcon icon={faPlus} className="h-4 w-4" />
          <span>Book</span>
        </button>
      </div>
      {openAddBook && (
        <ModalAtom onClick={closeAddBookModal}>
          <AddBook
            onClickBook={(data: AddBookFormInputs) => handleAddBook(data)}
          />
        </ModalAtom>
      )}
      <BookList
        books={books}
        onClickDetail={onClickDetail}
        onClickRent={onClickRent}
      />
      {selectedBook && (
        <ModalAtom onClick={closeModal}>
          <BookDetail {...selectedBook} onClick={onClickRent} />
        </ModalAtom>
      )}
      {bookToRent && (
        <ModalAtom onClick={closeModalRent}>
          <RentBook book={bookToRent} onClick={handleCreateRent} />
        </ModalAtom>
      )}
    </ListTemplate>
  );
};

export default BookListPage;
