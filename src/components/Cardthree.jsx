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
        <div style={myStyle1}>
        <div className="cardone">
            <div  className="card">
            <Link style={{textDecoration:"none", color:"Black"}}to="/cardtwo">
            <button className="prvbtn"><p>&lt;</p></button>
            </Link>
                <h1 className="cardonetitle">HaVe A<br></br>
                SaFe<br></br>
                Trip
                </h1>
                <p className="cardonepara">
                Make the most of this opportunity. We have over 30+ SAFE Locations that you can visit.
                </p>
                <Link style={{textDecoration:"none", color:"Black"}}to="/loginform">
                    <button className="button1">Finish</button>
                    </Link>
                    
            </div>
            </div>
            </div>
        </>
    )
}