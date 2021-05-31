import React from 'react'
import './login.css';

const Login = () => {
    return (
        <div className="login">
            <div className="login_wrapper">
                <h2>Instagram</h2>
                <div class="form-group">
                    <input type="text" name="" class="form-control" placeholder="Email" />
                </div>
                <div class="form-group">
                    <input type="text" name="" class="form-control" placeholder="Password" />
                </div>
                <div class="form-group">
                    <button className="btn">Login</button>
                </div>
                <div className="create">
                    <span>OR</span>
                    <a href="#">Do you want to <span>Register</span></a>
                </div>

            </div>
        </div>
    )
}

export default Login
