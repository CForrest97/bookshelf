import { Book } from "../entities/Book";
import { getBookFromOpenLibrary } from "./adapters/OpenLibrary";

export type GetBook = (id: string) => Promise<Book>;

export const getBook: GetBook = getBookFromOpenLibrary;
