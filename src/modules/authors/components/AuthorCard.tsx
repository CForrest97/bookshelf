import React, { FC } from "react";
import Link from "next/link";
import assert from "assert";
import { Skeleton, Heading, Box } from "@chakra-ui/react";
import { useAuthor } from "../hooks";

type Props = {
  id: string;
};

const AuthorCard: FC<Props> = ({ id }: Props) => {
  const { data: author, isLoading, isError } = useAuthor(id);

  if (isLoading) {
    return <>loading</>;
  }

  if (isError) {
    return <>Error</>;
  }

  assert(author);

  return (
    <Link href={`/authors/${id}`}>
      <article>
        <Box p={5} shadow="md" borderWidth="1px" h="100%">
          <Skeleton isLoaded={!isLoading} noOfLines={2}>
            <Heading fontSize="xl" noOfLines={2}>
              {author?.name ?? "loading"}
            </Heading>
          </Skeleton>
        </Box>
      </article>
    </Link>
  );
};

export default AuthorCard;
