import React from 'react';

export default function User(props) {
    return (
        <tbody>
            {
                props.users.map(element => {
                    return (
                        <li key={element._id}>{element.username}</li>
                    )
                })
            }
        </tbody>

    )
}