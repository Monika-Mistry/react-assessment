import React, { Component } from 'react';
import { Table } from 'reactstrap';

import User from './User';

export default class UserList extends Component {
    componentDidMount() {
        this.props.getAllUser();
    }

    render() {
        return (
            <div className="container" >
                <Table>
                    <thead>
                        <tr>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <User users={this.props.users} />
                </Table>
            </div>

        )
    }
}