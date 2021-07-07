import { render, RenderOptions } from "@testing-library/react";
import React, { ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import { Router } from "next/router";
import { ChakraProvider } from "@chakra-ui/react";

const defaultRouter: Router = {
  push: jest.fn().mockResolvedValue(""),
  replace: jest.fn().mockResolvedValue(""),
  prefetch: jest.fn().mockResolvedValue(""),
  asPath: "/",
  route: "/",
  pathname: "",
  query: {},
} as any;

type Options = Omit<RenderOptions, "queries"> & { router: Partial<Router> };

const customRenderer = (ui: ReactElement, options?: Options) =>
  render(
    <ChakraProvider>
      <QueryClientProvider client={new QueryClient()}>
        <RouterContext.Provider
          value={{ ...defaultRouter, ...options?.router } as any}
        >
          {ui}
        </RouterContext.Provider>
      </QueryClientProvider>
    </ChakraProvider>,
    options
  );

export { customRenderer as render };
