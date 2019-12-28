import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExerciseContext } from '../Contexts/ExerciseContext';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

const TableWrap = styled.div`
overflow-x: auto;
margin: auto;
padding-bottom: 4vw;
@media (max-width: ${({ theme }) => theme.tablet}) {
    padding-top: 4vw;
}
`

export const Head = styled.div`
width: 70%;
margin: auto;
font-size: 2.5em;
font-style: italic;
`

const TableHead = styled.div`
width: 70%;
margin: auto;
display: grid;
grid-template-columns: 1fr 1.5fr 0.7fr 0.7fr;
align-items: center;
background: ${({theme}) => theme.primaryDark};
height: 4em;
@media (max-width: ${({ theme }) => theme.tablet}) {
    display: none;
}
`

const MobileHead = styled.div`
display: none;
background: ${({theme}) => theme.primaryDark};
height: 4em;
@media (max-width: ${({ theme }) => theme.tablet}) {
    display: grid;
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    width: 130px;
    height: auto;
    text-align: center;
}
`

const Category = styled.div`
font-size: 1.8em;
font-weight: normal;
padding: 0.2vw 0 0 1vw;
color: white;
@media (max-width: ${({ theme }) => theme.tablet}) {
    border-bottom: 2px solid white;
    padding: 1vw;
    font-size: 1.5em;
}
`

const TaskCard = styled(animated.div)`
position: relative;
width: 70%;
margin: 1.2vw auto;
transition: all 0.5s;
border-radius: 5px;
justify-content: left;
background: #F9F9F9;
&:hover {
    cursor: pointer;
    will-change: transform;
    transform: scale(1.1);
    box-shadow: 0px 5px 30px -10px rgba(0, 0, 0, 0.4);
}
@media (max-width: ${({ theme }) => theme.tablet}) {
    display: grid;
    grid-template-columns: 1fr 3fr;
    min-width: 300px;
    margin: 2vw auto;
}
`

const CardFront = styled(animated.div)`
grid-template-columns: 1fr 1.5fr 0.7fr 0.7fr;
will-change: transform, opacity;
width: 100%;
@media (max-width: ${({ theme }) => theme.tablet}) {
    /* display: grid; */
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr 1fr 1fr;
}
`

const Content = styled.div`
padding: 0.8vw 0 0.8vw 1vw;
font-size: 1.6em;
background: #F9F9F9;
@media (max-width: ${({ theme }) => theme.tablet}) {
    border-bottom: 2px solid white;
    padding: 1vw;
    text-align: left;
    font-size: 1.4em;
}
`

const CardBack = styled(animated.div)`
grid-template-columns: 1fr 1fr 1fr;
will-change: transform, opacity;
margin: auto;
text-align: center;
background: #F9F9F9;
@media (max-width: ${({ theme }) => theme.tablet}) {
    /* display: grid; */
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr 1fr;
}
`

const BackLinks = styled.div`
color: black;
padding: 0.6vw 0;
font-size: 1.6em;
@media (max-width: ${({ theme }) => theme.tablet}) {
    font-size: 1.3em;
}
`

const Exercise = props => {

    const [flipped, setFlipped] = useState(true);
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        zIndex: flipped ? -10 : 10,
        transform: `rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 1, tension: 120, friction: 20 },
    })

    const mouseLeave = () => {
        setFlipped(true);
    }

    return (
        <TaskCard
            onMouseLeave={mouseLeave}
            onClick={() => setFlipped(state => !state)}
            title="Click to delete / edit.">

            <MobileHead>
                <Category>Username</Category>
                <Category>Description</Category>
                <Category>Duration</Category>
                <Category>Date</Category>
            </MobileHead>

            <CardFront style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`),
                            display: flipped == 0 ? "none" : "grid" }}>
                <Content>{props.exercise.username}</Content>
                <Content>{props.exercise.description}</Content>
                <Content>{props.exercise.duration}</Content>
                <Content>{props.exercise.date.substring(0, 10)}</Content>

            </CardFront>
            <CardBack style={{transform, zIndex: opacity == 1 ? -10 : 10, opacity: opacity.interpolate(o => 1 - o),
                            display: flipped == 0 ? "grid" : "none" }}>
                <Link to={'/edit/'+props.exercise._id}>
                    <BackLinks><strong>EDIT EXERCISE</strong></BackLinks>
                </Link>
                <BackLinks> CANCEL </BackLinks>
                <a href='#' onClick={() => { props.deleteExercise(props.exercise._id)}}>
                    <BackLinks><strong>DELETE EXERCISE</strong></BackLinks>
                </a> 
            </CardBack>
            
        </TaskCard>
    )
}

const ExerciseTable = () => {
    
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

export default ExerciseTable;