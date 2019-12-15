import React from "react";
import { useHistory, useLocation } from 'react-router-dom';
import './Header.scss';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const Header = () => {

    const history = useHistory();
    const location = useLocation();

    const signOut = () => {
        localStorage.setItem('authenticated', 'false');
        history.push('/login');
    };

    const navigateToSettings = () => {
        history.push('/settings');
    };

    const navigateToProfile = () => {
        history.push('/');
    };

    return (
        <header>
            {location.pathname !== '/settings' ? <SettingsIcon onClick={navigateToSettings} className="settings"/> : <KeyboardBackspaceIcon onClick={navigateToProfile} className="settings"/>}
            <ExitToAppIcon onClick={signOut} className="sign-out"/>
        </header>
    )
};

export default Header;
