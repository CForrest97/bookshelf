import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: Infinity } },
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  </ChakraProvider>
);

export default MyApp;
