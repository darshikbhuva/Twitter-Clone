import React from "react";
import Avatar from "react-avatar";
import { IoMdPhotos } from "react-icons/io";
import { MdOutlineGifBox } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { LuCalendarClock } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";

const iconLogo = [
  {
    logo: <IoMdPhotos size="20" color="#1D9BF0" />,
  },
  {
    logo: <MdOutlineGifBox size="20" color="#1D9BF0" />,
  },
  {
    logo: <AiOutlineBars size="20" color="#1D9BF0" />,
  },
  {
    logo: <BsEmojiSmile size="20" color="#1D9BF0" />,
  },
  {
    logo: <LuCalendarClock size="20" color="#1D9BF0" />,
  },
  {
    logo: <IoLocationOutline size="20" color="#1D9BF0" />,
  },
];

const Createpost = () => {
  return (
    <div className="border-b-[0.5px] border-opacity-25 border-[#DCDEDF]">
      <div className="flex items-center justify-center border-b-[0.5px] border-opacity-25 border-[#DCDEDF] sticky top-0 backdrop-blur-sm   bg-white/0">
        <div className="w-[50%] px-20 py-4 hover:bg-gray-600 hover:bg-opacity-15 cursor-pointer hover:ease-in-out duration-[0.05s] text-center ">
          <h1 className="font-semibold text-gray-500 text-lg">For you</h1>
        </div>
        <div className="w-[50%] px-20 py-4 hover:bg-gray-600 hover:bg-opacity-15 cursor-pointer hover:ease-in-out duration-[0.05s] text-center ">
          <h1 className="font-semibold text-gray-500 text-lg">Following</h1>
        </div>
      </div>
      <div className="flex items-start px-3 gap-2 pt-4">
        <div className="flex ">
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HLRp_BIoywVM8n9Jeiz1L0TMP_4ZgLucqg&s"
            size="40"
            round={true}
          />
        </div>
        <div className="flex flex-col flex-1 px-2">
          <textarea
            type="text"
            placeholder="What is happening?!"
            className="bg-transparent w-full placeholder:text-gray-700 placeholder:text-2xl outline-none text-xl border-b-[0.5px] border-opacity-25 border-[#DCDEDF] resize-none h-[80px]  "
          />
          <div className="flex items-center py-3">
            {iconLogo.map((items) => {
              return (
                <div className="cursor-pointer p-[8px] hover:bg-gray-600 hover:bg-opacity-15 rounded-full">
                  {items.logo}
                </div>
              );
            })}

            <button className="ml-auto  bg-[#1D9BF0] hover:bg-[#46a4e2] text-white py-[5px] px-[15px] outline-none rounded-full font-semibold text-base text-center">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createpost;
