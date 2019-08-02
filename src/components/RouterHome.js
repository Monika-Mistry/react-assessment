import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './NavBar';
import UserLogin from './UserLogin';

export default class RouterHome extends Component {
    render() {
        return (
            <Router>

                <NavBar />
                <br></br>

                <Route exact path="/" />
                <Route path="/login" component={UserLogin} />
                <Route path="/register" />
                <Route path="/users" />
            </Router>
        )
    }
}

