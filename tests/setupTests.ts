import "@testing-library/jest-dom";
import { config } from "dotenv";
import { resetAuthors } from "@tests/server/repositories/AuthorRepository";
import { resetBooks } from "@tests/server/repositories/BookRepository";
import "./helpers/mocks/nextImage";
import "./helpers/mocks/nextLink";

import { server } from "./server";

config();

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  resetAuthors();
  resetBooks();
});
afterAll(() => server.close());
