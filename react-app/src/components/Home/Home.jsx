import React from "react";
import Header from "../Header/Header";
import {Switch, Route} from "react-router-dom";
import UserProfile from "../UserProfile/UserProfile";
import './Home.scss';

const Home = () => {
    return (
        <>
            <Header/>
            <div className="home-body">
                <Switch>
                    <Route path='/'
                           render={() => <UserProfile/>}
                    />
                </Switch>
            </div>
        </>
    )
};

export default Home;
