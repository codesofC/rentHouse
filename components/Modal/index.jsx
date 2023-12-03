

import { useState } from "react";
import { IoClose } from "react-icons/io5";

const Modal = ({ setShowLogin }) => {

    const [displayLogin, setDisplayLogin] = useState(true)

  return (
    <div className="w-full h-full fixed top-0 left-0 bg-[rgba(0,0,0,0.7)] px-12 flex items-center justify-center z-50">
      <div className="relative w-full sm:w-4/6 md:w-3/6 lg:w-2/6 xl:w-1/4 2xl:w-1/5 bg-white rounded-lg px-6 py-4">
        
        {/* Login section */}
        
        { displayLogin && <div
            className="flex flex-col gap-12"
        >
          <h1 className="text-3xl font-bold text-blue-600 border-b pb-4 border-gray-300">
            Login
          </h1>
          <form className="flex flex-col gap-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="border p-2 rounded-md outline-blue-600"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="border p-2 rounded-md outline-blue-600"
            />
            <div className="flex gap-2 items-center text-[14px]">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <div className="self-end text-blue-600 text-sm">
                <span className="underline cursor-pointer"> Forgot password? </span>
            </div>
            <div className="text-sm text-blue-800">
              <p className="flex gap-2">
                New user?
                <span className="underline cursor-pointer" onClick={() => setDisplayLogin(false)}>Sign up</span>
              </p>
            </div>
            <button
              type="submit"
              className="self-end px-3 py-2 bg-blue-600 text-white rounded-md"
            >
              Sign In
            </button>
          </form>
        </div>
}
          <div 
            className="absolute top-6 right-6 text-2xl cursor-pointer"
            onClick={() => setShowLogin(false)}
           >
            <IoClose />
          </div>

        {/* Sign up section */}
        {!displayLogin && <div className="flex flex-col gap-12">
          <h1 className="text-3xl font-bold text-blue-600 border-b pb-4 border-gray-300">
            Sign up
          </h1>
          <form className="flex flex-col gap-6">
            <input 
                type="text"
                placeholder="Enter your fullname"
                className="border p-2 rounded-md outline-blue-600"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="border p-2 rounded-md outline-blue-600"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="border p-2 rounded-md outline-blue-600"
            />
            <input
              type="password"
              placeholder="Confirm your password"
              className="border p-2 rounded-md outline-blue-600"
            />
            <div className="text-sm text-blue-800">
              <p className="flex gap-2">
                Already have an account?
                <span className="underline cursor-pointer" onClick={() => setDisplayLogin(true)}>Login</span>
              </p>
            </div>
            <button
              type="submit"
              className="self-end px-3 py-2 bg-blue-600 text-white rounded-md"
            >
              Sign Up
            </button>
          </form>
        </div>}
      </div>
    </div>
  );
};

export default Modal;
