import React from "react";
import { Parallax , ParallaxLayer } from "@react-spring/parallax";
import "./Homepage.css"
import trees1 from "../images/trees1.png"
import birds from "../images/birds.png"
import mountain4 from "../images/mountain4.jpg"
import forest from "../images/forest.png"
import grass from "../images/grass2.png"

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
                    <p className="welcome-para">Welcome To The Future Of Travelling.
                    Travel The Uncharted While We Deal With All The Obstacles</p>
                </ParallaxLayer>

                
                
                <ParallaxLayer offset={1} speed={1.8}>
                    <img className="forest" src={forest}></img>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.8}>
                    <h2 className="xplr-header-2">ABOUT US</h2>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={1}>
                    <h2 className="about-para"> Our App Has A Wide Variety Of Features But Mostly
                    Helps Users Have A Safe And Scam Free Journey.</h2>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={3}>
                    <img className="grass" src={grass}></img>
                </ParallaxLayer>

            </Parallax>
        </div>
    )
}