import React from "react";
import { Navigate } from "react-router-dom";
import './Plans.css'


class Plans extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            plan: '',
        }
        this.handlePlanClick = this.handlePlanClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handlePlanClick(event) {
        console.log(this.props.plan.key);
        this.props.navigate("/Plans/" + this.props.plan.key, {state: {plan: this.props.plan}})
        event.preventDefault();
    }

    handleDeleteClick(event) {
        console.log("Deleting this plan!");
    }

    render() {
        return (
            <div className="Plan">
                <div onClick={this.handlePlanClick}>
                    <div className="image-container">
                        {/* <img src={this.props.business.imageSrc} alt=""/> */}
                    </div>
                    <h2>{this.props.plan.title}</h2>
                    <div className="plan-information">
                        <div className="Business-address">
                            <p>{this.props.plan.location}</p>
                            <p>{this.props.plan.startDate} <b>-</b> {this.props.plan.endDate}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <b className="delete-btn" onClick={this.handleDeleteClick} title="Delete">&nbsp;x&nbsp;</b>
                </div>
            </div>
            
        );
    }
}

export default Plans;