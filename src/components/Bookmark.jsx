import React from "react";
import { CgClose } from "react-icons/cg";

const Bookmark = ({
  show,
  bookmark,
  onClose,
  onSelectArticle,
  onDeleteBookmark,
}) => {
  if(!show){
    return null
  }

  return (
    <div className="absolute top-20 rounded-2xl  left-[26%] w-[50rem] gap-3 text-white bg-emerald-400 flex-col shadow-2xl flex items-start max-w-[580px]  justify-center p-4 z-50">
      <h1>Your Favourites</h1>
      <button
        onClick={onClose}
        className="absolute right-3 top-1 cursor-pointer font-extrabold bg-gray-800 rounded-full p-1 text-2xl"
      >
        <CgClose />
      </button>
      <div className="relative max-w-[45rem] w-[100%] h-auto shadow-2xl text-white flex gap-6 flex-col  items-start  bg-[#0F1113] p-6 rounded-2xl z-50">
        {/* {article && ( */}
       {bookmark.map((article,index)=>(
         <div className="flex gap-4 items-center border-b" key={index} onClick={()=>onSelectArticle(article)}>
         <img
           src={article.image}
           alt=""
           className="h-14 w-20 object-cover"
         />
         <h1 className="font-bold">
           {article.title}
         </h1>
         <button onClick={(e)=>{
          e.stopPropagation()
          onDeleteBookmark(article)
         }} className=" cursor-pointer font-extrabold bg-gray-800 rounded-full p-1 text-2xl">
           <CgClose />
         </button>
       </div>
       ))}
        {/* )} */}
      </div>
    </div>
  );
};

export default Bookmark;
