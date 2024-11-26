import React from "react";
import Avatar from "react-avatar";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import useGetProfile from "../hooks/useGetProfile";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { followingUpdate } from "../redux/userSlice";
import { USER_API_END_POINT } from "../utils/constant";
import axios from "axios";

const Profile = () => {
  const { profile, user } = useSelector((store) => store.user);
  const { id } = useParams();
  const dispatch = useDispatch();
  // custom hook
  useGetProfile(id);

  const followAndUnFollowHandler = async () => {
    if (user?.following?.includes(id)) {
      // unfollow

      try {
        const res = await axios.post(
          `${USER_API_END_POINT}/unFollow/${id}`,
          { id: user?._id },
          {
            withCredentials: true,
          }
        );
        dispatch(followingUpdate(id));
        toast.success(res.data.message);
      } catch (err) {
        toast.error(err.response.data.message);
        console.log(err);
      }
    } else {
      // follow

      try {
        const res = await axios.post(
          `${USER_API_END_POINT}/follow/${id}`,
          { id: user?._id },
          {
            withCredentials: true,
          }
        );
        dispatch(followingUpdate(id));
        toast.success(res.data.message);
      } catch (err) {
        toast.error(err.response.data.message);
        console.log(err);
      }
    }
  };

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
            <h1 className="font-bold text-lg">{profile?.name}</h1>
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
          {user?._id === profile?._id ? (
            <button className="px-4 py-1 hover:bg-gray-200 rounded-full border border-gray-400 hover:text-gray-400">
              Edit Profile
            </button>
          ) : (
            <button
              className="px-4 py-1  bg-white text-[#202327] rounded-full font-bold"
              onClick={followAndUnFollowHandler}
            >
              {user.following.includes(id) ? "Following" : "Follow"}
            </button>
          )}
        </div>
        <div className="m-4">
          <h1 className="font-bold text-xl">{profile?.name}</h1>
          <p>{`@${profile?.username}`}</p>
        </div>
        <div className="m-4 text-sm">
          <p>Welcome to the official Twitter / X page of Darshik Bhuva.</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
