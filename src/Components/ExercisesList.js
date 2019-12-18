import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExerciseContext } from '../Contexts/ExerciseContext';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

const TableWrap = styled.div`
width: 90%;
`

export const Head = styled.span`
font-size: 2em;
font-style: italic;
`

const Table = styled.table`
width: 100%;
margin: auto;
`

const TableHead = styled.thead`
background: ${({theme}) => theme.primaryDark};
color: ${({theme}) => theme.primaryLight};
opacity: 0.7;
height: 3em;
text-align: center;
`

const Category = styled.th`
font-family: ${({theme}) => theme.primaryFont};
font-style: normal;
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
        <TableWrap>
            <Head>EXERCISES</Head>
            <Table>
                <TableHead>
                    <tr>
                        <Category>Username</Category>
                        <Category>Description</Category>
                        <Category>Duration</Category>
                        <Category>Date</Category>
                        <Category>Actions</Category>
                    </tr>
                </TableHead>
                <tbody>
                    <ExerciseList />    
                </tbody>          
            </Table>            
        </TableWrap>
    )
}

export default ExercisesList;