import React from "react";
import { Parallax , ParallaxLayer } from "@react-spring/parallax";
import "./Homepage.css"
import trees1 from "../images/trees1.png"
import birds from "../images/birds.png"
import forest from "../images/forest.png"
import grass from "../images/grass2.png"
import white from "../images/white.jpg"
import snow from "../images/snow.png"
import safety from "../images/safety.png"
import loclogo from "../images/loclogo.png"
import hand from "../images/hand.png"
import game from "../images/game.png"
import Tourists from "../images/tourist.jpg"
import user from "../images/user.png"
import { Link } from "react-router-dom";

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
                    Travel The Uncharted While We Deal With All Your Obstacles</p>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={1.8}>
                    <img className="forest" src={forest}></img>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={1}>
                    <h2 className="xplr-header-2">ABOUT US</h2>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={1.2}>
                    <h2 className="about-para"> Our App XPLR Is A Complete Tour Guide To
                    How One Should Go About Travelling Around Trivandrum Without Getting Scammed.
                    <p>Every GenZ And Millennial In Trivandrum Arise With The Same Questions On The Weekends, 
                        Those Are "Where Should We Go This Weekend", "Which Are The Current Prime Hotspots In Trivandrum" etc. 
                        Even Tourists Visiting Trivandrum Have Similar Questions Regarding On Which Hotels Are Cheapest And The Most Reliable.</p>
                    <p>All These Questions Lead Us Towards Creating Our App XPLR. An App That Not Only Would Help Locals Of Trivandrum
                        Xplore The Uncharted Parts Of The City But Also Guide Tourists Towards Having A Risk-Free Experience. </p></h2>
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
                    <p className="features-para">
                    <img className="safety" src={safety}></img>
                    <br></br>Our Core Feature Is That Our App Contains Only the Most Trusted Locations In Trivandrum.
                    Safety Is Our Most Prominent Feature. Unlike Other Apps, There Aren't Any Sponored Locations. All Locations
                    Are Visited And Verified By Our Team. </p>
                    <p className="features-para2"><img className="safety" src={hand}></img> 
                    <br></br>Unlike Other Tour Guide Books Or Map Based Apps, All Our Locations Are Hand-Picked By Our Developers.
                    Each Of Which Were Picked On The Bases Of Its Security, Quality And Reachability.</p>

                    <p className="features-para3"><img className="safety" src={loclogo}></img>
                    <br></br>Since Most Map Based Apps Tend To Convey Every Possible Location, Restaurants, Hotels, Parks etc. Our App Instead 
                    Likes To Dial Down Things And Go For A More Simpler Approach. We Provide You With Less Than 100 Locations To Visit, Which May 
                    Seem Less But Our Developers Ensures You That These 100 Locations Would Give You A Spectacular Experience.</p>

                    <p className="features-para4"><img className="safety" src={game}></img>
                    <br></br>Since Our App Seeks Toward Creating An Exciting Experience For Tourists And Reduce Any Or All Uncertainties Caused By The Locals, We Decided To Gamify Our App
                    So As To Allow The User To Go On Self Guided Trips. Each User Upon Logging In Gets 100 Locations To Visit, On Visiting Each Location The User Would Get 100 Points.
                    On Acquiring 10,000 Points, The User Would Complete The Game And Their Reward Would Be That They have Seen The Most Authentic Parts Of Trivandrum</p>
                    
                    <p className="features-para5"><img className="tourist" src={Tourists}></img>
                    <br></br>We Provide Tourists With An Option To Filter Out Locations That Are Not Tourist Friendly. This Feature Was Implemented For Those Tourists Who Don't Want To Visit Locations That Are More Oriented Towards Locals.</p>

                     <p className="features-para4"><img className="safety" src={user}></img>
                     <br></br>We Have Made Our App Extremely User-Friendly So As To Appeal To A Wider Age Group. XPLR Is An App Created For People Of Every Age Group To Get Into Xploration, Discovering All The Hidden Gems Of Trivandrum.
                     </p>

                    <p className="features-para6">SCROLL DOWN TO LOGIN.</p>
                </ParallaxLayer>

                
                
                <ParallaxLayer offset={3} speed={2}>
                    <img className="trees1" src={trees1}></img>
                </ParallaxLayer>

                <ParallaxLayer offset={3} speed={1.5}>
                    <img className="birds" src={birds}></img>
                </ParallaxLayer>

                <ParallaxLayer offset={3} speed={1}>
                    
                </ParallaxLayer>

                <ParallaxLayer offset={3} speed={0.5} factor={1}>
                    <h1 className="xplr-header">XPLR</h1>
                    <div>
                        <Link style={{textDecoration:"none", color:"Black"}}to="/loginform">
                            <button className="button-universal1">LOGIN</button> /
                        </Link> 
                        <Link style={{textDecoration:"none", color:"Black"}}to="/register">
                              <button className="button-universal1">SIGN UP</button><br></br><br></br>
                        </Link>
                    </div>
                </ParallaxLayer>

            </Parallax>
        </div>
    )
}