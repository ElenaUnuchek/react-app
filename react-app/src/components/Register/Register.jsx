import React, {useCallback, useState} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Register.scss';
import {NavLink, useHistory} from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const register = useCallback(() => {
        const users = localStorage.getItem('users');
        const newUsers = JSON.parse(users || '[]');
        newUsers.push({
            firstName,
            lastName,
            email,
            password
        });
        localStorage.setItem('users', JSON.stringify(newUsers));
        localStorage.setItem('currentUser', JSON.stringify({
            firstName,
            lastName,
            email
        }));
        localStorage.setItem('authenticated', 'true');
        history.push('/home');
    }, [firstName, lastName, email, password, history]);

    return (
        <section className="register-page">
            <div className="register-wrapper">
                <p className="sign-in-label">Sign Up</p>
                <form noValidate autoComplete="off">
                    <div className="login-inputs-wrapper">
                        <TextField id="outlined-basic"
                                   className="login-input"
                                   variant="outlined"
                                   label="First Name"
                                   onChange={(e) => setFirstName(e.target.value)}
                                   value={firstName}/>
                        <TextField id="outlined-basic"
                                   className="login-input"
                                   variant="outlined"
                                   label="Last Name"
                                   onChange={(e) => setLastName(e.target.value)}
                                   value={lastName}/>
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
                        <NavLink to='/login' className="sign-in-link">Back to Sign In</NavLink>
                        <Button variant="contained"
                                color="primary"
                                disabled={!firstName || !lastName || !email || !password}
                                onClick={register}>
                            Sign Up
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    )
};

export default Register;
