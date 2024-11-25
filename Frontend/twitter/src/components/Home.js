import React from "react";
import LeftSideBar from "./LeftSideBar";
import Feed from "./Feed";
import RightSideBar from "./RightSideBar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import useOtherUsersProfile from "../hooks/useOtherUsersProfile";
import useGetAllTweet from "../hooks/useGetAllTweets";

const Home = () => {
  const { user, otherUser } = useSelector((store) => store.user);

  //custom hook call
  useOtherUsersProfile(user?._id);
  useGetAllTweet(user?._id);

  return (
    <div className="flex gap-10 w-[80%] m-auto bg-black text-[#DCDEDF]">
      <LeftSideBar />
      <Outlet />
      <RightSideBar otherUsers={otherUser} />
    </div>
  );
};

export default Home;
