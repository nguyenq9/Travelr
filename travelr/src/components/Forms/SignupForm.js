import React from 'react';
import './Forms.css';
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from "zod";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/authSlice";

const formSchema = z.object({
    firstName: z.string().min(1, "Enter your first name"),
    lastName: z.string().min(1, "Enter your last name"),
    email: z.string().email("Enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password must be at least 6 characters"),
}).superRefine(({password, confirmPassword}, ctx) => {
    if (confirmPassword !== password) {
        ctx.addIssue({
            code: "custom",
            message: "Password not matched",
            path: ["confirmPassword"]
        })
    }
})

function SignupForm(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: zodResolver(formSchema)
    });

    const signupHandler = (data) => {
        // sending signup request to the server with user data. here method is post method and body contains login data
        fetch('/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(data => {
            if (data.status === 'success') {
              // getting user email from response if successful.
              const { email = '', firstName = '', lastName = '' } = data.data.user;
              console.log(data.data.user);
              // setting user to the redux store
              dispatch(login({ firstName, lastName, email, avatar: '' }));
              localStorage.setItem('user', JSON.stringify(data.data.user));
              navigate("/", { replace: true });
              console.log(data.message);
            } else {
              console.error(data.message);
            }
          })
          .catch(err => { })
      };

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

                    <label htmlFor="firstName"> <b>First Name</b></label>
                    <input className="name-field" type="text" placeholder="John" name="uname" {...register("firstName")} />
                    {errors.firstName && <p className="text-danger">{errors.firstName?.message}</p>}

                    <label htmlFor="lastName"> <b>Last Name</b></label>
                    <input className="name-field" type="text" placeholder="Smith" name="uname" {...register("lastName")} />
                    {errors.lastName && <p className="text-danger">{errors.lastName?.message}</p>}
                    
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