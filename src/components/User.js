import React from 'react';

export default function User(props) {
    return (
        <tbody>
            {
                props.users.map(element => {
                    return (
                        <tr key={element._id}>
                            <td>{element.username}</td>
                        </tr>
                    )
                })
            }
        </tbody>

    )
}