import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar} from './Components/Navbar';
import ExercisesList from './Components/ExercisesList';
import EditExercise from './Components/EditExercise';
import CreateExercise from './Components/CreateExercise';
import CreateUser from './Components/CreateUser';
import ExerciseContextProvider from './Contexts/ExerciseContext';

const BodyWrap = styled.div`
padding-top: 80px;
`

const App = () => {
    return (
        <ExerciseContextProvider>
            <Router>
                <Navbar/>
                <BodyWrap>
                    <Switch>
                    <Route path="/" exact component={ExercisesList} />
                    <Route path="/edit/:id" component={EditExercise} />
                    <Route path="/create" component={CreateExercise} />
                    <Route path="/user" component={CreateUser} />
                    </Switch>
                </BodyWrap>
            </Router>
        </ExerciseContextProvider>
    );
}

export default App;
