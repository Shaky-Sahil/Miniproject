import React, { Component, useState,useEffect } from "react"
import "./Loginform.css"
import { Text } from "./Text"
import a1 from "../images/logo2.png"
import { Link, useFormAction } from "react-router-dom";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import trees1 from "../images/trees1.png"
import { Trial } from './Trial'

export const Loginform = () => {
  const {register, handleSubmit} = useForm()
  const navigate = useNavigate()
  const [authenticated, setauthenticated] = useState(null)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem("authenticated");
    setauthenticated(loggedInUser)
},[])

  const handleLogin = (data) => {
    axios.post('https://dull-cyan-marlin-kit.cyclic.app/api/login',data).then((response)=>{
      console.log(response.data.user.isAdmin)
      localStorage.setItem("authenticated", true);
      localStorage.setItem("token",response.data.token)
      localStorage.setItem("isAdmin",response.data.user.isAdmin)
      toast.success("Logged in successfully")
      setTimeout(() => {
        navigate("/loclist")
      }, 1000);
        

      
    })
    .catch(()=>{
      toast.error('Invalid Credentials');
      console.log("something went wrong")
      navigate("/loginform")
    })
  }
    const myStyle={
        backgroundImage: "url('https://a-static.besthdwallpaper.com/green-leaves-with-black-shadow-wallpaper-2048x1536-78534_26.jpg')",
        backgroundSize: 'cover'
      };

      const myStyle1={
        backgroundImage: "url('https://wallpaperaccess.com/full/5323823.jpg')",
        height: '100vh',
        width: '100%',
        backgroundSize: 'cover',
    };
     

    return(
    <> 
        <div className="login">
        <img className="user-bg" src={trees1}></img>
            <div  className="auth">
                {/* <img className="loginlogo" src={a1}></img> */}
                <h2 className="loginTitle">LOGIN</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input  type="email" placeholder="youremail@gmail.com" id="email" name="userEmail" {...register('userEmail')} />
                    <label htmlFor="password">Password:</label>
                    <input  type="password" placeholder="Password" id="password" name="userPassword" {...register('userPassword')} />
                    <button className="button-universal" href="/login-submit" type="submmit" onClick={handleSubmit(handleLogin)}>Login</button>
                </form> 
                <button className="link" onClick={()=>{navigate('/register')}}>Sign UP</button>
                <Text />
            </div>
        </div>
        <Toaster/>
        {/* <Trial /> */}
    </>
    )
}