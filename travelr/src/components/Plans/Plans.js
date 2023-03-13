import React from "react";
import { Link, Navigate } from "react-router-dom";
import "./Plans.css";


class Plans extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plan: "",
    };
    this.handlePlanClick = this.handlePlanClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handlePlanClick(event) {
    console.log(this.props.plan.key);
    this.props.navigate("/Plans/" + this.props.plan.key, {
      state: { plan: this.props.plan },
    });
    event.preventDefault();
  }

  handleDeleteClick(event) {
    console.log("Deleting this plan!");
    // console.log(event);
    fetch('/api/deleteplan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
      })
        .then(res => res.json())
        .then(event => {
          if (event.status === 'success') {
            console.log(event.message);
          } else {
            console.error(event.message);
          }
        })
        .catch(err => { })

        window.location.reload(false)
  }

  render() {
    return (
      <div className="Plan">
        <div onClick={this.handlePlanClick}>
          <div className="image-container" style={{backgroundImage: `url(${this.props.plan.location_image})`}}>
          </div>
          <h2>{this.props.plan.title}</h2>
          <div className="plan-information">
            <div className="Business-address">
              <p>{this.props.plan.location}</p>
              <p>
                {this.props.plan.startDate} <b>-</b> {this.props.plan.endDate}
              </p>
            </div>
          </div>
        </div>
        <div>
            <b type='button' className="delete-btn" onClick={() => this.handleDeleteClick({title: this.props.plan.title})} title="Delete">
                &nbsp;x&nbsp;
            </b>
        </div>
      </div>
    );
  }
}

export default Plans;
