import React from 'react'
import { CgClose } from 'react-icons/cg'

const Bookmark = ({isOpen,onClose}) => {
  //  if(!isOpen){
  //   return null
  // }

 
  return (
    <div className="absolute top-20 rounded-2xl  left-[26%]  gap-3 text-white bg-emerald-400 flex-col shadow-2xl flex items-start max-w-[580px]  justify-center p-4 z-50">
      <h1>Your Favourites</h1>
      <button onClick={onClose} className='absolute right-3 top-1 cursor-pointer font-extrabold bg-gray-800 rounded-full p-1 text-2xl'><CgClose/></button>
      <div className="relative w-[100%] max-w-[45rem]  h-auto shadow-2xl text-white flex gap-6 flex-col  items-start  bg-[#0F1113] p-6 rounded-2xl z-50">
        {/* {article && ( */}
          <div className='flex gap-4 items-center border-b'>
          <img src=".public/react.jpg" alt="" className='h-14 w-20 object-cover' />
          <h1 className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, deserunt.</h1>
          <button className=' cursor-pointer font-extrabold bg-gray-800 rounded-full p-1 text-2xl'><CgClose/></button>  
        </div>
        {/* )} */}
      </div>
    </div>
  )
}

export default Bookmark