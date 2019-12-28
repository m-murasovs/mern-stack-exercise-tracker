import React, { useState, useContext } from 'react';
import { ExerciseContext } from '../Contexts/ExerciseContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import { UserContext } from '../Contexts/UserContext';
import { Head } from './ExerciseTable';

export const FormWrap = styled.div`
width: 100%;
@media (max-width: ${({ theme }) => theme.tablet}) {
    padding-top: 4vw;
}
`

export const Form = styled.form`
width: 70%;
margin: 0 auto;
`

export const Label = styled.p`
font-family: ${({ theme }) => theme.primaryFont };
font-size: 1.6em;
margin: 0.7em auto 0.3em auto;
`

export const SelectBox = styled.select`
height: 3em;
width: 100%;
border: solid lightgrey 1px;
border-radius: 0.2em;
padding-left: 0.5em;
font-size: 1.6em;
font-family: ${({ theme }) => theme.primaryFont };
background: url("http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png") no-repeat right;
    -webkit-appearance: none;
    background-position: 98%;

&:hover {
    border: solid black 1px;
    cursor: pointer;
}
&:focus {
    border: solid black 1px;
}
`

const OptionBox = styled.option`
background: #FFFFFF;
font-size: 1em;
`

export const TextInput = styled.input`
height: 3em;
width: 100%;
border: solid lightgrey 1px;
border-radius: 0.2em;
padding-left: 0.5em;
font-size: 1.6em;
font-family: ${({ theme }) => theme.primaryFont };
&:hover {
    border: solid black 1px;
}
&:focus {
    border: solid black 1px;
}
&::-webkit-inner-spin-button, 
::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  -moz-appearance: none;
  margin: 0; 
}
&::-ms-expand {
     display: none;
}
`

export const Submit = styled.button`
font-size: 1.6em;
padding: 1vw 2vw;
border-radius: 0.2em;
border: solid 2px black;
background: black;
color: white;
margin-top: 1.8em;
`

export const RedStar = styled.span`
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
        <OptionBox key={ user } value={ user }> {user} </OptionBox>
    ))
    return (
        <FormWrap>
            <Head>ADD EXERCISE</Head>
            <Form onSubmit={handleSubmit}>
                
                <Label>Username <RedStar>*</RedStar></Label>
                        <SelectBox
                        required
                        name="username"
                        onChange={handleChange}
                        value={exercise.username}
                        >
                            <OptionBox>Please select user</OptionBox>
                            {list}
                        </SelectBox>
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
                        min={0}
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
        </FormWrap>
    )
}

export default CreateExercise;