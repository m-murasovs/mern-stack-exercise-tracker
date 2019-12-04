import React, { useState, useContext } from 'react';
import {ExerciseContext} from '../Contexts/ExerciseContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

const CreateExercise = () => {
    const { addExercise } = useContext(ExerciseContext);

    const [ exercise, setExercise ] = useState({
        username: '',
        description: '',
        duration: 0,
        date: new Date(),
    });

    const handleSubmit = e => {
        e.preventDefault();
        addExercise(exercise)
        setExercise({
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
        })
    }

    const handleChange = e => {
        setExercise({...exercise, [e.target.name]: e.target.value });
    }

    const handleDate = date => {
        setExercise({...exercise, [date]: date });
    }

    return (
        <div>
            <h3>Create New Exercise Log</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlfor="username">
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
                        className="form-control"
                        value={exercise.duration}
                        onChange={handleChange}
                        placeholder={0}
                    />
                </div>
                <div className="form-group">
                    <label>Date:</label>
                    <DatePicker
                        selected={new Date()}
                        onChange={handleDate}
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </form>
        </div>
    )
}

export default CreateExercise;