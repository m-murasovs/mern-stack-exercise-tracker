import React, { useState, useContext } from 'react';
import { ExerciseContext } from '../Contexts/ExerciseContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import { setHours } from 'date-fns';

const CreateExercise = () => {
    const { addExercise } = useContext(ExerciseContext);

    const [ theDate, setTheDate ] = useState(new Date ());

    const [ exercise, setExercise ] = useState({
        username: '',
        description: '',
        duration: '',
        date: '',
    })

    const handleSubmit = e => {
        e.preventDefault();
        addExercise(exercise)
        setExercise({
            username: '',
            description: '',
            duration: '',
            date: new Date(),
        })
    }

    const handleChange = e => {
        setExercise({...exercise, [e.target.name]: e.target.value, date: theDate });
        //setExercise({...exercise, [exercise.date]: theDate});
        console.log(exercise)
    }

    const handleDate = date => {
        setTheDate(date);
    }

    return (
        <div>
            <h3>Create New Exercise Log</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">
                        Username:</label>
                    <select
                        required
                        className="form-control"
                        name="username"
                        id="username"
                        value={exercise.username}
                    ></select>
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
                        dateFormat="dd/MM/yyyy"
                        name="date"
                        
                    />
                </div>
            </form>
        </div>
    )
}

export default CreateExercise;