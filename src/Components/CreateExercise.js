import React, { useContext } from 'react';
import {ExerciseContext} from '../Contexts/ExerciseContext';
import styled from 'styled-components';

const CreateExercise = () => {
    const {username, description, duration, date} = useContext(ExerciseContext);

    return (
        <div>
            "Barry = " {username}
        </div>
    )
}

export default CreateExercise;