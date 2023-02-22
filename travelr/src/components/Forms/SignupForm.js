import React from 'react';
import './Forms.css';
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from "zod";

const formSchema = z.object({
    name: z.string().min(1, "Enter your name"),
    email: z.string().email("Enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password must be at least 6 characters"),
}).superRefine(({password, confirmPassword}, ctx) => {
    if (confirmPassword != password) {
        ctx.addIssue({
            code: "custom",
            message: "Password not matched",
            path: ["confirmPassword"]
        })
    }
})

function SignupForm(props) {
    const { setUser } = props;
    const navigate = useNavigate();
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: zodResolver(formSchema)
    });

    const signupHandler = (data) => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: data.email,
        })
      );
      setUser({ email: data.email });
      navigate("/", { replace: true });
    }

    return (
        <div className="card">
            <form onSubmit={handleSubmit(signupHandler)}>
                <h2 className="title"><a href="/" title='Home'>Travelr</a></h2>
                <p className="or"><span></span></p>

                <div>
                    <h2 className="title"> Sign up</h2>
                    <br></br>
                </div>

                <div className="email-login">

                    <label htmlFor="name"> <b>Name</b></label>
                    <input className="name-field" type="text" placeholder="John Smith" name="uname" {...register("name")} />
                    {errors.name && <p className="text-danger">{errors.name?.message}</p>}
                    
                    <label htmlFor="email"> <b>Email</b></label>
                    <input className="email-field" type="text" placeholder="name@abc.com" name="uname" {...register("email")} />
                    {errors.email && <p className="text-danger">{errors.email?.message}</p>}

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="8+ (a, A, 1, #)" name="password" {...register("password")} />
                    {errors.password && <p className="text-danger">{errors.password?.message}</p>}

                    <label htmlFor="psw"><b>Confirm Password</b></label>
                    <input type="password" placeholder="8+ (a, A, 1, #)" name="confirmPassword" {...register("confirmPassword")}/>
                    {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword?.message}</p>}

                </div>
                <button type="submit" className="cta-btn">Sign up</button>

                <p className="subtitle">Already a user? <Link to="/login">Login</Link></p>
            </form>
        </div>
    );
}

export default SignupForm;