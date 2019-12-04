import React, { useState, useContext } from 'react';
import ExerciseContextProvider, {ExerciseContext} from '../Contexts/ExerciseContext';
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
        addExercise(exercise);
        setExercise({
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
        })
    }

    return (
        <div>
            <h3>Create New Exercise Log</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <select
                        required
                        className="form-control"
                        value={exercise.username}
                    ></select>
                </div>
            </form>
        </div>
    )
}

export default CreateExercise;