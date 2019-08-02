import React, {Component} from 'react';

import User from './User';

export default class UserList extends Component {
    componentDidMount(){

    }
    render(){
        return(
            <ul>
                <User />
            </ul>
        )
    }
}