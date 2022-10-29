import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { AppProvider } from "../app-provider";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Adel Test</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}
