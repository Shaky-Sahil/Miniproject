import React from "react";
import { Howl } from "howler"
import background from "../images/background.mp3"
import "./Trial.css"
import play from "../images/play.png"
import pause from "../images/pause.png"

export const Trial = () => {

  const sound = new Howl({
    src: [background],
    html5: true,
    loop: true,
    autoplay: true,
  });


  return (
    <>
    <div className="song">
    <img onClick={() => sound.play()} className="play" src={play}></img>
    </div>
    <div className="song2">
      
    <img onClick={() => sound.pause()} className="pause" src={pause}></img>
    </div>
  </>
  )

}