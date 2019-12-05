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
                <Link to={"/edit/"+props.exercise._id}>edit</Link> | 
                <a href="#" onClick={() => { props.deleteExercise(props.exercise._id )}}>delete</a> 
            </td>
        </tr>
    )
}

const ExercisesList = () => {
    const { exercises, deleteExercise } = useContext(ExerciseContext);

    console.log(exercises)

    const exerciseList = () => {
        return exercises.map(currentexr => {
            return <Exercise exercise={currentexr} deleteExercise={deleteExercise} key={currentexr._id} />
        })
    }


    // const { users } = useContext(UserContext);
    return (
        <div>
            <h3>Logged Exercises</h3>
            <table className="table">
                <thead className="thead-light">
                    <th>Username</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Date</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {exerciseList}    
                </tbody>          
            </table>            
        </div>
    )
}

export default ExercisesList;