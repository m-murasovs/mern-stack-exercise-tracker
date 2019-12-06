import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    let [ users, setUsers ] = useState([]);
    
    const getUsers = () => {
        axios.get('http://localhost:5000/users')
        .then(res => {
            if (res.data.length > 0) {
                setUsers(res.data.map(user => user.username));
            }
        })
        .catch(err => {
            console.log("Problem retrieving users.", err);
        })
    };
    
    useEffect(() => {
        getUsers();
    }, []);

    const addUser = user => {
        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data))
            .catch(err => console.log("Problem creating user.", err))
    }

    return (
        <UserContext.Provider value={{ users, getUsers, addUser }} >
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;