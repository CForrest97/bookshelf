import React, { cloneElement, FC, ReactElement, SyntheticEvent } from "react";
import * as NextLink from "next/link";
import { useRouter } from "next/router";

type Props = {
  children: ReactElement | string;
  href: string;
};

const MockLinkComponent: FC<Props> = ({ children, href }: Props) => {
  const router = useRouter();

  const onClick = (e: SyntheticEvent): void => {
    e.preventDefault();
    router.push(href);
  };

  if (typeof children === "string") {
    return <span onClick={onClick}>{children}</span>;
  }

  return cloneElement(children, { href, onClick });
};

jest.spyOn(NextLink, "default").mockImplementation(MockLinkComponent as any);
