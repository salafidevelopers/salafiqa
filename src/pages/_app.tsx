import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Fragment } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Salafi Q&A</title>
      </Head>
      <Navbar />
      <Hero />
      <main className={`${inter.className} ${inter.variable}`}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </Fragment>
  );
}
