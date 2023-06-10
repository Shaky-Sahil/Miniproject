import React from "react"
import "./Cardone.css"
import { Link } from "react-router-dom";

export const Cardtwo = () => {

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
            <div  className="card">
            <Link style={{textDecoration:"none", color:"Black"}}to="/">
            <button className="prvbtn"><p>&lt;</p></button>
            </Link>
                <h1 className="cardonetitle">Create<br></br>
                Core Memories
                </h1>
                <p className="cardonepara">
                Create your most splendid core memories along your trip.
                while we do all the hard work of "choosing where to go".
                </p>
                
                <Link style={{textDecoration:"none", color:"Black"}}to="/cardthree">
                    <button className="button1">Next</button>
                </Link>
                <Link style={{textDecoration:"none", color:"Black"}}to="/loginform">
                <button className="button2">Skip</button>
                </Link>
            </div>
            </div>
        </>
        
    )
}