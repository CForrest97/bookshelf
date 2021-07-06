import { useQuery } from "react-query";
import { getBook } from "../api";
import { Book } from "../entities/Book";

export const useBook = (id: string | null) =>
  useQuery<Book, Error>(`book${id}`, () => getBook(id as string), {
    enabled: Boolean(id),
  });
