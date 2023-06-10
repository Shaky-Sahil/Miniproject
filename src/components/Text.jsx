import React, { useState } from "react";
import Typewriter from "typewriter-effect"
import "./Text.css"
export const Text = () => {

    return (
        <div className="text-animation">
            <span>
            <Typewriter
            options={{loop : true,}}
            onInit={(typewriter) => {
                typewriter
                .typeString("Explore New Destinations!")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Visit New Places!")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Traverse Uncharted Lands!")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Journey to different locales1")
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
        />
        
        </span>
        </div>
    )
}