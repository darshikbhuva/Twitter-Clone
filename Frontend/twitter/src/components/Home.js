import React from "react";
import LeftSideBar from "./LeftSideBar";
import Feed from "./Feed";
import RightSideBar from "./RightSideBar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex gap-10 w-[80%] m-auto bg-black text-[#DCDEDF]">
      <LeftSideBar />
      <Outlet />
      <RightSideBar />
    </div>
  );
};

export default Home;
