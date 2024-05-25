import { ChakraProvider } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { theme } from "@/styles/theme";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}
