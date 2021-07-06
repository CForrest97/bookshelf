import React from "react";
import { screen } from "@testing-library/react";

import AuthorDetailPage from "@src/pages/authors/[id]";
import { Author } from "@src/modules/authors/entities/Author";
import { Book } from "@src/modules/books/entities/Book";
import { render } from "@tests/helpers/testUtils";
import { createBook } from "@tests/server/repositories/BookRepository";
import { createAuthor } from "@tests/server/repositories/AuthorRepository";
import { AuthorFactory, BookFactory } from "../../helpers/factories";

const renderAuthorDetailPage = () => {
  const author: Author = AuthorFactory.build();
  const book: Book = BookFactory.build({ authors: [author.id] });
  const mockPush = jest.fn();

  createBook(book);
  createAuthor(author);

  const utils = render(<AuthorDetailPage />, {
    router: { query: { id: author.id }, push: mockPush },
  });

  return { author, book, mockPush, ...utils };
};

test("should pass", async () => {
  const { book, author, mockPush } = renderAuthorDetailPage();

  expect(await screen.findByRole("heading", { name: author.name }));
  const bookCard = await screen.findByRole("article");

  screen.debug();
  expect(bookCard).toHaveTextContent(book.name);
  expect(mockPush).toHaveBeenCalledWith();
});
