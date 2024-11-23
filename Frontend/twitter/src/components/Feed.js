import React from "react";
import Createpost from "./Createpost";
import Tweet from "./Tweet";

const Feed = () => {
  return (
    <div className="flex flex-col border-x-[0.5px] border-opacity-25 border-[#DCDEDF] w-[50%]">
      <div>
        <Createpost />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    </div>
  );
};

export default Feed;
