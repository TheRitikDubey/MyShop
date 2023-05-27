import React, {useEffect, useState} from "react";
import Character from "../assets/Character-working-laptop-sitting-chair.png";
import Cactus from "../assets/cactus.svg";
import google from "../assets/Google.svg";
import facebook from "../assets/Facebook.svg";
import { auth, provider } from "../auth/firebase";
import { signInWithPopup } from "firebase/auth"
import Home from "./Home";
import { Link, Navigate, Route, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
function Login() {
  const [user,setUser] = useState('')
  const signInWithGoogle = () => {
    console.log("working");
    signInWithPopup(auth,provider).then((data) => {
      console.log(data);
      setUser(data.user.email);
      localStorage.setItem("email",data.user.email);
    }).catch((error) => {
      toast(error.message)
      console.log(error.message);
    })
  }
  useEffect(() => {
    console.log(user);
      setUser(localStorage.getItem("email"));
  });
  
  return (
    <>
    {
      user === '' || user === null?
      <div className="flex justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500 h-screen">
      <div className="flex justify-between w-[80%] h-[80%] rounded-3xl bg-slate-50">
        <div className="p-16 w-[100%]">
          <div className="flex flex-col gap-4">
            <h2 className="text-pink-400 text-md font-semibold">
              Welcome back !!!
            </h2>
            <h2 className="text-3xl font-semibold">Log In</h2>
            <p className="mt-4">Email</p>
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
            <div className="mt-2">
              <button
                type="submit"
                className="bg-pink-400 p-2 rounded-lg w-[18%]"
              >
                Login
              </button>
            </div>
            <Link className="border rounded-md bg-pink-500 w-[30%] p-2 text-xs" to="/signup">Create you account</Link>
            <p className="text-slate-300 ">or continue with</p>
            {/* Login with google section */}
            <div className="flex gap-8">
              <div>
                <img onClick={signInWithGoogle} src={google} className="hover:cursor-pointer hover:w-9" alt="" width={30} height={30} />
              </div>
              <div>
                <img src={facebook} alt="" width={30} height={30} className="hover:cursor-pointer hover:w-9" />
              </div>
            </div>
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
    </div> :<Home/>
    }
      
    </>
  );
}

export default Login;
