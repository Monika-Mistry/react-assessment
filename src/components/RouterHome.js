import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Axios from 'axios';

import NavBar from './NavBar';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import UserList from './UserList';
import { getURL } from './Constants';

export default class RouterHome extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        this.getAllUser();
    }

    getAllUser = () => {
        Axios.get(getURL)
            .then(response => {
                this.setState({
                    users: response.data
                })
            }).catch(err => console.log(err.message));

    }

    render() {
        return (
            <Router>

                <NavBar />
                <br></br>

                <Route exact path="/" />
                <Route path="/login" component={LoginForm} />
                <Route path="/register" component={RegisterForm} />
                <Route path="/users" render={props => <UserList users={this.state.users} />} />
            </Router>
        )
    }
}

