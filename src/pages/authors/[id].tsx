import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import { Grid } from "@chakra-ui/react";
import { useAuthor, useAuthorsBookIds } from "../../modules/authors/hooks";
import { parseRouterString } from "../../utils/parseRouterString";
import BookCard from "../../modules/books/components/BookCard";

const AuthorDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: author } = useAuthor(parseRouterString(id));
  const { data: bookIds } = useAuthorsBookIds(parseRouterString(id));

  return (
    <>
      <h1>{author?.name}</h1>
      {author?.imageUrl && (
        <Image
          width={100}
          height={100}
          src={author?.imageUrl}
          placeholder="blur"
          blurDataURL="https://en.wiktionary.org/wiki/blurry#/media/File:BlurryDavid.jpg"
        />
      )}
      <section>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {bookIds?.slice(0, 5).map((bookId) => (
            <BookCard id={bookId} key={bookId} />
          ))}
        </Grid>
      </section>
    </>
  );
};

export default AuthorDetailPage;
