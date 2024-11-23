import React from "react";
import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";

const RightSideBar = () => {
  return (
    <div className=" sticky top-0 w-[25%]">
      <div className="flex items-center p-2 bg-[#202327] rounded-full outline-none w-full mt-2">
        <CiSearch size="20px" />
        <input
          type="text"
          className="bg-transparent outline-none px-2"
          placeholder="Search"
        />
      </div>
      <div className="p-4 bg-transparent rounded-2xl my-4 border-[0.5px] border-opacity-25 border-[#DCDEDF]">
        <h1 className="font-bold  text-lg">Who to Follow</h1>
        <div className="flex items-center justify-between my-3">
          <div className="flex">
            <div>
              <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HLRp_BIoywVM8n9Jeiz1L0TMP_4ZgLucqg&s"
                size="40"
                round={true}
              />
            </div>
            <div className="ml-2">
              <h1 className="font-bold">Darshik</h1>
              <p className="text-sm text-[#525252] font-medium">
                @darshikbhuva
              </p>
            </div>
          </div>
          <div>
            <button className="px-4 py-1 bg-white text-[#202327] rounded-full font-bold">
              Follow
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between my-3">
          <div className="flex">
            <div>
              <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HLRp_BIoywVM8n9Jeiz1L0TMP_4ZgLucqg&s"
                size="40"
                round={true}
              />
            </div>
            <div className="ml-2">
              <h1 className="font-bold">Darshik</h1>
              <p className="text-sm text-[#525252] font-medium">
                @darshikbhuva
              </p>
            </div>
          </div>
          <div>
            <button className="px-4 py-1 bg-white text-[#202327] rounded-full font-bold">
              Follow
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between my-3">
          <div className="flex">
            <div>
              <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HLRp_BIoywVM8n9Jeiz1L0TMP_4ZgLucqg&s"
                size="40"
                round={true}
              />
            </div>
            <div className="ml-2">
              <h1 className="font-bold">Darshik</h1>
              <p className="text-sm text-[#525252] font-medium">
                @darshikbhuva
              </p>
            </div>
          </div>
          <div>
            <button className="px-4 py-1 bg-white text-[#202327] rounded-full font-bold">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
