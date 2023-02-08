import React from 'react';
import { Link } from 'react-router-dom';
import './Forms.css';

function SignupForm() {
    return (
        <div className="card">
            <form>
                <h2 className="title"><a href="/" title='Home'>Travelr</a></h2>
                <p className="or"><span></span></p>

                <div>
                    <h2 className="title"> Sign up</h2>
                    <br></br>
                </div>

                <div className="email-login">
                    <label htmlFor="name"> <b>Name</b></label>
                    <input className="name-field" type="text" placeholder="John Smith" name="uname" required />
                    <label htmlFor="email"> <b>Email</b></label>
                    <input className="email-field" type="text" placeholder="name@abc.com" name="uname" required />
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="8+ (a, A, 1, #)" name="psw" required />
                    <label htmlFor="psw"><b>Confirm Password</b></label>
                    <input type="password" placeholder="8+ (a, A, 1, #)" name="psw" required />
                </div>
                <button className="cta-btn">Sign up</button>

                <p className="subtitle">Already a user? <Link to="/login">Login</Link></p>
            </form>
        </div>
    );
}

export default SignupForm;