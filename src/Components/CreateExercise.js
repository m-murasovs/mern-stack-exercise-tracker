import React, { useState, useContext, useEffect } from 'react';
import { ExerciseContext } from '../Contexts/ExerciseContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import styled from 'styled-components';
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
        if (exercise.username !== '' || exercise.description !== '' ||
        exercise.duration !== '') {
            e.preventDefault();
            setExercise({
                username: e.target.value,
                description: e.target.value,
                duration: e.target.value,
                date: theDate,
            })
            addExercise(exercise);
            console.log("Adding exercise:", exercise);
        } else {
            alert("Please complete the entire form.")
        }
    }

    const handleChange = e => {
        setExercise({...exercise, [e.target.name]: e.target.value, date: theDate });
    }

    const handleDate = date => {
        setTheDate(date);
    }

    const list = users.map(user => (
        <option key={ user } value={ user }> {user} </option>
    ))
    

    return (
        <div>
            <h3>Create New Exercise Log</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                        <select
                        required
                        className="form-control"
                        name="username"
                        onChange={handleChange}
                        value={exercise.username}
                        >
                            <option>Please select user</option>
                            {list}
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