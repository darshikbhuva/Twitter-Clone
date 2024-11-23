import React, { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const signUpHandler = () => {
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
                  className="outline-blue-500 border border-gray-800 px-3 py-[6px] rounded-full my-1 font-semibold "
                />
                <input
                  type="text"
                  placeholder="Username"
                  className="outline-blue-500 border border-gray-800 px-3 py-[6px] rounded-full my-1 font-semibold "
                />
              </>
            )}

            <input
              type="text"
              placeholder="Email"
              className="outline-blue-500 border border-gray-800 px-3 py-[6px] rounded-full my-1 font-semibold "
            />
            <input
              type="text"
              placeholder="Password"
              className="outline-blue-500 border border-gray-800 px-3 py-[6px] rounded-full my-1 font-semibold "
            />
            <button className="bg-[#1D9BF0] hover:bg-[#46a4e2] border-none py-2 my-4 rounded-full text-lg text-white">
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
