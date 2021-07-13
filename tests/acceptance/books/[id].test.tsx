import React from "react";
import { screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";

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
  const mockPush = jest.fn();

  createAuthor(author);
  createBook(book);

  const utils = render(<BookDetailPage />, {
    router: { query: { id: book.id }, push: mockPush },
  });

  return { author, book, mockPush, ...utils };
};

test("should pass", async () => {
  const { book, author, mockPush } = renderBookDetailPage();

  expect(await screen.findByRole("heading", { name: book.name }));

  const authorCard = await screen.findByRole("article");
  UserEvent.click(authorCard);
  expect(authorCard).toHaveTextContent(author.name);
  expect(mockPush).toHaveBeenCalledWith(`/authors/${author.id}`);
});
