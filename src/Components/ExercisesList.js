import React, { useState, useContext } from 'react';
import { ExerciseContext } from '../Contexts/ExerciseContext';
import styled from 'styled-components';

const ExercisesList = () => {
    const { exercises } = useContext(ExerciseContext);
    return (
        <div>
            {exercises.map(exr => (
                <div>
                    <p>{exr.username}</p>
                    <p>{exr.description}</p>
                </div>
            ))}
        </div>
    )
}

export default ExercisesList;