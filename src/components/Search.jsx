import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";

const Search = ({}) => {
  // DATA DOWNLOADER FUNCTIONS
  let [blogs, setBlogs] = useState([]);
  const fetchData = async () => {
    try {
      const res = await fetch(`https://dev.to/api/articles`);
      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // SEARCH FUNCTIONS
  const [searchValue, setSearchValue] = useState("");
  const searching = (el) => {
    setSearchValue(el.target.value);
  };
  const search = () => {
    if (searchValue) {
      console.log("SEARCHING!!!");
      resultBlogs = [];
      blogs.map((blog) => {
        let title = blog.title.toLowerCase();
        let searchTitle = searchValue.toLowerCase();
        let description = blog.description.toLowerCase;
        if (title.includes(searchTitle)) {
          resultBlogs.push(blog);
          setResultBlogs(resultBlogs);
        } else {
          setResultBlogs(resultBlogs);
        }
      });
      setSearchValue("");
    }
  };

  // WHEN CLICK ENTER
  const handleEnter = (key) => {
    if (key.key === "Enter") {
      console.log("ENTER PRESSED!!!");
      search();
    }
  };

  return (
    <div className="md:flex hidden">
      <input
        placeholder="Seacrh"
        className="p-2 bg-hoyr100 text rounded-md"
        type="text"
        name=""
        id="searchInput"
        onChange={searching}
        onKeyDown={handleEnter}
        value={searchValue}
      />
      <Link href="/result/">
        <BiSearch onClick={search} className="-ml-10 scale-125 mt-3" />
      </Link>
    </div>
  );
};

export default Search;
