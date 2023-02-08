import React from "react";
import './Plans.css'


class Plans extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            plan: '',
        }
        this.handlePlanClick = this.handlePlanClick.bind(this);
    }

    handlePlanClick(event) {
        console.log(this.props.plan);
        event.preventDefault();
    }

    render() {
        return (
            <div className="Plan" onClick={this.handlePlanClick}>
                <div className="image-container">
                    {/* <img src={this.props.business.imageSrc} alt=""/> */}
                </div>
                <h2>{this.props.plan.title}</h2>
                <div className="plan-information">
                    <div className="Business-address">
                        <p>{this.props.plan.location}</p>
                        <p>{this.props.plan.startDate} {this.props.plan.endDate}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Plans;