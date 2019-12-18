import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExerciseContext } from '../Contexts/ExerciseContext';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

export const Head = styled.span`
font-size: 2em;
font-style: italic;
margin-bottom: 2vw;
`

const Exercise = props => {
    return (
        <tr>
            <td>{props.exercise.username}</td>
            <td>{props.exercise.description}</td>
            <td>{props.exercise.duration}</td>
            <td>{props.exercise.date.substring(0, 10)}</td>
            <td>
                <Link to={'/edit/'+props.exercise._id}>edit</Link> | 
                <a href='#' onClick={() => { props.deleteExercise(props.exercise._id)}}> delete</a> 
            </td>
        </tr>
    )
}

const ExercisesList = () => {
    
    const { exercises, deleteExercise, getExercises } = useContext(ExerciseContext);

    useEffect(() => {
        getExercises();
    }, []);

    const ExerciseList = () => {
        return exercises.map(exr => {
            return <Exercise exercise={exr} deleteExercise={deleteExercise} key={exr._id} />
        })
    }

    return (
        <div>
            <Head>EXERCISES</Head>
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