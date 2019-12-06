import React from "react";
import { useHistory } from 'react-router-dom';
import './Header.scss';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';

const Header = () => {

    const history = useHistory();

    const signOut = () => {
        localStorage.setItem('authenticated', 'false');
        history.push('/login');
    };

    return (
        <header>
            <SettingsIcon className="settings"/>
            <ExitToAppIcon onClick={signOut} className="sign-out"/>
        </header>
    )
};

export default Header;
