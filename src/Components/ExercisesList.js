import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExerciseContext } from '../Contexts/ExerciseContext';
import axios from 'axios';
// import styled from 'styled-components';

const Exercise = props => {
    return (
        <tr>
            <td>{props.exercise.username}</td>
            <td>{props.exercise.description}</td>
            <td>{props.exercise.duration}</td>
            <td>{props.exercise.date.substring(0, 10)}</td>
            <td>
                <Link to={'/edit/'+props.exercise._id}>edit</Link> | 
                <a href='#' onClick={() => { props.deleteExercise(props.exercise._id)}}>delete</a> 
            </td>
        </tr>
    )
}

const ExercisesList = props => {
    const { deleteExercise } = useContext(ExerciseContext);

    const [ exercises, setExercises ] = useState([]);

    useEffect(() => {
        console.log("Retrieving exercises...")
        axios.get('http://localhost:5000/exercises')
            .then(res => {
                if (res.data.length > 0) {
                    setExercises(res.data.map(exr => exr));
                }
            })
            .catch(err => console.log('Problem retrieving exercises.', err));
    }, []);

    const ExerciseList = props => {
        console.log("Populating table...")
        return exercises.map(exr => {
            return <Exercise exercise={exr} deleteExercise={deleteExercise} key={exr._id} />
        })
    }

    return (
        <div>
            <h3>Logged Exercises</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <ExerciseList />    
                </tbody>          
            </table>            
        </div>
    )
}

export default ExercisesList;