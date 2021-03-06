import React, { createContext, useState } from 'react';
import axios from 'axios';


export const ExerciseContext = createContext();

const ExerciseContextProvider = ({ children }) => {
    const [ exercises, setExercises ] = useState([]);

    const getExercises = () => {
        axios.get('http://localhost:5000/exercises')
            .then(res => {
                if (res.data.length > 0) {
                    setExercises(res.data.map(exr => exr));
                }
            })
            .catch(err => console.log("Problem retrieving exercises.", err))
        };

    const addExercise = exercise => {
        axios.post('http://localhost:5000/exercises/add', exercise)
                .then(res => console.log(res.data))
                .catch(err => console.log("Problem submitting task.", err))
        
        setTimeout(() => {window.location = '/'}, 900);
    }

    const deleteExercise = id => {
        axios.delete('http://localhost:5000/exercises/'+id)
            .then(res => console.log(res.data))
            .catch(err => console.log("Problem deleting exercise.", err))
        setExercises(exercises.filter(exercise => exercise._id !== id));
    }

    return (
        <ExerciseContext.Provider value={{ exercises, addExercise, getExercises, deleteExercise }} >
            {children}
        </ExerciseContext.Provider>
    )
}

export default ExerciseContextProvider;