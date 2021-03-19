import React, { useEffect, useState } from 'react';
import '../css/main.css';
import User from './User';

import axios from 'axios';

const url = 'https://reqres.in/api/users';

const Users = () => {

    const [users, setUsers] = useState(null);

    useEffect(() => {
        axios.get(url).then(response => {
            setUsers(response.data.data);
        })
    }, []);

    // console.log(users);

    return (

        <div className='users'>
            {users?.map(user => (
                <User />
            ))}

        </div>

    )
}

export default Users
