import React from 'react';
import './CSS/LoginSignUp.css';
function LoginSignup() {
   
    return (
        <div className='loginsignup'>
             <div className="loginsignup-container">
                <h1>   &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Sign Up       </h1>
                <div className="loginsignup_fields">
                  <input type="text" placeholder='Your Name' className="hello"/>
                  <br/>  
                  <br/>
                  <input type="email" placeholder='Email Address' className="hello"/>
                     <br/>
                     <br/>
                  <input type="password" placeholder='Password' className="hello"/>
                </div>

                <button>Continue</button>
                <p className="loginsignup-login">  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Already have an account? <span>Login here</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>By continuing, i agree to the terms of use &  privacy policy</p>
                </div>
             </div>
        </div>
    );
};

export default LoginSignup;