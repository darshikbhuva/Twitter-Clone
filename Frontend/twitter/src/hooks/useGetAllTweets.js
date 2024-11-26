import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTweets, getRefresh } from "../redux/tweetSlice";

const useGetAllTweet = (id) => {
  const dispatch = useDispatch();
  const { refresh, isActive } = useSelector((store) => store.tweet);

  const fetchAllTweets = async () => {
    try {
      const res = await axios.get(
        `${USER_API_END_POINT}/getalltweets/${id}`,

        {
          withCredentials: true,
        }
      );
      // console.log(res?.data?.tweets);
      dispatch(getRefresh());
      dispatch(getAllTweets(res?.data?.tweets));
    } catch (err) {
      console.log(err);
    }
  };

  const followingTweetHandler = async () => {
    try {
      const res = await axios.get(
        `${USER_API_END_POINT}/getfollowingtweets/${id}`,
        {
          withCredentials: true,
        }
      );
      // console.log(res?.data?.tweets);
      dispatch(getRefresh());
      dispatch(getAllTweets(res?.data?.tweets));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (isActive) {
      fetchAllTweets();
    } else {
      followingTweetHandler();
    }
  }, [refresh]);
};

export default useGetAllTweet;
