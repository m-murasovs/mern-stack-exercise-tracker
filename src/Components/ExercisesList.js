import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { ExerciseContext } from '../Contexts/ExerciseContext';
// import { UserContext } from '../Contexts/UserContext';
// import styled from 'styled-components';

const ExercisesList = () => {
    const { exercises } = useContext(ExerciseContext);

    const [ exercise, setExercise ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/exercises')
            .then(res => {
                if (res.data.length > 0) {
                    console.log(res.data)
                    setExercises(res.data.map(exr => exr));
                }
            })
            .catch(err => console.log("Problem retrieving exercises.", err))
    }, []);

    // const { users } = useContext(UserContext);
    return (
        <div>
            THE LIST
            <br/>
            <br/>
            
        </div>
    )
}

export default ExercisesList;