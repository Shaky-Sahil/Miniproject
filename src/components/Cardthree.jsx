import React from "react"
import "./Cardone.css"
import { Link } from "react-router-dom";

export const Cardthree = () => {

    const myStyle1={
        backgroundImage: "url('https://wallpaperaccess.com/full/5323823.jpg')",
        height: '100vh',
        width: '100%',
        backgroundSize: 'cover',
    };

    const myStyle={
        backgroundImage: "url('https://a-static.besthdwallpaper.com/green-leaves-with-black-shadow-wallpaper-2048x1536-78534_26.jpg')",
        backgroundSize: 'cover'
      };

    return(
        <> 
        <div style={myStyle1}></div>
        <div className="cardone">
            <div style={myStyle} className="card">
                <h1 className="cardonetitle"><br></br>
                </h1>
                <p className="cardonepara">
                Welcome to the future of travelling.
                Make the most of your trip with the guidance of our app.
                </p>
                <Link style={{textDecoration:"none", color:"Black"}}to="/">
                    <button className="button1">Next</button>
                    </Link>
                <button className="button2">Skip</button>
            </div>
            </div>
        </>
    )
}