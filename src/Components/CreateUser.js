import React, { useState, useContext } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
// import styled from 'styled-components';
import { UserContext } from '../Contexts/UserContext';

const CreateExercise = () => {
    const { addUser } = useContext(UserContext);

    const [ user, setUser ] = useState({
        username: ''
    });

    const handleSubmit = e => {
        if (user !== '') {
            e.preventDefault();
            setUser(e.target.value);
            addUser(user);
            setUser({username: ''});
        }
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
                        onChange={handleChange}
                        value={user.username}
                    />
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default CreateExercise;