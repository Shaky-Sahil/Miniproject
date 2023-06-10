import React from "react"
import videoBg from '../images/a3.jpg'
import { Link } from "react-router-dom";

export const Cardone = () => {

    const myStyle={
        backgroundImage: "url('https://i.pinimg.com/originals/c1/0c/c4/c10cc4372487c4a1e4b0c1476a3c5ea1.png')",
        backgroundSize: 'cover'
      };

    return(
        <> 
        <div className="background-image">
            <img src={videoBg} autoPlay loop muted />
        </div>
            <div style={myStyle} className="card">
                <h1 className="cardonetitle">Welcome<br></br>
                To
                --------
                </h1>
                <p className="cardonepara">
                Welcome to the future of travelling.
                Make the most of your trip with the guidance of our app.
                </p>
                {/* <button className="button1">
                <Link style={{textDecoration:"none", color:"Black"}}to="/cardtwo">Next</Link>
                </button>
                <Link className="button2">Skip</Link> */}
            </div>
        </>
    )
}