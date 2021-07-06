import { AppProps } from "next/app";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "tailwindcss/tailwind.css";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: Infinity } },
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
  </QueryClientProvider>
);

export default MyApp;
