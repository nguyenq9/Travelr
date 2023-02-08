import React from "react";
import "./background.css"
import video from "./aerial.webm"
function HotelBackground() {
  return (
    <video className="background-video" autoPlay loop muted>
      <source src={video} type="video/webm"/>
    </video>
  );
}

export default HotelBackground;
