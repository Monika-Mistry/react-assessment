import React from 'react';
import { Table } from 'reactstrap';

import User from './User';

export default function UserList(props) {
    return (
        <div className="container">
            <Table>
                <thead>
                    <tr>
                        <th>Username</th>
                    </tr>
                </thead>
                <User users={props.users} />
            </Table>
        </div>

    )
}