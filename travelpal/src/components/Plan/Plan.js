import React from "react";
import { Link } from 'react-router-dom'
import "./Plan.css"

class Plan extends React.Component {
    render() {
        return (
            <div className="Plan">
                <>
                    <div className='bg'>
                        <div className="plantrip">
                            <form>
                                <h2 className="title"><a href="Plan A Trip" title='Home'>Plan A New Trip</a></h2>
                                <p className="or"><span></span></p>
                                {/* <div>
                                    <h2 className="title"> Login</h2>
                                    <br></br>
                                </div> */}
                                <div className="email-login">
                                    {/* <label htmlFor="email"> <b>Email</b></label> */}
                                    <input type="text" placeholder="Enter a location" name="uname" required />
                                    <label><b>Start Date</b></label>
                                    <input type="date" placeholder="Start date" name="startDate" required />
                                    <br></br>
                                    <label><b>End Date</b></label>
                                    <input type="date" placeholder="End date" name="endDate" required />
                                </div>
                                <br></br>
                                <button className="cta-btn">Create Plan</button>
                            </form>
                        </div>
                    </div>
                </>
            </div>
        );
    }
}

export default Plan;