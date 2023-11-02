import React, { useState } from 'react';
import './LoginSignUp.css';
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { userSchema } from '../Validations/UserValidation.jsx'
import * as yup from 'yup'


export const LoginSignUp = () => {
    const [action, setAction] = useState("Login");
    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(userSchema)
    })

    const submitfForm = (data) => {
        console.log(data)
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit(submitfForm)}>
                <div className='header'>
                    <div className='text'>{action}</div>
                    <div className='underline'></div>
                </div>
                <div className='inputs'>
                    {action === "Login" ? <div></div> :
                        <div className='input'>
                            <img src={user_icon} alt="" />
                            <input type="text" name="FirstName" placeholder='First Name' {...register('FirstName')} />
                            <p className="error">{errors.FirstName?.message}</p>
                        </div>
                    }
                    {action === "Login" ? <div></div> :
                        <div className='input'>
                            <img src={user_icon} alt="" />
                            <input type="text" name="LastName" placeholder='Last Name' {...register('LastName')} />
                            <p className="error">{errors.LastName?.message}</p>
                        </div>
                    }
                    <div className='input'>
                        <img src={email_icon} alt="" />
                        <input type="text" name="Email" placeholder='Email' {...register('Email')} />
                        <div className="error">{errors.Email?.message}</div>
                    </div>
                    <div className='input'>
                        <img src={password_icon} alt="" />
                        <input type="text" name="Password" placeholder='Password' {...register('Password')} />
                        <div className="error">{errors.Password?.message}</div>
                    </div>
                    {action === "Login" ? <div></div> :
                        <div className='input'>
                            <img src={password_icon} alt="" />
                            <input type="text" name="ConfirmPassword" placeholder='Confirm Password' {...register('ConfirmPassword')} />
                            <div className="error">{errors.ConfirmPassword && "Passwords Should Match!"}</div>
                        </div>
                    }
                </div>
                {action === "SignUp" ? <div></div> :
                    <div className="forgot-password">
                        Lost Password? <span>Click Here!</span>
                    </div>}

                {action === "Login" ? <div className="submit-container">
                    <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("SignUp") }}>
                        Sign Up
                    </div>
                    <div className={action === "SignUp" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>
                        Login
                    </div>
                </div> : <div className="submit-container">
                <div className= "submit"    onClick={() => {handleSubmit(submitfForm)();}}>
                        Sign Up
                    </div>
                    <div className="submit gray" onClick={() => { setAction("Login") }}>
                        Login
                    </div>
                </div>}
            </form>
        </div>
    )
}
