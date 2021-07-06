import fetch from "isomorphic-unfetch";
import { GetAuthor, GetAuthorsBooks } from "..";

export const getAuthorFromOpenLibrary: GetAuthor = async (id) => {
  const authorResponse = await fetch(
    `https://openlibrary.org/authors/${id}.json`
  ).then((r) => r.json());

  const imageId: string | undefined = authorResponse.photos?.[0];

  return {
    id,
    name: authorResponse.name,
    imageUrl: imageId && `https://covers.openlibrary.org/a/id/${imageId}-L.jpg`,
  };
};
export const getAuthorsBooksFromOpenLibrary: GetAuthorsBooks = async (id) => {
  const worksResponse = await fetch(
    `https://openlibrary.org/authors/${id}/works.json`
  ).then((r) => r.json());

  return worksResponse.entries.map((entry: any) => entry.key.slice(7));
};
