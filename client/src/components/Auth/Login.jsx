import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginAction } from '../../Redux/actions/authActions';

import './login.css';

const Login = () => {

    const history = useHistory();

    const { loginErrors, token, loading } = useSelector(state => state.authReducer)
    console.log(loginErrors)
    const dispatch = useDispatch();
    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const handleInput = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(loginAction(state))
    }

    useEffect(() => {
        if (token) {
            history.push('/home')
        }
    }, [token])

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <div className="login_wrapper">
                    <h2>Instagram</h2>
                    <div class="form-group">
                        <input type="text" name="email" value={state.email} onChange={handleInput} class="form-control" placeholder="Email" />
                        {loginErrors.emailErr ? <span>{loginErrors.emailErr}</span> : ''}
                    </div>
                    <div class="form-group">
                        <input type="text" name="password" value={state.password} onChange={handleInput} class="form-control" placeholder="Password" />
                        {loginErrors.passwordErr ? <span>{loginErrors.passwordErr}</span> : ''}

                    </div>
                    <div class="form-group">
                        <button className="btn">Login</button>
                    </div>
                    <div className="create">
                        <span>OR</span>
                        <a href="#">Do you want to <span>Register</span></a>
                    </div>
                </div>
            </form>
            {
                loading ? <div className="svg">
                    <img src="/images/loader.svg" />
                </div> : ''
            }

        </div>
    )
}

export default Login
