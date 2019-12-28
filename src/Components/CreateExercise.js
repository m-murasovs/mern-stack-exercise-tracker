import React, { useState, useContext } from 'react';
import { ExerciseContext } from '../Contexts/ExerciseContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import { UserContext } from '../Contexts/UserContext';
import { Head } from './ExerciseTable';

export const Form = styled.form`
width: 70%;
margin: auto;
`

export const Label = styled.p`
font-family: ${({ theme }) => theme.primaryFont };
font-size: 1.6em;
margin: 1em auto 0.3em auto;
`

export const TextInput = styled.input`
height: 3em;
width: 100%;
border: solid grey 1px;
border-radius: 0.2em;
padding-left: 0.5em;
font-size: 1.6em;
font-family: ${({ theme }) => theme.primaryFont };
&:active {
    border: solid black 1px;
}
`

export const Submit = styled.button`
font-size: 1.6em;
padding: 1vw 2vw;
border-radius: 0.2em;
border: solid 2px black;
background: black;
color: white;
margin-top: 2vw;
`

const RedStar = styled.span`
color: red;
`

const CreateExercise = () => {
    const { addExercise } = useContext(ExerciseContext);
    const { users } = useContext(UserContext);
    const [ theDate, setTheDate ] = useState(new Date ());

    const [ exercise, setExercise ] = useState({
        username: '',
        description: '',
        duration: '',
        date: '',
    })

    const handleSubmit = e => {
        if (exercise.username !== '' || exercise.description !== '' ||
        exercise.duration !== '') {
            e.preventDefault();
            setExercise({
                username: e.target.value,
                description: e.target.value,
                duration: e.target.value,
                date: theDate,
            })
            addExercise(exercise);
            console.log("Adding exercise:", exercise);
        } else {
            alert("Please complete the entire form.")
        }
    }
    const handleChange = e => {
        setExercise({...exercise, [e.target.name]: e.target.value, date: theDate });
    }
    const handleDate = date => {
        setTheDate(date);
    }
    const list = users.map(user => (
        <option key={ user } value={ user }> {user} </option>
    ))
    return (
        <div>
            <Head>Add Exercise</Head>
            <Form onSubmit={handleSubmit}>
                
                <Label>Username <RedStar>*</RedStar></Label>
                        <select
                        required
                        name="username"
                        onChange={handleChange}
                        value={exercise.username}
                        >
                            <option>Please select user</option>
                            {list}
                        </select>
                <Label>Description <RedStar>*</RedStar></Label>
                    <TextInput
                        required
                        type="text"
                        name="description"
                        value={exercise.description}
                        onChange={handleChange}
                        placeholder="Running"
                    />
                <Label>Duration (minutes) <RedStar>*</RedStar></Label>
                    <TextInput
                        required
                        type="number"
                        name="duration"
                        value={exercise.duration}
                        onChange={handleChange}
                        placeholder={0}
                    />
                <Label>Date <RedStar>*</RedStar></Label>
                    <DatePicker
                        selected={theDate}
                        onChange={date => handleDate(date)}
                        onSelect={date => handleDate(date)}
                        dateFormat="dd/MM/yyyy"
                        name="date"
                    />
                <div>
                    <Submit onClick={handleSubmit}>Submit</Submit>
                </div>
            </Form>
        </div>
    )
}

export default CreateExercise;