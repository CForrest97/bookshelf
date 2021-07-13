import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { Grid } from "@chakra-ui/react";
import { useBook } from "../../modules/books/hooks";
import { parseRouterString } from "../../utils/parseRouterString";
import AuthorCard from "../../modules/authors/components/AuthorCard";

const BookDetailPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: book } = useBook(parseRouterString(id));

  return (
    <>
      <h1>{book?.name}</h1>
      <section>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {book?.authors.map((authorId) => (
            <AuthorCard id={authorId} key={authorId} />
          ))}
        </Grid>
      </section>
    </>
  );
};

export default BookDetailPage;
