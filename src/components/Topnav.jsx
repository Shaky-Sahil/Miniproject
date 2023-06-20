import React from "react";
import logo from "../images/logo5.png"
import { useNavigate } from 'react-router'

export const Topnav = () =>{

    const navigate = useNavigate()

    return(
        <img className="topnav" src={logo} onClick={()=>{navigate('/mapview')}}></img>
    )
}