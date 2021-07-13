import { Author } from "../entities/Author";
import {
  getAuthorFromOpenLibrary,
  getAuthorsBooksFromOpenLibrary,
} from "./adapters/OpenLibrary";

export type GetAuthor = (id: string) => Promise<Author>;
export const getAuthor: GetAuthor = getAuthorFromOpenLibrary;

export type GetAuthorsBooks = (id: string) => Promise<string[]>;
export const getAuthorsBooks: GetAuthorsBooks = getAuthorsBooksFromOpenLibrary;
