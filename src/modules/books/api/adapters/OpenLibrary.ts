import fetch from "isomorphic-unfetch";
import { GetBook } from "..";

export const getBookFromOpenLibrary: GetBook = async (id) => {
  const bookResponse = await fetch(
    `https://openlibrary.org/works/${id}.json`
  ).then((r) => r.json());

  return {
    id,
    name: bookResponse.title,
    authors: bookResponse.authors.map(({ author }: any) => author.key.slice(9)),
  };
};
