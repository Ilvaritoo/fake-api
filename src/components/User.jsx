import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const url = 'https://jsonplaceholder.typicode.com/users';

const User = () => {
    const [users, setUsers] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(url).then(data => {
            setUsers(data.data);
        })
    }, []);

    return (
        <div className='user'>

            <p>id: {id}</p>
            {users?.map(user => {
                if (user.id === parseInt(id)) {
                    return (
                        <div className='users__card' key={user.id}>
                            <h1>{user.name}</h1>
                            <h3>{user.email}</h3>
                            <p>ID:{user.id}</p>
                            <p>{user.address.street}</p>
                            <Link to='/'>Home</Link>
                        </div>
                    )
                }
            })}

        </div>
    )
}

export default User
