import React from "react"
import "./Getstarted.css"
import { Link } from "react-router-dom";
import logo from "../images/logo4.png"

export const Getstarted = () => {

    const myStyle1={
        backgroundImage: "url('https://wallpaperaccess.com/full/5323823.jpg')",
        height: '100vh',
        width: '100%',
        backgroundSize: 'cover',
    };

    return(
        <> 
        <div className="getstarted-css" style={myStyle1}>
        <img className="starting-image" src={logo}></img>
                <h1 className="getstarted-css">
                     
                </h1>
                <div className="get-button">
                <Link style={{textDecoration:"none", color:"Black"}}to="/homepage">
                        <button className="embark">EMBARK</button>
                </Link>
                </div>
            </div>
        </>
    )
}