import { useQuery } from "react-query";
import { getAuthor, getAuthorsBooks } from "../api";
import { Author } from "../entities/Author";

export const useAuthor = (id: string | null) =>
  useQuery<Author, Error>(`author${id}`, () => getAuthor(id as string), {
    enabled: Boolean(id),
  });

export const useAuthorsBookIds = (id: string | null) =>
  useQuery<string[], Error>(
    `getAuthorsBooks${id}`,
    () => getAuthorsBooks(id as string),
    {
      enabled: Boolean(id),
    }
  );
