import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOtherUser } from "../redux/userSlice";

const useOtherUsersProfile = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchOtherUsersProfile = async () => {
      try {
        const res = await axios.get(`${USER_API_END_POINT}/otherUser/${id}`, {
          withCredentials: true,
        });
        console.log(res);
        dispatch(getOtherUser(res?.data?.otherUsers));
      } catch (err) {
        console.log(err);
      }
    };

    fetchOtherUsersProfile();
  }, []);
};

export default useOtherUsersProfile;
