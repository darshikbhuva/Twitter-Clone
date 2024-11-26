import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { BsSlashSquare } from "react-icons/bs";
import { FaUserGroup } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { CgMoreO } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { USER_API_END_POINT } from "../utils/constant";
import { MdLogout } from "react-icons/md";
import axios from "axios";
import toast from "react-hot-toast";
import { getMyProfile, getOtherUser, getUser } from "../redux/userSlice";

const iconList = [
  {
    icon: <IoSearch size={28} color="#DCDEDF" />,
    label: "Explore",
  },
  {
    icon: <IoMdNotifications size={28} color="#DCDEDF" />,
    label: "Notifications",
  },
  {
    icon: <IoMail size={28} color="#DCDEDF" />,
    label: "Messages",
  },
  {
    icon: <BsSlashSquare size={28} color="#DCDEDF" />,
    label: "Grok",
  },
  {
    icon: <FaUserGroup size={28} color="#DCDEDF" />,
    label: "Communities",
  },
  {
    icon: <BsTwitterX size={28} color="#DCDEDF" />,
    label: "Premium",
  },
  {
    icon: <FaRegUser size={28} color="#DCDEDF" />,
    label: "Profile",
  },
  {
    icon: <CgMoreO size={28} color="#DCDEDF" />,
    label: "More",
  },
];

const LeftSideBar = () => {
  const { user } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      dispatch(getUser(null));
      dispatch(getOtherUser(null));
      dispatch(getMyProfile(null));
      navigate("/login");
      toast.success(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col h-screen w-[20%] pl-0 pr-[16px] pt-1 sticky top-0 ">
      <div className="py-4 px-4 rounded-full hover:bg-gray-100 hover:bg-opacity-15 w-fit cursor-pointer">
        <BsTwitterX size={30} color="#DCDEDF" />
      </div>
      <div className="flex flex-col">
        <Link to="/" className="">
          <div className="flex  items-center text-white cursor-pointer rounded-full hover:bg-gray-100 hover:bg-opacity-15 w-fit py-[10px] px-4">
            <GoHomeFill size={28} color="#DCDEDF" />
            <p className="text-xl ml-5 text-[#DCDEDF]">Home</p>
          </div>
        </Link>
        {iconList.map((item) =>
          item.label === "Profile" ? (
            <Link to={`/profile/${user?._id}`} className="" key={item.label}>
              <div className="flex  items-center text-white cursor-pointer rounded-full hover:bg-gray-100 hover:bg-opacity-15 w-fit py-[10px] px-4">
                {item.icon}
                <p className="text-xl ml-5 text-[#DCDEDF]">{item.label}</p>
              </div>
            </Link>
          ) : (
            <div key={item.label}>
              <div className="flex  items-center text-white cursor-pointer rounded-full hover:bg-gray-100 hover:bg-opacity-15 w-fit py-[10px] px-4">
                {item.icon}
                <p className="text-xl ml-5 text-[#DCDEDF]">{item.label}</p>
              </div>
            </div>
          )
        )}
        <div onClick={logoutHandler} className="">
          <div className="flex  items-center text-white cursor-pointer rounded-full hover:bg-gray-100 hover:bg-opacity-15 w-fit py-[10px] px-4">
            <MdLogout size={28} color="#DCDEDF" />
            <p className="text-xl ml-5 text-[#DCDEDF]">Logout</p>
          </div>
        </div>
        <button className="w-full outline-none bg-[#1D9BF0] hover:bg-[#46a4e2] text-white mt-2 py-[13px] rounded-full font-bold text-lg ">
          Post
        </button>
      </div>
    </div>
  );
};

export default LeftSideBar;
