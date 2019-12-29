import React, { useState, useEffect, useContext } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import styled from 'styled-components';
import axios from 'axios';
import { UserContext } from '../Contexts/UserContext';
import { Head } from './ExerciseTable';
import { Submit, FormWrap, Form, Label, TextInput, RedStar, SelectBox, OptionBox } from './CreateExercise';


const EditExercise = props => {

    const { users } = useContext(UserContext);

    const [ theDate, setTheDate ] = useState( new Date() );

    let [ exercises, setExercises] = useState([{
        username: '',
        description: '',
        duration: '',
        date: '',
    }]);
    
    useEffect(() => {
        console.log("Retrieving exercise")
        axios.get('http://localhost:5000/exercises/' + props.match.params.id)
            .then(res => {
                console.log("Retrieved exercise: ", res.data);
                setExercises(res.data)
            })
            .catch(err => console.log('Problem retrieving exercise: ' + props.match.params.id, err));
    }, []);

    const handleSubmit = (e) => {
        if (exercises.description !== '' && exercises.duration !== 0) {
            e.preventDefault();
            
            axios.post('http://localhost:5000/exercises/update/' + props.match.params.id, exercises)
                .then(res => console.log(res.data))
                .catch(err => console.log("Problem uploading exercise", err))

            setTimeout(() => {window.location = '/'}, 900);
        } else {
            alert("Please fill in the entire form");
        }
    }

    const handleChange = e => {
        setExercises({...exercises, [e.target.name]: e.target.value, date: theDate });
    }

    const handleDate = date => {
        setTheDate(date);
    }

    return (
        <FormWrap>
            <Head>EDIT EXERCISE</Head>
            <Form onSubmit={handleSubmit}>
                <Label>Username: <RedStar>*</RedStar></Label>
                    <SelectBox
                        required
                        name="username"
                        value={exercises.username}
                        onChange={handleChange}
                        >
                        {users.map(user => (
                            <OptionBox
                                key={user}
                                value={user}
                            >{user}</OptionBox>
                        ))}
                    </SelectBox>
                <Label>Description: <RedStar>*</RedStar></Label>
                <TextInput
                    required
                    type="text"
                    name="description"
                    value={exercises.description}
                    onChange={handleChange}
                />
                <Label>Duration (minutes): <RedStar>*</RedStar></Label>
                <TextInput
                    required
                    type="number"
                    name="duration"
                    value={exercises.duration}
                    onChange={handleChange}
                    placeholder={0}
                    min={1}
                />
                <Label>Date:</Label>
                <DatePicker
                    selected={Date.parse(theDate)}
                    onChange={date => handleDate(date)}
                    onSelect={date => handleDate(date)}
                    dateFormat="dd/MM/yyyy"
                    name="date"
                />
                <div>
                    <Submit onSubmit={handleSubmit}>Submit</Submit>
                </div>
            </Form>
        </FormWrap>
    )
}

export default EditExercise;
