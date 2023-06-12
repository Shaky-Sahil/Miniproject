import React from "react";
import { Parallax , ParallaxLayer } from "@react-spring/parallax";
import "./Homepage.css"
import trees1 from "../images/trees1.png"
import birds from "../images/birds.png"
import mountain4 from "../images/mountain4.png"

export const Homepage = () => {
    return(
        <div className="Homepage">
            <Parallax pages={4}>

                <ParallaxLayer offset={0} speed={2}>
                    <img className="trees1" src={trees1}></img>
                </ParallaxLayer>

                <ParallaxLayer offset={0} speed={1.5}>
                    <img className="birds" src={birds}></img>
                </ParallaxLayer>
            
                <ParallaxLayer offset={0} speed={0.5} factor={1}>
                    <h1 className="xplr-header">XPLR</h1>
                </ParallaxLayer>

                <ParallaxLayer offset={0} speed={0.5}>
                    <h2 className="welcome-head">WELCOME TO XPLR</h2>
                    <p className="welcome-para">Welcome to the future of travelling.
                    Make the most of your trip with the guidance of our app.</p>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={1.5}  >
                    <img className="mountain" src={mountain4}></img>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.5}>
                    <h2>About us</h2>
                </ParallaxLayer>

            </Parallax>
        </div>
    )
}