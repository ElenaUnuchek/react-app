import React from "react";
import Header from "../Header/Header";
import {Switch, Route} from "react-router-dom";
import UserProfile from "../UserProfile/UserProfile";
import './Home.scss';
import Settings from "../Settings/Settings";

const Home = () => {
    return (
        <>
            <Header/>
            <div className="home-body">
                <Switch>
                    <Route path='/' exact
                           render={() => <UserProfile/>}
                    />
                    <Route path='/settings'
                           render={() => <Settings/>}
                    />
                </Switch>
            </div>
        </>
    )
};

export default Home;
