import React from "react";
import './Landing.css'
import { Link } from 'react-router-dom';
import HotelBackground from '../Hotels/HotelBackground'

const linkStyle = {
    textDecoration: "none",
    color: "#2b8c90",
}

class Landing extends React.Component {
    render() {
        return (
            <div className="Landing">
            <HotelBackground/>
                <div className="centered">
                    <h1>Taking you to the best places</h1>

                    <Link to="Plan A Trip"><button className="get-started">Get Started</button></Link>
                </div>
            </div>
        );
    }
}

export default Landing;