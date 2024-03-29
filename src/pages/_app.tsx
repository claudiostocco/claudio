import { ChakraProvider } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
