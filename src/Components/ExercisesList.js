import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExerciseContext } from '../Contexts/ExerciseContext';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

const TableWrap = styled.div`
overflow-x: auto;
width: 70%;
margin: auto;
margin-bottom: 4vw;
`

export const Head = styled.div`
font-size: 2.5em;
font-style: italic;
width: 100%;
margin: auto;
`

const TableHead = styled.div`
display: grid;
grid-template-columns: 1fr 1.5fr 1fr 1fr;
align-items: center;
background: ${({theme}) => theme.primaryDark};
height: 4em;
`

const Category = styled.div`
font-size: 1.8em;
font-weight: normal;
padding: 0.2vw 0 0 1vw;
color: white;
`

const Content = styled.div`
padding: 0.6vw 0 0.6vw 1vw;
font-size: 1.6em;
`

const CardFront = styled(animated.div)`
display: grid;
grid-template-columns: 1fr 1.5fr 1fr 1fr 1fr;
margin: 1vw 0;
transition: box-shadow 0.5s;
will-change: transform, opacity;
border-radius: 5px;
&:hover {
    cursor: pointer;
    /* transform: scale(1.1); */
    background-color: #FFF;
    box-shadow: 0px 5px 30px -10px rgba(0, 0, 0, 0.4);
}
`

// Functions for the grow animation
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `scale(${s})`;


const Exercise = props => {

    const [grow, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 210, friction: 20 } }))
    const [flipped, setFlipped] = useState(false);
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped? 180 : 0}deg)`,
        config: { mass: 1, tension: 210, friction: 20 }

    })

    return (
        <CardFront
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: grow.xys.interpolate(trans) }}
        >
            <Content>{props.exercise.username}</Content>
            <Content>{props.exercise.description}</Content>
            <Content>{props.exercise.duration}</Content>
            <Content>{props.exercise.date.substring(0, 10)}</Content>
            <Content>
                <Link to={'/edit/'+props.exercise._id}>edit</Link> | 
                <a href='#' onClick={() => { props.deleteExercise(props.exercise._id)}}> delete</a> 
            </Content>
        </CardFront>
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
                <TableHead>
                        <Category>Username</Category>
                        <Category>Description</Category>
                        <Category>Duration</Category>
                        <Category>Date</Category>
                </TableHead>
                
                <ExerciseList />           
        </TableWrap>            
    )
}

export default ExercisesList;