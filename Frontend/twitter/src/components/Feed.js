import React from "react";
import Createpost from "./Createpost";
import Tweet from "./Tweet";
import { useSelector } from "react-redux";

const Feed = () => {
  const { tweets } = useSelector((store) => store.tweet);
  return (
    <div className="flex flex-col border-x-[0.5px] border-opacity-25 border-[#DCDEDF] w-[50%]">
      <div className="">
        <Createpost />

        {tweets?.map((items) => {
          return <Tweet tweets={items} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
