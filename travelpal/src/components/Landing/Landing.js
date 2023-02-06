import React from "react";
import './Landing.css'
import { Link } from 'react-router-dom';

const linkStyle = {
    textDecoration: "none",
    color: "#2b8c90",
}

class Landing extends React.Component {
    render() {
        return (
            <div className="Landing">
                <div className="centered">
                    <h1>Taking you to the best places</h1>
                    <button className="get-started"><Link style={linkStyle} to="/home">Get Started</Link></button>
                </div>
            </div>
        );
    }
}

export default Landing;