import React from 'react';
import './Forms.css';
import {Link} from 'react-router-dom'


function LoginForm() {
    return (
        <>
            <div className='bg'>
                <div className="card">
                    <form>
                        <h2 className="title"><a href="/" title='Home'>Travelr</a></h2>
                        <p className="or"><span></span></p>
                        <div>
                            <h2 className="title"> Login</h2>
                            <br></br>
                        </div>
                        <div className="email-login">
                            <label htmlFor="email"> <b>Email</b></label>
                            <input className="email-field" type="text" placeholder="name@abc.com" name="uname" required />
                            <label htmlFor="psw"><b>Password</b></label>
                            <input type="password" placeholder="8+ (a, A, 1, #)" name="psw" required />
                        </div>
                        <button className="cta-btn">Login</button>
                        <p className="subtitle">Don't have an account? <Link to="/Signup">Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </>
    );

}

export default LoginForm;