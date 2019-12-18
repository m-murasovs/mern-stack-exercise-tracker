import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar} from './Components/Navbar';
import ExercisesList from './Components/ExercisesList';
import EditExercise from './Components/EditExercise';
import CreateExercise from './Components/CreateExercise';
import CreateUser from './Components/CreateUser';
import ExerciseContextProvider from './Contexts/ExerciseContext';
import UserContextProvider from './Contexts/UserContext';
import GlobalStyles from './Global';
import { theme } from './theme.js';

const BodyWrap = styled.div`
padding-top: 16vw;
width: 70%;
margin: auto;
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
                        <Route path="/" exact component={ExercisesList} />
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
