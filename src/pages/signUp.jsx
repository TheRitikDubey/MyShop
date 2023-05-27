import React, {useEffect, useState} from "react";
import Character from "../assets/Character-working-laptop-sitting-chair.png";
import Cactus from "../assets/cactus.svg";
import google from "../assets/Google.svg";
import facebook from "../assets/Facebook.svg";
import { auth, provider } from "../auth/firebase";
import { signInWithPopup } from "firebase/auth"
import { Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Home";
function Login() {
  const [user,setUser] = useState('')
  
  const [email,setEmail] = useState('')
  
  const [password,setPassword] = useState('')
  
  const [cnfPassword,setCnfPassword] = useState('')
  const signInWithGoogle = () => {
    signInWithPopup(auth,provider).then((data) => {
      setUser(data.user.email);
      localStorage.setItem("email",data.user.email);
    })
  }
  useEffect(() => {
    console.log(user);
      setUser(localStorage.getItem("email"));
  },[]);
  const  HandleChange = (e,val)=>{
    if(val === 'email'){
      setEmail(e.target.value);
    }
    else if(val === 'password'){
      setPassword(e.target.value);
    }
    else{
      setCnfPassword(e.target.value);
    }
  }
  const handleSubmit = () => {
    if(password !== cnfPassword){
      toast("password and confirmation password did not match");
    }
    else{
      console.log('====================================');
    console.log(email,password,cnfPassword);
    console.log('====================================');
    }
    
  }
  
  return (
    <>
    <div className="">
        <h1>This is signup page</h1>
        <div className="p-16 w-[100%] flex justify-center align-middle">
          <div className="flex flex-col gap-4">
            <h2 className="text-pink-400 text-md font-semibold">
              Welcome back !!!
            </h2>
            <h2 className="text-3xl font-semibold">Sign Up</h2>
            <p className="mt-4">Email</p>
            <input
              onChange={(e)=>HandleChange(e,"email")}
              className="bg-gray-300 rounded-md p-2 max-w-xs"
              type="email"
              name=""
              id=""
            />
            <p>Password</p>
            <input
              onChange={(e) =>HandleChange(e,"password")}
              type="password"
              name=""
              id=""
              className="bg-gray-300 rounded-md p-2 max-w-xs"
            />
            <p className="mt-4">Confirm Password</p>
            <input
            onChange={(e)=>HandleChange(e,"Confirm Password")}
              className="bg-gray-300 rounded-md p-2 max-w-xs"
              type="password"
              name=""
              id=""
            />
            <div className="mt-2">
              <button
                onClick={handleSubmit}
                type="submit"
                className="bg-pink-400 p-2 rounded-lg w-[50%]"
              >
                Sign Up
              </button>
              <ToastContainer />
            </div>
            <p className="text-slate-300 mt-2">or continue with</p>
            {/* Login with google section */}
            <div className="flex gap-2">
              <Link to={"/"} className="bg-pink-400 p-2 rounded-lg w-[50%] text-center">Log in</Link>
            </div>
          </div>
        </div>
    </div> 
    </>
  );
}

export default Login;
