import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


export const ExerciseContext = createContext();

const ExerciseContextProvider = ({ children }) => {
    const [ exercises, setExercises ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/exercises')
            .then(res => {
                if (res.data.length > 0) {
                    console.log(res.data)
                    setExercises(res.data.map(exr => exr));
                }
            })
    }, []);

    const addExercise = exercise => {
        setExercises([...exercises, exercise ]);
    }

    const deleteExercise = id => {
        setExercises(exercises.filter(exercise => exercise.id !== id));
    }

    console.log(exercises)

    return (
        <ExerciseContext.Provider value={{ exercises, addExercise, deleteExercise }} >
            {children}
        </ExerciseContext.Provider>
    )
}

export default ExerciseContextProvider;