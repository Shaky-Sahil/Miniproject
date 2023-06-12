import React from "react";
import { Parallax , ParallaxLayer } from "@react-spring/parallax";
import "./Homepage.css"
import trees1 from "../images/trees1.png"
import birds from "../images/birds.png"
import forest from "../images/forest.png"
import grass from "../images/grass2.png"
import white from "../images/white.jpg"
import snow from "../images/snow.png"

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

                <ParallaxLayer offset={1} speed={1}>
                    <h2 className="xplr-header-2">ABOUT US</h2>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={1.2}>
                    <h2 className="about-para"> Our App Has A Wide Variety Of Features But Mostly
                    Helps Users Have A Safe And Scam Free Journey.</h2>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={3}>
                    <img className="grass" src={grass}></img>
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={0.5}>
                    <img className="white" src={white}></img>
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={1.3}>
                    <h2 className="xplr-header-3">FEATURES</h2>
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={1}>
                    <img className="snow" src={snow}></img>
                </ParallaxLayer>

                <ParallaxLayer offset={2} speed={1}>
                <p className="features-para">Our App Even if it comes with a huge amount of functionality,
                    Its goal is mainly to provide safety and provide information 
                    on safe places, places that are rid of all scams and frauds. </p>
                <p className="features-para2">jjsbjkgbsjkgbsjkbgjksbgkjsbgb
                    sjgbskjgbsjkbgjksdbdg
                    jksbgkjsgbsjkgbsjkbgj</p>

                    <p className="features-para3">jjsbjkgbsjkgbsjkbgjksbgkjsbgb
                    sjgbskjgbsjkbgjksdbdg
                    jksbgkjsgbsjkgbsjkbgj</p>

                    <p className="features-para4">jjsbjkgbsjkgbsjkbgjksbgkjsbgb
                    sjgbskjgbsjkbgjksdbdg
                    jksbgkjsgbsjkgbsjkbgj</p>
                    
                    <p className="features-para5">jjsbjkgbsjkgbsjkbgjksbgkjsbgb
                    sjgbskjgbsjkbgjksdbdg
                    jksbgkjsgbsjkgbsjkbgj</p>

                     <p className="features-para4">jjsbjkgbsjkgbsjkbgjksbgkjsbgb
                    sjgbskjgbsjkbgjksdbdg
                    jksbgkjsgbsjkgbsjkbgj</p>

                    <p className="features-para7">jjsbjkgbsjkgbsjkbgjksbgkjsbgb
                    sjgbskjgbsjkbgjksdbdg
                    jksbgkjsgbsjkgbsjkbgj</p>

                    <p className="features-para4">jjsbjkgbsjkgbsjkbgjksbgkjsbgb
                    sjgbskjgbsjkbgjksdbdg
                    jksbgkjsgbsjkgbsjkbgj</p>

                    <p className="features-para6">SCROLL DOWN TO LOGIN.</p>
                </ParallaxLayer>

                
                
                <ParallaxLayer offset={3} speed={2}>
                    <img className="trees1" src={trees1}></img>
                </ParallaxLayer>

                <ParallaxLayer offset={3} speed={1.5}>
                    <img className="birds" src={birds}></img>
                </ParallaxLayer>

                <ParallaxLayer offset={3} speed={1}>
                    <div className="Home-button">
                    <button>LOGIN</button> / <button>SIGN UP</button>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={3} speed={0.5} factor={1}>
                    <h1 className="xplr-header">XPLR</h1>
                </ParallaxLayer>

            </Parallax>
        </div>
    )
}