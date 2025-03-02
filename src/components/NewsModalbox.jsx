import React from "react";
import { CgClose } from "react-icons/cg";

const NewsModalbox = ({modal,article,onClose}) => {
  if(!modal){
    return null
  }
  return (
    <div className="absolute top-20 rounded-2xl  left-[26%] h-[480px]  shadow-2xl flex items-center justify-center p-4 z-50">
      <div className="relative w-[60%] max-w-[45rem]  h-auto shadow-2xl text-white flex gap-2 flex-col  items-start  bg-[#0F1113] p-6 rounded-2xl z-50">
       <span  onClick={onClose}><CgClose className="cursor-pointer absolute top-0 right-5 font-bold text-2xl text-red-500"/></span>
        {article && (
          <>          <img src={article.image} className="h-40  w-full object-cover" alt={article.title} />
          <h2 className="text-2xl font-bold font-sans">{article.title}.</h2>
          <p><span className="font-bold">Sourse</span> : {article.source.name} </p>
          <p><span className="font-bold">Date</span> : {article.publishedAt}</p>
          <p>{article.content.slice(0,70)}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="cursor-pointer bg-emerald-400 py-1 px-4 text-center rounded-2xl font-bold  mt-2">Read More</a>
          </>

        )}
      </div>
    </div>
  );
};

export default NewsModalbox;
