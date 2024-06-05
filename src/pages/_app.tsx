import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { inter } from "../utils";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment, useEffect, useRef, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [minHeight, setMinHeight] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateMinHeight = () => {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
      const heroHeight = heroRef.current?.offsetHeight || 0;
      const footerHeight = document.querySelector("footer")?.offsetHeight || 0;
      const availableHeight =
        window.innerHeight - navbarHeight - heroHeight - footerHeight;
      setMinHeight(availableHeight);
    };

    // Recalculate minimum height when the window is resized
    // const handleResize = () => calculateMinHeight();
    window.addEventListener("resize", calculateMinHeight);

    // Initial calculation when the component mounts
    calculateMinHeight();

    // console.log({ minHeight });

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener("resize", calculateMinHeight);
    };
  }, []);

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Salafi Q&A</title>
      </Head>
      <Navbar id="navbar" />
      <Hero forwardedRef={heroRef} />
      <main
        className={`${inter.className} ${inter.variable}`}
        style={{ minHeight: `${minHeight}px` }}
      >
        <Component {...pageProps} />
      </main>
      <Footer />
    </Fragment>
  );
}
