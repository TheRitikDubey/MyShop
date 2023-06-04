import React, {useEffect, useState} from "react";
import Character from "../assets/Character-working-laptop-sitting-chair.png";
import Cactus from "../assets/cactus.svg";
import google from "../assets/Google.svg";
import facebook from "../assets/Facebook.svg";
import { auth, provider } from "../auth/firebase";
import { signInWithPopup } from "firebase/auth"
import Home from "./Home";
import { Link, Navigate, Route, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from "axios";
function Login({setEmailId}) {
  const BaseUrl = "http://localhost:9529";
  const [user,setUser] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const signInWithGoogle = () => {
    console.log("working");
    signInWithPopup(auth,provider).then((data) => {
      console.log(data);
      setUser(data.user.email);
      localStorage.setItem("email",data.user.email);
      setEmailId(true);
    }).catch((error) => {
      toast(error.message)
      console.log(error.message);
    })
  }
  const HandleLogin = async() => {
    try{
      const payload = {
        email: email,
        password: password
      }
        const response = await axios.post(BaseUrl+"/api/v1/loginUser",payload);
        toast.success(response.data.message);
        console.log(response.data);
        setUser(response.data.user.email);
        localStorage.setItem("email",response.data.user.email);
        setEmailId(true);
    }
    catch(err){
      toast(err.message);
    }
  }
  useEffect(() => {
      setUser(localStorage.getItem("email"));
  },[user]);
  
  return (
    <>
    {
      user === '' || user === null ?
      <div className="flex justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500 h-screen">
      <div className="flex justify-between w-[80%] h-[85%] rounded-3xl bg-slate-50">
        <div className="p-8 w-[100%]">
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
              onChange={(e)=> setEmail(e.target.value)}
            />
            <p>Password</p>
            <input
              type="password"
              name=""
              id=""
              className="bg-gray-300 rounded-md p-2 max-w-xs"
              onChange={(e)=> setPassword(e.target.value)}
            />
            <div className="mt-2">
              <button
                type="submit"
                className="bg-pink-400 p-2 rounded-lg"
                onClick={HandleLogin}
              >
                Login
              </button>
            </div>
            <div className="w-[40%">
            <Link className="border rounded-md bg-pink-500 p-2 text-xs" to="/signup">Create you account</Link>
            </div>
            
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
        <div className="bg-sky-300 w-[45%] rounded-3xl hidden md:block lg:block">
          <div className="mt-16">
            <div className="flex gap-1">
              <div className="relative top-24 z-50 -ml-16">
                <img src={Character}  className="z-100 max-w-[130%]" alt="" />
              </div>
              <div className="relative top-44 z-10">
                <img src={Cactus} className="z-10 -ml-[30px] max-w-[130%]" alt="" />
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
