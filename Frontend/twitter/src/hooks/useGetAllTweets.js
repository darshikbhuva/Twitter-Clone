import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllTweets } from "../redux/tweetSlice";

const useGetAllTweet = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllTweets = async () => {
      try {
        const res = await axios.get(
          `${USER_API_END_POINT}/getalltweets/${id}`,
          {
            withCredentials: true,
          }
        );
        // console.log(res?.data?.tweets);
        dispatch(getAllTweets(res?.data?.tweets));
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllTweets();
  }, []);
};

export default useGetAllTweet;
