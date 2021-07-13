import React, { FC } from "react";
import Link from "next/link";
import { Box, Heading, Skeleton, Text } from "@chakra-ui/react";
import { useAuthor } from "@src/modules/authors/hooks";
import { useBook } from "../hooks";

type Props = {
  id: string;
};

const BookCard: FC<Props> = ({ id }: Props) => {
  const { data: book, isLoading } = useBook(id);
  const { data: author } = useAuthor(book?.authors[0] ?? null);

  return (
    <Link href={`/books/${id}`}>
      <article>
        <Box p={5} shadow="md" borderWidth="1px" h="100%">
          <Skeleton isLoaded={!isLoading} noOfLines={2}>
            <Heading fontSize="xl" noOfLines={2}>
              {book?.name ?? "loading"}
            </Heading>
          </Skeleton>
          <Skeleton isLoaded={!isLoading}>
            <Text mt={4}>{author?.name ?? "loading"}</Text>
          </Skeleton>
        </Box>
      </article>
    </Link>
  );
};

export default BookCard;
