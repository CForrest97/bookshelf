import { Book } from "@src/modules/books/entities/Book";
import booksData from "../data/books.json";

let books = [...booksData];
export type OpenlibraryBook = typeof books[0];

export const createBook = (book: Book) => {
  books.push({
    id: book.id,
    title: book.name,
    authors: book.authors.map((authorId) => ({
      author: {
        key: `/authors/${authorId}`,
      },
    })),
  });
};

export const getBook = (id: string): OpenlibraryBook | null => {
  const book = books.find((b) => b.id === id);

  return book ?? null;
};

export const getBooks = () => books;

export const resetBooks = () => {
  books = [...booksData];
};
