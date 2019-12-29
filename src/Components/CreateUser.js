import React, { useState, useContext } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import { UserContext } from '../Contexts/UserContext';
import { Submit, FormWrap, Form, Label, TextInput, RedStar } from './CreateExercise';
import { Head } from './ExerciseTable';

const CreateExercise = () => {
    const { addUser } = useContext(UserContext);

    const [ user, setUser ] = useState({
        username: ''
    });

    const handleSubmit = e => {
        if (user !== '') {
            e.preventDefault();
            setUser(e.target.value);
            addUser(user);
            setUser({username: ''});
        }
    }

    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value });
    }

    return (
        <FormWrap>
            <Head>CREATE NEW USER</Head>
            <Form onSubmit={handleSubmit}>
                <div>
                    <Label>Username: <RedStar>*</RedStar></Label>
                    <TextInput
                        required
                        type="text"
                        name="username"
                        className="form-control"
                        onChange={handleChange}
                        value={user.username}
                    />
                </div>
                <Submit onClick={handleSubmit}>Submit</Submit>
            </Form>
        </FormWrap>
    )
}

export default CreateExercise;