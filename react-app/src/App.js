import React from 'react';
import './App.scss';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import {BrowserRouter, Route} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Home from "./components/Home/Home";

function App() {
    return (
        <BrowserRouter>
            <Route path='/login'
                   render={() => <Login/>}
            />
            <Route path='/register'
                   render={() => <Register/>}/>
            <PrivateRoute path='/' component={Home}/>
        </BrowserRouter>
    );
}

export default App;
