import React, { Component, useState, usestate } from "react"
import "./Loginform.css"
import { Text } from "./Text"
import videoBg from '../images/videoBg.mp4'
import { Link } from "react-router-dom";

export const Loginform = () => {
    
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }
    
    const myStyle={
        backgroundImage: "url('https://a-static.besthdwallpaper.com/green-leaves-with-black-shadow-wallpaper-2048x1536-78534_26.jpg')",
        backgroundSize: 'cover'
      };
     

    return(
    <> 
        <div className="login">
            <div className="video-class">
                <video src={videoBg} autoPlay loop muted />
            </div>
            <div  className="auth">
                <h2 className="loginTitle">LOGIN</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label htmlFor="password">Password:</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="Password" id="password" name="password" />
                    <button href="/login-submit" type="submmit">Login</button>
                    <Link style={{textDecoration:"none", color:"Black"}}to="/register">
                        <button className="link">Register now</button>
                    </Link>
                </form> 
                <Text />
            </div>
        </div>
    </>
    )
}