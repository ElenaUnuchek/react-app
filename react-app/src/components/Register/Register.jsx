import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Register.scss';
import {NavLink} from "react-router-dom";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName:''
        };
        this.register = (data) => ev => {
            console.log(data);
        };
    }

    render() {
        const { email, password, firstName, lastName } = this.state;
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
                                       onChange={(e) => this.setState({ firstName: e.target.value })}
                                       value={firstName}/>
                            <TextField id="outlined-basic"
                                       className="login-input"
                                       variant="outlined"
                                       label="Last Name"
                                       onChange={(e) => this.setState({ lastName: e.target.value })}
                                       value={lastName}/>
                            <TextField id="outlined-basic"
                                       className="login-input"
                                       variant="outlined"
                                       label="Email"
                                       onChange={(e) => this.setState({ email: e.target.value })}
                                       value={email}/>
                            <TextField id="outlined-basic"
                                       className="login-input"
                                       variant="outlined"
                                       label="Password"
                                       onChange={(e) => this.setState({ password: e.target.value })}
                                       value={password}/>
                        </div>
                        <div className="buttons-wrapper">
                            <NavLink to='/login' className="sign-in-link">Back to Sign In</NavLink>
                            <Button variant="contained"
                                    color="primary"
                                    onClick={this.register({email, password, firstName, lastName})}>
                                Sign Up
                            </Button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default Register;
