import React, { useState, useContext } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
// import styled from 'styled-components';
import axios from 'axios';
import { UserContext } from '../Contexts/UserContext';

const CreateExercise = () => {
    const { addUser } = useContext(UserContext);

    const [ user, setUser ] = useState({
        username: ''
    })

    const handleSubmit = e => {
        e.preventDefault();
        addUser(user)
        setUser({
            username: ''
        })
        console.log(user);
        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));
    }

    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <h3>Create New User</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        required
                        type="text"
                        name="username"
                        className="form-control"
                        value={user.username}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default CreateExercise;