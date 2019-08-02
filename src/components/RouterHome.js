import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Axios from 'axios';

import NavBar from './NavBar';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import UserList from './UserList';
import { getURL, postURL, loginURL } from './Constants';

export default class RouterHome extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            postErrors: {},
            isAdded: false,
            isLoggedIn: false,
            user: "",
            isPassword: true,
            isUser: true
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
            }).catch(err => console.log(err));

    }

    addUser = event => {
        event.preventDefault();
        this.setState({
            isAdded: false
        })
        const user = {
            username: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value,
            password2: event.target[3].value
        }

        Axios.post(postURL, user)
            .then(response => {
                if (response.data.Status === undefined) {
                    this.setState({
                        postErrors: response.data
                    })
                } else {
                    this.setState(prevState => ({
                        postErrors: {},
                        isAdded: !prevState.isAdded
                    }))
                }
            }).catch(err => console.log(err));

    }

    loginUser = event => {
        event.preventDefault();
        const username = event.target[0].value;
        const password = event.target[1].value;
        const url = loginURL + "/" + username + "/" + password;

        Axios.get(url)
            .then(response => {
                if (response.data.Status.toLowerCase().indexOf("not") === -1) {
                    this.setState({
                        isLoggedIn: true,
                        user: username,
                        isPassword: true,
                        isUser: true
                    })

                } else {
                    this.setState({
                        isLoggedIn: false,
                        isPassword: false,
                        isUser: true
                    })
                }
            }).catch(err => {
                this.setState({
                    isLoggedIn: false,
                    isUser: false,
                    isPassword: true

                })
 
            })
    }

    render() {
        return (
            <Router>

                <NavBar />
                <br></br>

                <Route exact path="/" />
                <Route path="/login" render={props => <LoginForm isUser={this.state.isUser} isPassword={this.state.isPassword} isLoggedIn={this.state.isLoggedIn} user={this.state.user} loginUser={this.loginUser} />} />
                <Route path="/register" render={props => <RegisterForm isAdded={this.state.isAdded} errors={this.state.postErrors} addUser={this.addUser} />} />
                <Route path="/users" render={props => <UserList getAllUser={this.getAllUser} users={this.state.users} />} />
            </Router>
        )
    }
}

