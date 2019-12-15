import React, {useCallback, useState} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./Settings.scss";

const Settings = () => {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const [firstName, setFirstName] = useState(currentUser.firstName);
    const [lastName, setLastName] = useState(currentUser.lastName);
    const [email, setEmail] = useState(currentUser.email);

    const saveData = useCallback(() => {
        let users = JSON.parse(localStorage.getItem('users'));
        const user = users.find(u => u.email === currentUser.email);
        users = users.filter(u => u.email !== currentUser.email);
        currentUser = {
            ...user,
            firstName,
            lastName,
            email
        };
        users.push(currentUser);
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(currentUser))
    }, [firstName, lastName, email]);

    return (
        <div className="settings-wrapper">
            <div className="user-data">
                <div className="description">
                    <p>First Name:</p>
                    <p>Last Name:</p>
                    <p>Email:</p>
                </div>
                <div className="value">
                    <TextField value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    <TextField value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    <TextField value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
            </div>
            <Button className="button" onClick={saveData}>Save</Button>
        </div>
    )
};

export default Settings;
