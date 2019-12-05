import React, { useState, useContext } from 'react';
import { ExerciseContext } from '../Contexts/ExerciseContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import styled from 'styled-components';
import axios from 'axios';
import { UserContext } from '../Contexts/UserContext';

const CreateExercise = () => {
    const { addExercise } = useContext(ExerciseContext);

    const { users } = useContext(UserContext);

    const [ theDate, setTheDate ] = useState(new Date ());

    const [ exercise, setExercise ] = useState({
        username: '',
        description: '',
        duration: '',
        date: '',
    })

    const handleSubmit = e => {
        if (exercise.description !== '') {
            e.preventDefault();
            setExercise({
                username: e.target.value,
                description: e.target.value,
                duration: e.target.value,
                date: theDate,
            })
            addExercise(exercise);
            
            axios.post('http://localhost:5000/exercises/add', exercise)
                .then(res => console.log(res.data))
                .catch(err => console.log("Problem submitting task.", err))
        }
        // window.location = "/";
    }

    const handleChange = e => {
        setExercise({...exercise, [e.target.name]: e.target.value, date: theDate });
    }

    const handleDate = date => {
        setTheDate(date);
    }

    return (
        <div>
            <h3>Create New Exercise Log</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>
                        Username:</label>
                        <select
                        required
                        className="form-control"
                        name="username"
                        onChange={handleChange}
                        >
                            {users.map(user => (
                                <option
                                    key={user}
                                    value={user}
                                >{user}</option>
                            ))}
                        </select>
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <input
                        required
                        type="text"
                        name="description"
                        className="form-control"
                        value={exercise.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Duration (minutes):</label>
                    <input
                        required
                        type="number"
                        name="duration"
                        className="form-control"
                        value={exercise.duration}
                        onChange={handleChange}
                        placeholder={0}
                    />
                </div>
                <div className="form-group">
                    <label>Date:</label>
                    <DatePicker
                        selected={theDate}
                        onChange={date => handleDate(date)}
                        onSelect={date => handleDate(date)}
                        dateFormat="dd/MM/yyyy"
                        name="date"
                        
                    />
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default CreateExercise;