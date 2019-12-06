import React, {useCallback, useState} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Login.scss';
import {NavLink, useHistory} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();



    const login = useCallback(() => {
        localStorage.setItem('authenticated', 'true');
        console.log(email, password);
        history.push('/home');
    }, [email, password, history]);

    return (
        <section className="login-page">
            <div className="login-wrapper">
                <p className="sign-in-label">Sign In</p>
                <form noValidate autoComplete="off">
                    <div className="login-inputs-wrapper">
                        <TextField id="outlined-basic"
                                   className="login-input"
                                   variant="outlined"
                                   label="Email"
                                   onChange={(e) => setEmail(e.target.value)}
                                   value={email}/>
                        <TextField id="outlined-basic"
                                   className="login-input"
                                   variant="outlined"
                                   label="Password"
                                   onChange={(e) => setPassword(e.target.value)}
                                   value={password}/>
                    </div>
                    <div className="buttons-wrapper">
                        <Button variant="contained"
                                color="primary"
                                onClick={login}>
                            Sign In
                        </Button>
                        <NavLink to='/register' className="sign-up-link">or Sign Up</NavLink>
                    </div>
                </form>
            </div>
        </section>
    )
};

export default Login;
