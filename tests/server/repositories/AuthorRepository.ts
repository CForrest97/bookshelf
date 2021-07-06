import { Author } from "@src/modules/authors/entities/Author";
import { getBooks } from "@tests/server/repositories/BookRepository";
import { inspect } from "util";
import authorsData from "../data/authors.json";

let authors = [...authorsData];
export type OpenlibraryAuthor = typeof authors[0];

export const createAuthor = (author: Author) => {
  const imageId = author.imageUrl?.slice(22, -7);

  authors.push({
    id: author.id,
    name: author.name,
    photos: imageId ? [imageId] : [],
  });
};

export const getAuthor = (id: string): OpenlibraryAuthor | null => {
  const author = authors.find((a) => a.id === id);

  return author ?? null;
};

export const getAuthorsBooks = (id: string): string[] => {
  const books = getBooks();
  inspect(books);

  return books
    .filter((book) =>
      book.authors.map(({ author }) => author.key).includes(`/authors/${id}`)
    )
    .map((book) => book.id);
};

export const resetAuthors = () => {
  authors = [...authorsData];
};
