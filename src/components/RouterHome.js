import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './NavBar';

export default class RouterHome extends Component {
    render() {
        return (
            <Router>

                <NavBar />

                <Route exact path="/" />
                <Route path="/login" />
                <Route path="/register" />
                <Route path="/users" />
            </Router>
        )
    }
}

