import React, { useState } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar} from './Components/Navbar';
import ExercisesList from './Components/ExercisesList';
import EditExercise from './Components/EditExercise';
import CreateExercise from './Components/CreateExercise';
import CreateUser from './Components/CreateUser';

const BodyWrap = styled.div`
padding-top: 80px;
`

const App = () => {
  return (
    <Router>
        <Navbar/>
        <BodyWrap>
            <Route path="/" exact component={ExercisesList} />
            <Route path="/edit/:id" component={EditExercise} />
            <Route path="/create" component={CreateExercise} />
            <Route path="/user" component={CreateUser} />
        </BodyWrap>
    </Router>
  );
}

export default App;
