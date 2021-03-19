import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import '../css/main.css';
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/users';

const Users = () => {

    const [users, setUsers] = useState(null);

    useEffect(() => {
        axios.get(url).then(data => {
            setUsers(data.data);
        })
    }, []);
    
    return (
        <div className='users'>
            {users?.map(user => {
                const {name, email, id, address } = user;
                return (
                    <div className='users__card' key={id}>
                        <h1 className=''>{name}</h1>
                        <h3>{email}</h3>
                        <p>ID:{id}</p>
                        <p>{address.street}</p>
                        <Link to={`user/${id}`}>To user</Link>
                    </div>
                )
            }
            )}
        </div>

    )
}

export default Users
