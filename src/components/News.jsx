import React from "react";
import Weather from "./Weather";
import Date from "./Date";
import { FiSearch } from "react-icons/fi";
import { FaUserAstronaut } from "react-icons/fa";

const News = () => {
  return (
    <div className="flex flex-col w-[100%] h-[100%] justify-between gap-4">
      <header className="flex items-center w-[100%] h-[4rem] p-4 justify-between bg-[#111214] rounded-xl">
        <h1 className="text-2xl font-bold  ">My Blogs</h1>
        <div className="flex items-center gap-4 bg-[#101214]">
          <input
            type="text"
            placeholder="search news"
            className="bg-transparent outline-none"
          />
          <FiSearch className="cursor-pointer text-xl" />
        </div>
      </header>
      {/* left sidebar */}
      <div className="p-4 flex  gap-2 h-[calc(100%-5rem)]">
        <div className="bg-[#1b1e25f1]  h-[100%] flex flex-col items-center rounded-lg gap-4 justify-start p-4  navbar">
          <nav className=" flex w-[100%]  items-center justify-center flex-col gap-4 user">
            <FaUserAstronaut className="text-4xl" />
            <h1>UserName</h1>
          </nav>
          <div className="h-[calc(80%-2rem)]">categories</div>
        </div>
        {/* middle sidebar */}
        <div className="w-[48%] h-[100%] rounded-3xl flex flex-col gap-4">
          <div className="bg-[#1b1e25f1] h-[50%]">Headlines</div>
          <div className="bg-[#1b1e25f1] h-[50%]">New Grid</div>
        </div>
        {/* right sidebar */}
        <div className="h-[100%] bg-[#1b1e25f1] w-[23%]">My blogs</div>
        {/* Weather */}
        <div className="bg-[#1b1e25f1] w-[20%]">
          <Weather />
          <Date />
        </div>
      </div>
      {/* footer */}
      <footer className="flex items-center w-[100%] h-[4rem]  p-4 justify-between bg-[#1b1e25f1] rounded-t-2xl">
        footer
      </footer>
    </div>
  );
};

export default News;
