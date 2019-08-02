import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Axios from 'axios';

import NavBar from './NavBar';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import UserList from './UserList';
import { getURL, postURL } from './Constants';
import { faThList } from '@fortawesome/free-solid-svg-icons';

export default class RouterHome extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            postErrors: {},
            isAdded: false
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

        Axios.post(postURL, user).then(response => {
            if(response.data._id === undefined){
                this.setState({
                    postErrors: response.data
                })
            } else {
                console.log(response.data)
                this.setState(prevState => ({
                    postErrors: {},
                    isAdded: !prevState.isAdded
                }))
            }
        }).catch(err => console.log(err.message));

    }

    render() {
        return (
            <Router>

                <NavBar />
                <br></br>

                <Route exact path="/" />
                <Route path="/login" component={LoginForm} />
                <Route path="/register" render={props => <RegisterForm isAdded={this.state.isAdded} errors={this.state.postErrors} addUser={this.addUser} />} />
                <Route path="/users" render={props => <UserList getAllUser={this.getAllUser} users={this.state.users} />} />
            </Router>
        )
    }
}

