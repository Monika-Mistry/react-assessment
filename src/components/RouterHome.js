import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './NavBar';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import UserList from './UserList';

export default class RouterHome extends Component {
    render() {
        return (
            <Router>

                <NavBar />
                <br></br>

                <Route exact path="/" />
                <Route path="/login" component={LoginForm} />
                <Route path="/register" component={RegisterForm} />
                <Route path="/users" component={UserList}/>
            </Router>
        )
    }
}

