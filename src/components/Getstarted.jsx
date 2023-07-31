import React, { useEffect, useState } from "react"
import "./Getstarted.css"
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo4.png"
import trees1 from "../images/trees1.png"


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
         <img className="absolute w-full h-screen flex object-cover" src={trees1}></img>
        <div className="absolute w-full h-screen flex items-center justify-center" >
            <img className="sm:w-[35%] md:w-[40%] lg:w-[15%] mb-[5%] absolute " src={logo}></img>
            <div className="">
                <button className="embark mt-[390%]" onClick={()=>navigate('/homepage')}>EMBARK</button>
            </div>
        </div>
        {/* <Trial /> */}
        </>
    )
}
}