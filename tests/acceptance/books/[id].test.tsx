import React from "react";
import { screen } from "@testing-library/react";

import BookDetailPage from "@src/pages/books/[id]";
import { Book } from "@src/modules/books/entities/Book";
import { Author } from "@src/modules/authors/entities/Author";
import { render } from "@tests/helpers/testUtils";
import { createBook } from "@tests/server/repositories/BookRepository";
import { createAuthor } from "@tests/server/repositories/AuthorRepository";
import { AuthorFactory, BookFactory } from "../../helpers/factories";

const renderBookDetailPage = () => {
  const author: Author = AuthorFactory.build();
  const book: Book = BookFactory.build({ authors: [author.id] });

  createAuthor(author);
  createBook(book);

  const utils = render(<BookDetailPage />, {
    router: { query: { id: book.id } },
  });

  return { author, book, ...utils };
};

test("should pass", async () => {
  const { book, author } = renderBookDetailPage();

  expect(await screen.findByRole("heading", { name: book.name }));
  expect(await screen.findByRole("article")).toHaveTextContent(author.name);
});
