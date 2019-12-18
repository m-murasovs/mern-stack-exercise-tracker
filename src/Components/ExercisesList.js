import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExerciseContext } from '../Contexts/ExerciseContext';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

const TableWrap = styled.div`
overflow-x: auto;
margin: auto;
padding-bottom: 4vw;
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

const BackLinks = styled.div`
color: black;
padding: 0.6vw 0;
font-size: 1.6em;
`

const TaskCard = styled(animated.div)`
width: 70%;
margin: 1.2vw auto;
transition: box-shadow 0.5s;
will-change: transform;
border-radius: 5px;
&:hover {
    cursor: pointer;
    background-color: #FFF;
    box-shadow: 0px 5px 30px -10px rgba(0, 0, 0, 0.4);
}
`

const CardFront = styled(animated.div)`
display: grid;
grid-template-columns: 1fr 1.5fr 1fr 1fr;
will-change: transform, display;
width: 100%;
margin: auto;
`

const CardBack = styled(animated.div)`
display: grid;
grid-template-columns: 1fr 1em 1fr;
will-change: transform, display;
width: 100%;
margin: auto;
text-align: center;
`

// Functions for the grow animation
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `scale(${s})`;


const Exercise = props => {

    const [grow, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 210, friction: 20 } }))
    const [flipped, setFlipped] = useState(true);
    const { transform } = useSpring({
        display: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 1, tension: 210, friction: 20 }
    })

    const mouseLeave = () => {
        set({ xys: [0, 0, 1] });
        setFlipped(true);
    }

    return (
        <TaskCard
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={mouseLeave}
            style={{ transform: grow.xys.interpolate(trans) }}
            onClick={() => setFlipped(state => !state)}
        >
            <CardFront style={{transform: transform.interpolate(t => `${t} rotateX(180deg)`), 
                        display: flipped ? "grid" : "none" }}>
                <Content>{props.exercise.username}</Content>
                <Content>{props.exercise.description}</Content>
                <Content>{props.exercise.duration}</Content>
                <Content>{props.exercise.date.substring(0, 10)}</Content>
            </CardFront>

            <CardBack style={{transform, display: flipped ? "none" : "grid"}}>
                <Link to={'/edit/'+props.exercise._id}><BackLinks>EDIT EXERCISE</BackLinks></Link>
                <BackLinks> | </BackLinks>
                <a href='#' onClick={() => { props.deleteExercise(props.exercise._id)}}>
                    <BackLinks>DELETE EXERCISE</BackLinks></a> 
            </CardBack>
        </TaskCard>
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