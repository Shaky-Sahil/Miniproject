import React, { useEffect, useState } from "react"
import "./Getstarted.css"
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo4.png"
import trees1 from "../images/trees1.png"
import { Trial } from './Trial'

export const Getstarted = () => {
    const navigate = useNavigate()
    const [loggedIn,setLoggedIn] = useState(null);
    const myStyle1={
        backgroundImage: "url('https://wallpaperaccess.com/full/5323823.jpg')",
        height: '100vh',
        width: '100%',
        backgroundSize: 'cover',
    };
    useEffect(()=>{
        setLoggedIn(localStorage.getItem('authenticated'))
    },[])

    if(loggedIn){
        navigate('/loclist')
    }

    else{

    return(
        <> 
         <img className="start-bg" src={trees1}></img>
        <div className="getstarted-css" >
        <img className="starting-image" src={logo}></img>
       
                <h1 className="getstarted-css">
                     
                </h1>
                <div className="get-button">
               
                        <button className="embark" onClick={()=>navigate('/homepage')}>EMBARK</button>
                </div>
            </div>
            {/* <Trial /> */}
        </>
    )
}
}