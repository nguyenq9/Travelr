import React, { useState } from 'react';    
import { useLocation } from "react-router-dom";
import rome from '../../images/rome.jpg'
import { useParams } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./PlanInfo.css"

const input_date_style = {
    width: "100%",
}


function PlanInfo (props) {
    const location = useLocation();
    const { guide_post_id } = useParams();
    const [startDate, setStartDate] = useState(location.state.plan.startDate);
    const [endDate, setEndDate] = useState(location.state.plan.endDate);
    const [travelers, setTravelers] = useState(location.state.plan.travelers);
    const [activities, setActivities] = useState(location.state.plan.activities);
    const [hotels, setHotels] = useState(location.state.plan.hotels);
    const [restaurants, setRestaurants] = useState(location.state.plan.restaurants);
    const [bio, setBio] = useState(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    );
    return (
        <>
            <div className="container">
                <div className="userCard cardWidth">
                    <div className="tab-content pp-4 p-md-5" id="v-pills-tabContent">
                        <div
                            className="tab-pane fade show active"
                            id="account"
                            role="tabpanel"
                            aria-labelledby="account-tab"
                        >
                            <h3 className="myb-3 h3">{location.state.plan.title}</h3>
                            <h3>{location.state.plan.location}</h3>
                            <div className="cardRow">
                                <div className="cardRow-md">
                                    <div className="form-gp">
                                        <label>Start Date</label>
                                        <input
                                            type="date"
                                            style={input_date_style}
                                            className="form-cont"
                                            value={startDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="cardRow-md">
                                    <div className="form-gp">
                                        <label>End Date</label>
                                        <input type="date" className="form-cont" value={endDate} onChange={(e) => setEndDate(e.target.value)} style={input_date_style}/>
                                    </div>
                                </div>
                                <div className="cardRow-md">
                                    <div className="form-gp">
                                        <label>Travelers</label>
                                        {travelers.map(t =>{
                                            return <input type="text" className="form-cont" value={t} onChange={(e) => setTravelers(e.target.value)} />
                                        })}
                                    </div>
                                </div>
                                <div className="cardRow-md">
                                    <div className="form-gp">
                                        <label>Activities</label>
                                        {activities.map(t =>{
                                            return <input type="text" className="form-cont" value={t} onChange={(e) => setTravelers(e.target.value)} />
                                        })}
                                    </div>
                                </div>
                                <div className="cardRow-md">
                                    <div className="form-gp">
                                        <label>Hotels</label>
                                        {hotels.map(t =>{
                                            return <input type="text" className="form-cont" value={t} onChange={(e) => setTravelers(e.target.value)} />
                                        })}
                                    </div>
                                </div>
                                <div className="cardRow-md">
                                    <div className="form-gp">
                                        <label>Restaurants</label>
                                        {restaurants.map(t =>{
                                            return <input type="text" className="form-cont" value={t} onChange={(e) => setTravelers(e.target.value)} />
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="cardRow-md-12">
                                <div className="form-gp">
                                    <label>Bio</label>
                                    <textarea className="form-cont" rows="4" value={bio} onChange={(e) => setBio(e.target.value)} ></textarea>
                                </div>
                            </div>
                            <div className='cta-flex'>
                                <button className="cta-b">Update</button>
                                <button className="cta-c">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};



export default PlanInfo