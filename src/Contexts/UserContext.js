import React, { createContext, useState, useEffect } from 'react';
import uniqId from 'uniqid';
import axios from 'axios';


export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    let [ users, setUsers ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(res => {
                if (res.data.length > 0) {
                    setUsers(res.data.map(user => user.username));
                }
            })
    }, []);

    const addUser = user => {
        setUsers([...users, user.username]);
    }

    const deleteUser = id => {
        setUsers(users.filter(user => user.id !== id));
    }

    console.log(users)

    return (
        <UserContext.Provider value={{ users, addUser, deleteUser }} >
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;