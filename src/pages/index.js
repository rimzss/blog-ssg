import Image from "next/image";
import Recent from "@/components/Recent";
import { Inter } from "next/font/google";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ blogs, recentBlogs }) {
  return (
    <>
      <main className="flex flex-col items-center">
        <Recent blogs={recentBlogs} />
        <Articles blogs={blogs} />
      </main>
    </>
  );
}
export async function getStaticProps() {
  const res = await fetch(`https://dev.to/api/articles/?per_page=9`);
  const blogs = await res.json();
  const res1 = await fetch("https://dev.to/api/articles/latest?per_page=4");
  const recentBlogs = await res1.json();
  return {
    props: {
      blogs,
      recentBlogs,
    },
  };
}
