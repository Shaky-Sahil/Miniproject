import React, { Component, useState, useForm } from "react"
import "./Loginform.css"
import { Text } from "./Text"
import a1 from "../images/logo2.png"
import videoBg from '../images/videoBg.mp4'
import { Link } from "react-router-dom";

export const Loginform = () => {
  const {register, handleSubmit} = useForm()
  const navigate = useNavigate()
  const [authenticated, setauthenticated] = useState(null)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem("authenticated");
    setauthenticated(loggedInUser)
},[])

  const handleLogin = (data) => {
    axios.post('http://localhost:6901/login',data).then((response)=>{
      console.log(response.data.user.isAdmin)
      localStorage.setItem("authenticated", true);
      localStorage.setItem("token",response.data.token)
      localStorage.setItem("isAdmin",response.data.user.isAdmin)
      
        
        navigate("/")
      
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
            {/* <div className="video-class">
                <video src={videoBg} autoPlay loop muted />
            </div> */}
             <div style={myStyle1}></div>
            <div  className="auth">
                {/* <img className="loginlogo" src={a1}></img> */}
                <h2 className="loginTitle">LOGIN</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input  type="email" placeholder="youremail@gmail.com" id="email" name="email" {...register('userEmail')} />
                    <label htmlFor="password">Password:</label>
                    <input  type="password" placeholder="Password" id="password" name="password" {...register('userPassword')} />
                    <button href="/login-submit" type="submmit" onClick={handleSubmit(handleLogin)}>Login</button>
                    
                        <button className="link" onClick={()=>{navigate('/register')}}>Sign UP</button>
                 
                </form> 
                <Text />
            </div>
        </div>
    </>
    )
}