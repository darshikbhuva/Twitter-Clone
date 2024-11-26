import React from "react";
import Avatar from "react-avatar";
import { CiHeart } from "react-icons/ci";
import { VscComment } from "react-icons/vsc";
import { CiBookmark } from "react-icons/ci";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { USER_API_END_POINT } from "../utils/constant";
import { getRefresh } from "../redux/tweetSlice";
import { MdOutlineDelete } from "react-icons/md";
import { timeSince } from "../utils/constant";

const Tweet = ({ tweets }) => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const likeOrDislikeHandler = async (id) => {
    try {
      const res = await axios.put(
        `${USER_API_END_POINT}/like/${id}`,
        { id: user?._id },
        {
          header: {
            "content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch(getRefresh());

      toast.success(res.data.message);
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err);
    }
  };

  const tweetDeleteHandler = async (id) => {
    try {
      const res = await axios.delete(
        `${USER_API_END_POINT}/delete/${id}`,

        {
          header: {
            "content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch(getRefresh());

      toast.success(res.data.message);
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err);
    }
  };
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
                @{tweets?.userDetails[0]?.username} .{" "}
                {timeSince(tweets?.createdAt)}
              </p>
            </div>
            <div>
              <p>{tweets.description}</p>
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center">
                <div
                  className="p-2 hover:bg-blue-600 hover:bg-opacity-15 rounded-full cursor-pointer"
                  onClick={() => likeOrDislikeHandler(tweets?._id)}
                >
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
              {user?._id === tweets?.userId && (
                <div className="flex items-center">
                  <div
                    className="p-2 hover:bg-blue-600 hover:bg-opacity-15 rounded-full cursor-pointer"
                    onClick={() => tweetDeleteHandler(tweets?._id)}
                  >
                    <MdOutlineDelete size="24px" color="#4B5453" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
