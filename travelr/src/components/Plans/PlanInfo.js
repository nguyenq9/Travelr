import React, { useState } from 'react';    
import { useLocation } from "react-router-dom";
import rome from '../../images/rome.jpg'
import { useParams } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./PlanInfo.css"


function PlanInfo (props) {
    const location = useLocation();
    const { guide_post_id } = useParams();
    const [startDate, setStartDate] = useState(location.state.plan.startDate);
    const [endDate, setEndDate] = useState(location.state.plan.endDate);
    const [email, setEmail] = useState("name@gmail.com");
    const [phoneNumber, setPhoneNumber] = useState("+360 555 5555");
    const [company, setCompany] = useState("Apple Amazon");
    const [designation, setDesignation] = useState("UI Developer");
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
                            <div className="cardRow">
                                <div className="cardRow-md">
                                    <div className="form-gp">
                                        <label>Start Date</label>
                                        <input
                                            type="date"
                                            className="form-cont"
                                            value={startDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="cardRow-md">
                                    <div className="form-gp">
                                        <label>End Date</label>
                                        <input type="date" className="form-cont" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                                    </div>
                                </div>
                                <div className="cardRow-md">
                                    <div className="form-gp">
                                        <label>Email</label>
                                        <input type="text" className="form-cont" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="cardRow-md">
                                    <div className="form-gp">
                                        <label>Phone number</label>
                                        <input type="text" className="form-cont" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                    </div>
                                </div>
                                <div className="cardRow-md">
                                    <div className="form-gp">
                                        <label>Company</label>
                                        <input type="text" className="form-cont" value={company} onChange={(e) => setCompany(e.target.value)} />
                                    </div>
                                </div>
                                <div className="cardRow-md">
                                    <div className="form-gp">
                                        <label>Designation</label>
                                        <input type="text" className="form-cont" value={designation} onChange={(e) => setDesignation(e.target.value)} />
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