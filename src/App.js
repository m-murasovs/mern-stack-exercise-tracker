import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar} from './Components/Navbar';
import ExerciseTable from './Components/ExerciseTable';
import EditExercise from './Components/EditExercise';
import CreateExercise from './Components/CreateExercise';
import CreateUser from './Components/CreateUser';
import ExerciseContextProvider from './Contexts/ExerciseContext';
import UserContextProvider from './Contexts/UserContext';
import GlobalStyles from './Global';
import { theme } from './theme.js';
import './App.css';

const BodyWrap = styled.div`
padding-top: 13vw;
width: 100%;
margin: auto;
background:  ${({ theme }) => theme.primaryLight})
@media (max-width: ${({ theme }) => theme.mobile}) {
    padding-top: 24vw;
    }
`

const App = () => {
    return (
        <ThemeProvider theme={theme} >
        <UserContextProvider>
        <ExerciseContextProvider>
            <GlobalStyles />
            <Router>
                <Navbar/>
                <BodyWrap>
                    <Switch>
                        <Route path="/" exact component={ExerciseTable} />
                        <Route path="/edit/:id" component={EditExercise} />
                        <Route path="/create" component={CreateExercise} />
                        <Route path="/user" component={CreateUser} />
                    </Switch>
                </BodyWrap>
            </Router>
        </ExerciseContextProvider>
        </UserContextProvider>
        </ThemeProvider>
    );
}

export default App;
