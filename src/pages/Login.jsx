import React from "react";
import Character from "../assets/Character-working-laptop-sitting-chair.png";
import Cactus from "../assets/cactus.svg";
function Login() {
  return (
    <>
      <div className="flex justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500 h-screen">
        <div className="flex justify-between w-[80%] h-[70%] rounded-3xl bg-slate-50">
          <div className="p-16">
            <div className="flex flex-col gap-4">
              <p>Email</p>
              <input
                className="bg-gray-300 rounded-md p-2 max-w-xs"
                type="email"
                name=""
                id=""
              />
              <p>Password</p>
              <input
                type="password"
                name=""
                id=""
                className="bg-gray-300 rounded-md p-2 max-w-xs"
              />
            </div>
          </div>
          <div className="bg-sky-300 w-[35%] rounded-3xl">
            <div className="mt-16">
              <div className="flex ml-20">
                <div className="relative z-50">
                  <img src={Character} className="z-100" alt="" />
                </div>
                <div className="relative -ml-32 top-24 z-10">
                  <img src={Cactus} className="z-10" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
