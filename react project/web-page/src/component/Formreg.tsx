import React, { useState } from "react";
function Formreg() {


  return (
    <html lang="en">
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Website with Login & Registration Form</title>
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
      </head>
      <body>

        <header className="header">
          <nav className="nav">
            <a href="#" className="nav_logo">CodingLab</a>

            <ul className="nav_items">
              <li className="nav_item">
                <a href="#" className="nav_link">Home</a>
                <a href="#" className="nav_link">Product</a>
                <a href="#" className="nav_link">Services</a>
                <a href="#" className="nav_link">Contact</a>
              </li>
            </ul>

            <button className="button" id="form-open" >Login</button>
          </nav>
        </header>

        <section className="home">
          <div className="form_container">
            <i className="uil uil-times form_close"></i>

            <div className="form login_form">
              <form action="" >
                <h2>Login</h2>

                <div className="input_box">
                  <input type="email" placeholder="Enter your email" required />
                  <i className="uil uil-envelope-alt email"></i>
                </div>
                <div className="input_box">
                  <input type="password" placeholder="Enter your password" required />
                  <i className="uil uil-lock password"></i>
                  <i className="uil uil-eye-slash pw_hide"></i>
                </div>

                <div className="option_field">
                  <span className="checkbox">
                    <input type="checkbox" id="check" />
                    <label htmlFor="check">Remember me</label>
                  </span>
                  <a href="#" className="forgot_pw">Forgot password?</a>
                </div>

                <button className="button">Login Now</button>

                <div className="login_signup">Don't have an account? <a href="#" id="signup">Signup</a></div>
              </form>
            </div>

            <div className="form signup_form">
              <form action="#">
                <h2>Signup</h2>

                <div className="input_box">
                  <input type="email" placeholder="Enter your email" required />
                  <i className="uil uil-envelope-alt email"></i>
                </div>
                <div className="input_box">
                  <input type="password" placeholder="Create password" required />
                  <i className="uil uil-lock password"></i>
                  <i className="uil uil-eye-slash pw_hide"></i>
                </div>
                <div className="input_box">
                  <input type="password" placeholder="Confirm password" required />
                  <i className="uil uil-lock password"></i>
                  <i className="uil uil-eye-slash pw_hide"></i>
                </div>

                <button className="button">Signup Now</button>

                <div className="login_signup">Already have an account? <a href="#" id="login">Login</a></div>
              </form>
            </div>
          </div>
        </section>
      </body>
    </html>
  )
}
export default Formreg;
