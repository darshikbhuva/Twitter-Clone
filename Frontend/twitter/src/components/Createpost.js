import React, { useState } from "react";
import Avatar from "react-avatar";
import { IoMdPhotos } from "react-icons/io";
import { MdOutlineGifBox } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { LuCalendarClock } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { USER_API_END_POINT } from "../utils/constant";
import { getIsActive, getRefresh } from "../redux/tweetSlice";

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
  const [description, setDescription] = useState("");
  const { user } = useSelector((store) => store.user);
  const { isActive } = useSelector((store) => store.tweet);
  const dispatch = useDispatch();

  const submitHandler = async () => {
    try {
      const res = await axios.post(
        `${USER_API_END_POINT}/create`,
        { description, id: user?._id },
        {
          header: {
            "content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch(getRefresh());

      if (res.data.status) {
        toast.success(res.data.message);
      }
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err);
    }
    setDescription("");
  };

  const forYouHandler = () => {
    dispatch(getIsActive(true));
  };

  const followingHandler = () => {
    dispatch(getIsActive(false));
  };

  return (
    <div className="border-b-[0.5px] border-opacity-25 border-b-[#DCDEDF]">
      <div className="flex border-b-[0.5px] border-opacity-25 border-b-[#DCDEDF] sticky top-0 bg-white/0 backdrop-blur-sm ">
        <div
          onClick={forYouHandler}
          className={`px-28 py-4 cursor-pointer text-center w-[50%] ${
            isActive ? "border-b-2 border-blue-600" : ""
          } hover:bg-gray-600 hover:bg-opacity-15`}
        >
          <h1
            className={`${
              isActive ? "text-blue-600" : "text-gray-500"
            } font-semibold text-lg`}
          >
            For you
          </h1>
        </div>
        <div
          onClick={followingHandler}
          className={`px-28 py-4 cursor-pointer text-center w-[50%] ${
            !isActive ? "border-b-2 border-blue-600" : ""
          } hover:bg-gray-600 hover:bg-opacity-15`}
        >
          <h1
            className={`${
              !isActive ? "text-blue-600" : "text-gray-500"
            } font-semibold text-lg`}
          >
            Following
          </h1>
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
            className="bg-transparent w-full placeholder:text-gray-700 placeholder:text-2xl outline-none text-xl border-b-[0.5px] border-opacity-25 border-[#DCDEDF] resize-none h-[80px]"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="flex items-center py-3">
            {iconLogo.map((items, index) => {
              return (
                <div
                  key={index}
                  className="cursor-pointer p-[8px] hover:bg-gray-600 hover:bg-opacity-15 rounded-full"
                >
                  {items.logo}
                </div>
              );
            })}

            <button
              className="ml-auto bg-[#1D9BF0] hover:bg-[#46a4e2] text-white py-[5px] px-[15px] outline-none rounded-full font-semibold text-base text-center"
              onClick={submitHandler}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createpost;
