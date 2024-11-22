import React from "react";
import Avatar from "react-avatar";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="w-[50%] border-x-[0.5px] border-opacity-25 border-[#DCDEDF]">
      <div>
        <div className="flex items-center py-1   px-2">
          <Link
            to="/"
            className="p-3 rounded-full hover:cursor-pointer hover:bg-gray-500 hover:bg-opacity-15 "
          >
            <IoMdArrowBack />
          </Link>
          <div className="ml-4 ">
            <h1 className="font-bold text-lg">Darshik</h1>
            <p className="text-gray-500 text-sm">10 posts</p>
          </div>
        </div>
        <img
          src="https://pbs.twimg.com/profile_banners/10671602/1732272516/1080x360"
          alt="banner"
        />
        <div className="absolute top-48 ml-2 border-4 border-white rounded-full">
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HLRp_BIoywVM8n9Jeiz1L0TMP_4ZgLucqg&s"
            size="120"
            round={true}
          />
        </div>
        <div className="text-right m-4">
          <button className="px-4 py-1 hover:bg-gray-200 rounded-full border border-gray-400 hover:text-gray-400">
            Edit Profile
          </button>
        </div>
        <div className="m-4">
          <h1 className="font-bold text-xl">Darshik Bhuva</h1>
          <p>@darshikbhuva</p>
        </div>
        <div className="m-4 text-sm">
          <p>Welcome to the official Twitter / X page of Darshik Bhuva.</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
