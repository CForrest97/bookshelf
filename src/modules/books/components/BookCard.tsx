import React, { FC } from "react";
import Link from "next/link";
import { useBook } from "../hooks";

type Props = {
  id: string;
};

const BookCard: FC<Props> = ({ id }: Props) => {
  const { data: book, isLoading } = useBook(id);

  return (
    <article>
      <Link href={`/books/${id}`}>{isLoading ? "..." : book?.name}</Link>
    </article>
  );
};

export default BookCard;
