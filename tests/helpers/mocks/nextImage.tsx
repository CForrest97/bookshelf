import React, { FC } from "react";
import * as NextImage from "next/image";

type Props = {
  src: string;
};

const MockImageComponent: FC<Props> = ({ src }: Props) => (
  <>
    <img src={src} />
  </>
);

jest.spyOn(NextImage, "default").mockImplementation(MockImageComponent as any);
