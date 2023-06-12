import React, { useState,useForm } from "react"
import videoBg from '../images/videoBg.mp4'
import "./Register.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
export const Register = () => {
   
    
     
        const {register, handleSubmit} = useForm()
        const navigate = useNavigate()
        const handleSignup = (data) => {
            axios.post('http://localhost:6901/users',data).then((response)=>{
              console.log(response)
              navigate("/Login");
            }).catch(()=>{
                toast.error('Invalid Data');
                console.log("something went wrong")
                navigate("/Signup")

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
        <div className="register">
            {/* <div className="video-class">
                <video src={videoBg} autoPlay loop muted /></div> */}
                <div style={myStyle1}></div>
                <div  className="auth">
                    <h2 className="registerTitle">REGISTER</h2>
                    <form className="register-form" onSubmit={handleSubmit}>
                        <label>Full Name:</label>
                        <input  name="name" id="name" placeholder="Full Name"  {...register('userName')}/>
                        <label htmlFor="email">Email:</label>
                        <input type="email" placeholder="youremail@gmail.com" id="email" name="email" {...register('userEmail')} />
                        <label htmlFor="password">Password:</label>
                        <input type="password" placeholder="Password" id="password" name="password"  {...register('userPassword')}/>
                        <label htmlFor="confirm-password">Confirm Password:</label>
                        <input type="password" placeholder="Confirm Password" id="confirm-password" name="confirm-password" />
                       
                            <button className="signbtn" type="submit"  onClick={handleSubmit(handleSignup)}>SIGN UP</button>
                        
                    </form>
                    <Link style={{textDecoration:"none", color:"Black"}}to="/loginform">
                        <button className="link">Already have an account? log in now</button>
                    </Link>
                </div>
        </div>
        </>
    )
}