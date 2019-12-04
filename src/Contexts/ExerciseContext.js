import React, { createContext, useState } from 'react';
import uniqId from 'uniqid';


export const ExerciseContext = createContext();

const ExerciseContextProvider = ({ children }) => {
    const [ exercises, setExercises ] = useState([
        {
            id: 1,
            username: 'Big Bez',
            description: 'Rowin your wife',
            duration: 90,
            date: '',
        }
    ]);

    const addExercise = exercise => {
        setExercises([...exercises, { ...exercise, id: uniqId() }]);
    }

    const deleteExercise = id => {
        setExercises(exercises.filter(exercise => exercise.id !== id));
    }

    return (
        <ExerciseContext.Provider value={{ exercises, addExercise, deleteExercise }} >
            {children}
        </ExerciseContext.Provider>
    )
}

export default ExerciseContextProvider;