import React from "react";
import logo from "../images/logo5.png"
import { useNavigate } from 'react-router'

export const Topnav = () =>{

    const navigate = useNavigate()

    return(
        <div className="absolute w-full flex justify-center">
        <img className="md:w-[5%] w-[15%]" src={logo} onClick={()=>{navigate('/loclist')}}></img>
        </div>
    )
}