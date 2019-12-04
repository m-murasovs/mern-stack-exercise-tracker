import React, { useState, useContext } from 'react';
import { ExerciseContext } from '../Contexts/ExerciseContext';
import styled from 'styled-components';
import { UserContext } from '../Contexts/UserContext';

const ExercisesList = () => {
    const { exercises } = useContext(ExerciseContext);
    const { users } = useContext(UserContext);
    return (
        <div>
            {exercises.map(exr => (
                <div>
                    <p>{exr.username}</p>
                    <p>{exr.description}</p>
                </div>
            ))}
            {users.map(usr => (
                <div>
                    <p>{usr.username}</p>
                </div>
            ))}
        </div>
    )
}

export default ExercisesList;