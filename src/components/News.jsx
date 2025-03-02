import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import Weather from "./Weather";
import Date from "./Date";
import { LuBookMarked } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import axios from "axios";
import Website from "../assets/website.png";
import NewsModalbox from "./NewsModalbox";
import Bookmark from "./Bookmark";

const categories = [
  "general",
  "world",
  "business",
  "technology",
  "entertainment",
  "sports",
  "science",
  "health",
  "nation",
];

const News = () => {
  const [headlines, setHeadlines] = useState(null);
  const [news, setNews] = useState([]);
  const [selectCategory, setSelectCategory] = useState("general");
  const [searchInput, setSearchInput] = useState("")
  const [query, setQuery] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [showArticle, setShowArticle] = useState(null)
  const [showBookmarkModal, setShowBookmarkModal] = useState(false)
  const [bookmark, setBookmark] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      let url = `https://gnews.io/api/v4/top-headlines?category=${selectCategory}&lang=en&apikey=9c8dfc70e07bab21ec9a4273374b19eb`;

      if(query){
        url = `https://gnews.io/api/v4/search?q=${query}&apikey=9c8dfc70e07bab21ec9a4273374b19eb`;
      }

      const response = await axios.get(url);
      const fetchDataNews = response.data.articles;
      setHeadlines(fetchDataNews[8]);
      setNews(fetchDataNews.slice(1, 7));
    };

    fetchNews();
  }, [selectCategory,query]);

  const handleCategory = (e, category) => {
    e.preventDefault();
    setSelectCategory(category);
  };

  const handleSearch = (e)=>{
    e.preventDefault();
    setQuery(searchInput)
    setSearchInput("")
  }

  const handleArticleClick = (article)=>{
    setShowArticle(article)
    setShowModal(true)
  }
  
 const handleBookmark = (article)=>{
  setBookmark((prevBookmarks)=>{
    const updateBookmark = prevBookmarks.find((bookmark)=> bookmark.title === article.title) ? prevBookmarks.filter((bookmark)=> bookmark.title !== article.title) : [...prevBookmarks,article]
    return updateBookmark
  })
 }

  return (
    <div className="flex flex-col w-[100%]  bg-[#0E1012]">
      <header className="bg-[#1b1e2c] text-white w-full p-4 flex justify-between rounded-b-2xl">
        <h1>My Blogs</h1>
        <form onSubmit={handleSearch} className="flex items-center gap-2">
          <input type="text" className="outline-none border-b" placeholder="enter news" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}/>
          <button type="submit" className="cursor-pointer"><BiSearch/></button>
        </form>
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
            {categories.map((category) => (
              <a
                key={category}
                href="#"
                className="pb-1"
                onClick={(e) => handleCategory(e, category)}
              >
                {category}
              </a>
            ))}
            <a href="#">
              BookMark <LuBookMarked className="inline-block" />{" "}
            </a>
          </div>
        </div>
        {/* middle */}

        <div className="bg-[#0E1012] flex flex-col h-[100%] w-[44%] gap-2 p-2">
          <div className="relative h-[50%] ">
            {headlines && (
              <div onClick={()=>handleArticleClick(headlines)}>
                <img
                  src={headlines.image || Website}
                  alt={headlines.alt}
                  className="h-[100%] w-[100%] rounded-2xl"
                />

                <h1 className="absolute bottom-0 text-center text-white bg-gray-800 opacity-80 font-bold text-2xl rounded-2xl p-1">
                  {headlines.title}
                </h1>
                <LuBookMarked onClick={(e)=>{ e.stopPropagation()
                  handleBookmark(headlines)
                }} className={`top-2 absolute right-3 hover:text-orange-400 ${bookmark.some((bookmark)=> bookmark.title === article.title) ? 'block' : 'hidden'} text-black font-bold text-2xl`} />
              </div>
            )}
          </div>

          <div className="grid grid-cols-3 gap-2 w-full">
            {news.map((item, index) => (
              <div onClick={()=>handleArticleClick(item)}
                key={index}
                className="bg-gray-800 relative rounded-xl overflow-hidden shadow-md h-[125px]"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-[100%] object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 p-1">
                  <h2 className="text-white text-[14px] font-semibold truncate px-1">
                    {item.title}
                  </h2>
                </div>
                <LuBookMarked className="absolute top-1 right-1 hover:text-orange-400 text-black text-xl font-semibold cursor-pointer" />
              </div>
            ))}
          </div>
        </div>
        {/* news modal box */}
        <NewsModalbox modal={showModal} article={showArticle} onClose={()=>setShowModal(false)} />
        {/* <Bookmark modal={showModal} article={showArticle}  onClose={()=>setShowModal(false)} /> */}

        {/* my blogs */}
        <div className="w-[30%] m-2 p-2">my blogs</div>
        <div>
          <Weather />
          <Date />
        </div>
      </div>
    </div>
  );
};

export default News;
