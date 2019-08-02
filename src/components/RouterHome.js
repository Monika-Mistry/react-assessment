import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

export class RouterHome extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" />
                <Route path="/login" />
                <Route path="/register" />
                <Route path="/users" />
            </Router>
        )
    }
}

