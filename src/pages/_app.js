import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [postNumber, setPostNumber] = useState(9);
  let [resultBlogs, setResultBlogs] = useState([]);
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
