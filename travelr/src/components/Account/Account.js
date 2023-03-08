import React, { useState } from "react";
import "./Account.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Account = () => {
    const n = JSON.parse(localStorage.getItem('user'))
    const name_string = `${n.firstName} ${n.lastName}`
    const [firstName, setFirstName] = useState(n.firstName);
    const [lastName, setLastName] = useState(n.lastName);
    const [email, setEmail] = useState("name@gmail.com");
    return (
        <>
            <div className="container">
                <div className="userCard cardWidth">
                    <div className="tab-content pp-4 p-md-5" id="v-pills-tabContent">
                        <div className="pp-4">
                            <div className="img-circle text-center mb-3">
                                <AccountCircleIcon
                                    sx={{
                                        fontSize: "120px",
                                    }}
                                />
                            </div>
                            <h4 className="text-center">{name_string}</h4>
                        </div>
                        <div
                            className="tab-pane fade show active"
                            id="account"
                            role="tabpanel"
                            aria-labelledby="account-tab"
                        >
                            <h3 className="myb-3 h3">Account Settings</h3>
                            <div className="cardRow">
                                <div className="cardRow-md">
                                    <div className="form-gp">
                                        <label>First Name</label>
                                        <input
                                            type="text"
                                            className="form-cont"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="cardRow-md">
                                    <div className="form-gp">
                                        <label>Last Name</label>
                                        <input
                                            type="text"
                                            className="form-cont"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="cardRow-md">
                                    <div className="form-gp">
                                        <label>Email</label>
                                        <input
                                            type="text"
                                            className="form-cont"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="cta-flex">
                                <button
                                    className="cta-b"
                                    style={{ backgroundColor: "#007aab" }}
                                >
                                    Update
                                </button>
                                <button
                                    className="cta-c"
                                    style={{ backgroundColor: "#007aab" }}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Account;
