import React from "react";
import { useLocation } from "react-router-dom";
import rome from '../../images/rome.jpg'
import { useParams } from "react-router-dom";


function PlanInfo (props) {
    const location = useLocation();
    const { guide_post_id } = useParams();
    return (
        <div className="PlanInfo">
            <h1>Testing {location.state.plan.title}</h1>
            <img src={rome} alt="Test"/>
        </div>
    );

}

export default PlanInfo