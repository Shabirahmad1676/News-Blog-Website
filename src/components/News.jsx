import React from "react";
import { BiSearch } from "react-icons/bi";
import Weather from "./Weather";
import Date from "./Date";
import { LuBookMarked } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";

const News = () => {
  return (
    <div className="flex flex-col w-[100%]">
      <header className="bg-[#0E1012] text-white w-full p-4 flex justify-between">
        <h1>My Blogs</h1>
        <div className="flex items-center">
          <input type="text" placeholder="enter news" />
          <BiSearch />
        </div>
      </header>
      {/* content */}
      <div className="w-full flex bg-gray-700 h-[100%]">
        {/* left side */}
        <div className="bg-[#0E1012] w-[15%] h-[100% ] flex flex-col ">
          <div className="bg-gray-800 text-white p-4 flex flex-col items-center m-2 rounded-xl">
            <CgProfile className="rounded-full object-cover text-7xl h-[100%]" />
            <h1>User Name</h1>
          </div>
          <div className="bg-gray-800 text-white flex flex-col gap-[5px] p-3 m-2 rounded-xl">
            <h1 className="font-bold text-2xl mb-4">Categories</h1>
            <a href="#">Sports</a>
            <a href="#">AI</a>
            <a href="#">Science</a>
            <a href="#">Trends</a>
            <a href="#">Sports</a>
            <a href="#">World</a>
            <a href="#">General</a>
            <a href="#">health</a>
            <a href="#">Nations</a>
            <a href="#">Business</a>
            <a href="#">
              BookMark <LuBookMarked className="inline-block" />{" "}
            </a>
          </div>
        </div>
        {/* middle */}

        <div className="bg-[#0E1012] flex flex-col h-[100%] w-[35%]">
          <div className="relative  h-[50%]  p-2">
            <img
              src="./public/react.jpg"
              alt=""
              className="h-[100%] w-[100%] rounded-2xl"
            />
            <h1 className="absolute bottom-2 bg-gray-900 text-white font-bold text-xl opacity-70 rounded-2xl p-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At,
              ullam.
            </h1>
            <LuBookMarked className="bottom-4 absolute right-4 hover:text-orange-400 text-white font-bold text-xl " />
          </div>

          <div className=" h-[50%] flex flex-wrap items-center justify-center gap-4">
            <div className="relative  h-[46%] w-[30%]">
              <img
                src="./public/react.jpg"
                alt=""
                className="w-[100%] h-[100%] rounded-xl"
              />
              <h2 className="absolute bottom-0  text-white bg-gray-900 p-1 font-semibold opacity-70 ">
                Lorem ipsum dolor sit amet.
              </h2>
              <LuBookMarked className="bottom-2 absolute right-1 hover:text-orange-400 text-white font-semibold  " />
            </div>
            <div className="relative  h-[46%] w-[30%]">
              <img
                src="./public/react.jpg"
                alt=""
                className="w-[100%] h-[100%]"
              />
              <h4 className="absolute bottom-0 bg-black text-white font-semibold opacity-70 ">
                Lorem ipsum dolor sit amet.
              </h4>
              <LuBookMarked className="bottom-2 absolute right-0 hover:text-orange-400 text-white font-semibold  " />
            </div>
            <div className="relative  h-[46%] w-[30%]">
              <img
                src="./public/react.jpg"
                alt=""
                className="w-[100%] h-[100%]"
              />
              <h2 className="absolute bottom-0 bg-black text-white font-semibold opacity-70 ">
                Lorem ipsum dolor sit amet.
              </h2>
              <LuBookMarked className="bottom-2 absolute right-0 hover:text-orange-400 text-white font-semibold  " />
            </div>
            <div className="relative  h-[46%] w-[30%]">
              <img
                src="./public/react.jpg"
                alt=""
                className="w-[100%] h-[100%]"
              />
              <h2 className="absolute bottom-0 bg-black text-white font-semibold opacity-70 ">
                Lorem ipsum dolor sit amet.
              </h2>
              <LuBookMarked className="bottom-2 absolute right-0 hover:text-orange-400 text-white font-semibold  " />
            </div>
            <div className="relative  h-[46%] w-[30%]">
              <img
                src="./public/react.jpg"
                alt=""
                className="w-[100%] h-[100%]"
              />
              <h2 className="absolute bottom-0 bg-black text-white font-semibold opacity-70 ">
                Lorem ipsum dolor sit amet.
              </h2>
              <LuBookMarked className="bottom-2 absolute right-0 hover:text-orange-400 text-white font-semibold  " />
            </div>
            <div className="relative  h-[46%] w-[30%]">
              <img
                src="./public/react.jpg"
                alt=""
                className="w-[100%] h-[100%]"
              />
              <h2 className="absolute bottom-0 bg-black text-white font-semibold opacity-70 ">
                Lorem ipsum dolor sit amet.
              </h2>
              <LuBookMarked className="bottom-2 absolute right-0 hover:text-orange-400 text-white font-semibold  " />
            </div>
          </div>
        </div>

        {/* my blogs */}
        <div className=" w-[30%]">my blogs</div>
        <div>
          <Weather />
          <Date />
        </div>
      </div>
    </div>
  );
};

export default News;
