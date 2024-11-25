import React, { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/userSlice";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (isLogin) {
      ///login
      try {
        const res = await axios.post(
          `${USER_API_END_POINT}/login`,
          {
            email,
            password,
          },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );

        dispatch(getUser(res?.data?.user));

        if (res.data.success) {
          navigate("/");
          toast.success(res.data.message);
        }
      } catch (err) {
        toast.success(err.response.data.message);
        console.log(err);
      }
    } else {
      //signup

      try {
        const res = await axios.post(
          `${USER_API_END_POINT}/register`,
          {
            name,
            username,
            email,
            password,
          },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        setIsLogin(true);
        if (res.data.success) {
          setName("");
          setUsername("");
          setEmail("");
          setPassword("");
          toast.success(res.data.message);
        }
      } catch (err) {
        toast.success(err.response.data.message);
        console.log(err);
      }
    }
  };

  const signUpHandler = (e) => {
    setIsLogin(!isLogin);
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex items-center justify-evenly w-[80%]">
        <div>
          <FaXTwitter size="350px" color="#E7E9EA" />
        </div>
        <div>
          <div>
            <h1 className="font-bold text-6xl text-[#E7E9EA]">
              Happening now.
            </h1>
          </div>
          <h1 className="mt-4 mb-2 text-2xl font-bold text-[#E7E9EA]">
            {isLogin ? "Login" : "Signup"}
          </h1>

          <form className="flex flex-col w-[55%]">
            {!isLogin && (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="outline-blue-500 border border-gray-800 px-3 py-[6px] rounded-full my-1 font-semibold "
                />
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="outline-blue-500 border border-gray-800 px-3 py-[6px] rounded-full my-1 font-semibold "
                />
              </>
            )}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-blue-500 border border-gray-800 px-3 py-[6px] rounded-full my-1 font-semibold "
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="outline-blue-500 border border-gray-800 px-3 py-[6px] rounded-full my-1 font-semibold "
            />
            <button
              className="bg-[#1D9BF0] hover:bg-[#46a4e2] border-none py-2 my-4 rounded-full text-lg text-white"
              onClick={submitHandler}
            >
              {isLogin ? "Login" : "Create Account"}
            </button>
            <h1 className="text-[#E7E9EA]">
              {isLogin
                ? "Do not have an account? "
                : "Already have an account? "}
              <span
                className="text-[#1D9BF0] cursor-pointer hover:underline underline-offset-2"
                onClick={signUpHandler}
              >
                {isLogin ? "Signup" : "Login"}
              </span>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
