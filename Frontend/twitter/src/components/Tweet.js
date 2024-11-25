import React from "react";
import Avatar from "react-avatar";
import { CiHeart } from "react-icons/ci";
import { VscComment } from "react-icons/vsc";
import { CiBookmark } from "react-icons/ci";
import { useSelector } from "react-redux";

const Tweet = ({ tweets }) => {
  const { user } = useSelector((store) => store.user);
  return (
    <div className="border-b-[0.5px] border-opacity-25 border-[#DCDEDF]">
      <div>
        <div className="flex px-3 pt-4">
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HLRp_BIoywVM8n9Jeiz1L0TMP_4ZgLucqg&s"
            size="40"
            round={true}
          />
          <div className="ml-2 w-full">
            <div className="flex items-center">
              <h1 className="font-bold">{tweets?.userDetails[0]?.name}</h1>
              <p className="text-gray-500 text-sm ml-1">
                @{tweets?.userDetails[0]?.username} . 1m
              </p>
            </div>
            <div>
              <p>{tweets.description}</p>
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <div className="p-2 hover:bg-blue-600 hover:bg-opacity-15 rounded-full cursor-pointer">
                  <CiHeart size="24px" color="#4B5453" />
                </div>
                <p className="ml-1 text-gray-600">{tweets?.like?.length}</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 hover:bg-blue-600 hover:bg-opacity-15 rounded-full cursor-pointer">
                  <VscComment size="24px" color="#4B5453" />
                </div>
                <p className="ml-1 text-gray-600">{tweets?.comment?.length}</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 hover:bg-blue-600 hover:bg-opacity-15 rounded-full cursor-pointer">
                  <CiBookmark size="24px" color="#4B5453" />
                </div>
                <p className="ml-1 text-gray-600">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
