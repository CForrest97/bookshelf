import React, { FC } from "react";
import Link from "next/link";
import assert from "assert";
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
    <article>
      <Link href={`/authors/${id}`}>{author.name}</Link>
    </article>
  );
};

export default AuthorCard;
