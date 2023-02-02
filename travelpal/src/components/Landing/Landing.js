import React from "react";
import './Landing.css'

class Landing extends React.Component {
    render() {
        return (
            <div className="Landing">
                <div className="centered">
                    <h1>Taking you to the best places</h1>
                    <div className="SearchBar-submit">
                        <a>Get Started</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;