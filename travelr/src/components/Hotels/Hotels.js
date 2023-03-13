import React from "react";
import HotelSearch from "../HotelSearch/HotelSearch.js";
import HotelBackground from "./HotelBackground.js";
import "../HotelSearch//HotelSearch.css";
import "./background.css";
import "./Hotels.css";

class Hotels extends React.Component {
  render() {
    return (
      <div className="Hotels">
        <div className="container">
          <HotelBackground />
          <HotelSearch />

        </div>
      </div>
    );
  }
}

export default Hotels;
