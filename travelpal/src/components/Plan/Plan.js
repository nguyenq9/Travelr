import React from "react";
import "./Plan.css"

class Plan extends React.Component {
    render() {
        return (
            <div className="Plan">
                <div className="plantrip">
                    <form>
                        <h2 className="title"><a href="Plan A Trip" title='Home'>Plan a new trip</a></h2>
                        <p className="or"><span></span></p>

                        <div className="plan-fields">
                            <label > <b>Location</b></label>
                            <input type="text" placeholder="Enter a location" name="uname" required />
                            {/* <label><b>Start Date</b></label>
                            <input type="date" placeholder="Start date" name="startDate" required /> */}
                            <div className="date-label">
                                <label id="start-label"><b>Start Date</b></label>
                                <label id="end-label"><b>End Date</b></label>
                            </div>
                            <div>
                                <input type="date" placeholder="Start date" name="startDate" required />
                                <input type="date" placeholder="End date" name="endDate" required />
                            </div>
                            
                            <br></br>
                            {/*<label><b>End Date</b></label>
                            <input type="date" placeholder="End date" name="endDate" required />*/}
                        </div>
                        <br></br>
                        <button className="create-btn">Create Plan</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Plan;