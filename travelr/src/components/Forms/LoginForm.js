import React from 'react';
import './Forms.css';
import {Link, useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from "zod";


const formSchema = z.object({
    email: z.string().email("Enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
})



function LoginForm(props) {
    const { setUser } = props;
    const navigate = useNavigate();
    const { register, handleSubmit, formState: {errors} } =
    useForm({
        resolver: zodResolver(formSchema)
    });

    const loginHandler = (data) => {
        localStorage.setItem(
            "user",
            JSON.stringify({
                email: data.email,
            })
        );
        setUser({
            email: data.email
        })
        navigate("/", { replace: true });
    }

    return (
        <>
            <div className='bg'>
                <div className="card">
                    <form onSubmit={handleSubmit(loginHandler)}>
                        <h2 className="title"><a href="/" title='Home'>Travelr</a></h2>
                        <p className="or"><span></span></p>
                        <div>
                            <h2 className="title"> Login</h2>
                            <br></br>
                        </div>
                        <div className="email-login">

                            <label htmlFor="email"> <b>Email</b></label>
                            <input className="email-field" type="text" placeholder="name@abc.com" name="uname" {...register("email")} />
                            {errors.email && <p className="text-danger">{errors.email?.message}</p>}

                            <label htmlFor="psw"><b>Password</b></label>
                            <input type="password" placeholder="8+ (a, A, 1, #)" name="psw" {...register("password")} />
                            {errors.password && <p className="text-danger">{errors.password?.message}</p>}

                        </div>
                        <button type="submit" className="cta-btn" >Login</button>
                        <p className="subtitle">Don't have an account? <Link to="/Signup">Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </>
    );

}

export default LoginForm;