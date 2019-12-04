import React, { createContext, useState } from 'react';


export const ExerciseContext = createContext();

const ExerciseContextProvider = ({ children }) => {
    const [ exercise, setExercise ] = useState({
        username: '',
        description: '',
        duration: 0,
        date: new Date(),
    });

    const addUser = (e) => {
        setExercise([ ...exercise, { ...exercise.username } ]);
    }
    const addDescription = (e) => {
        setExercise([ ...exercise, { ...exercise.description } ]);
    }
    const addDuration = (e) => {
        setExercise([ ...exercise, { ...exercise.duration } ]);
    }
    const addDate = (e) => {
        setExercise([ ...exercise, { ...exercise.date } ]);
    }

    return (
        <ExerciseContext.Provider value={{ exercise, setExercise, addDescription, addDuration, addUser, addDate }} >
            {children}
        </ExerciseContext.Provider>
    )
}

export default ExerciseContextProvider;