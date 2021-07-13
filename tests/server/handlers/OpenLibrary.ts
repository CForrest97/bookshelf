import {
  getAuthor,
  getAuthorsBooks,
} from "@tests/server/repositories/AuthorRepository";
import { getBook } from "@tests/server/repositories/BookRepository";
import { rest } from "msw";
import Uri from "urijs";

const baseUrl = "https://openlibrary.org";

const getBookHandler = rest.get(
  Uri(baseUrl).segment("works").segment(":bookId").toString(),
  (req, res, ctx) => {
    const bookId = (req.params.bookId as string).slice(0, -5);

    return res(ctx.status(200), ctx.json(getBook(bookId)));
  }
);

const getAuthorHandler = rest.get(
  Uri(baseUrl).segment("authors").segment(":authorId").toString(),
  (req, res, ctx) => {
    const authorId = (req.params.authorId as string).slice(0, -5);

    return res(ctx.status(200), ctx.json(getAuthor(authorId)));
  }
);

const getAuthorsBooksHandler = rest.get(
  Uri(baseUrl)
    .segment("authors")
    .segment(":authorId")
    .segment("works.json")
    .toString(),
  (req, res, ctx) => {
    const authorId = req.params.authorId as string;

    return res(
      ctx.status(200),
      ctx.json({
        entries: getAuthorsBooks(authorId).map((bookId) => ({
          key: `/works/${bookId}`,
        })),
      })
    );
  }
);

export default [getBookHandler, getAuthorHandler, getAuthorsBooksHandler];
