import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import styled from 'styled-components';
import axios from 'axios';
// import { ExerciseContext } from '../Contexts/ExerciseContext';
// import { UserContext } from '../Contexts/UserContext';

const EditExercise = props => {

    let [ exercises, setExercises] = useState([]);
    
    let [ users, setUsers ] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:5000/exercises/'+props.match.params.id)
            .then(res => {
                console.log(res.data);
                if (res.data.length > 0) {
                    setExercises(res.data);
                    console.log(exercises);
                }
            })
            .catch(err => console.log('Problem retrieving exercise: ' + props.match.params.id, err));

        axios.get('http://localhost:5000/users/')
            .then(res => {
                if (res.data.length > 0) {
                setUsers(res.data.map(user => user.username))
                }
            })
            .catch(err => {
                console.log(err);
        })
    }, []);

    console.log(exercises);

    return (
        <div>
            <h3>Edit Exercise</h3>
            <form >
                <div className="form-group">
                    <label>
                        Username:</label>
                        <select
                            required
                            className="form-control"
                            name="username"
                            value={exercises.username}
                            // onChange={handleChange}
                            >
                            {users.map(user => (
                                <option
                                    key={user}
                                    value={user}
                                >{user}</option>
                            ))}
                        </select>
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <input
                        required
                        type="text"
                        name="description"
                        className="form-control"
                        // value={exercise.description}
                        // onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Duration (minutes):</label>
                    <input
                        required
                        type="number"
                        name="duration"
                        className="form-control"
                        // value={exercise.duration}
                        // onChange={handleChange}
                        placeholder={0}
                    />
                </div>
                <div className="form-group">
                    <label>Date:</label>
                    <DatePicker
                        // selected={theDate}
                        // onChange={date => handleDate(date)}
                        // onSelect={date => handleDate(date)}
                        dateFormat="dd/MM/yyyy"
                        name="date"
                        
                    />
                </div>
                <button >Submit</button>
            </form>
        </div>
    )
}

export default EditExercise;


// const { addExercise } = useContext(ExerciseContext);

//     const { users } = useContext(UserContext);

//     let [ users2, setUsers2 ] = useState('');

//     const [ theDate, setTheDate ] = useState(new Date ());

//     const [ exercise, setExercise ] = useState({
//         username: '',
//         description: '',
//         duration: '',
//         date: '',
//     })

//     useEffect(() => {
//         axios.get('http://localhost:5000/exercises'+props.params.match.id)
//             .then(res => {
//                 if (res.data.length > 0) {
//                     setExercise(res.data.map(exr => exr));
//                 }
//             })
//             .catch(err => console.log("Problem retrieving exercises.", err))

//         axios.get('http://localhost:5000/users/')
//             .then(res => {
//                 if (res.data.length > 0) {
//                 setUsers2(res.data.map(user => user.username))
//                 }
//             })
//             .catch((error) => {
//                 console.log(error);
//             })
//     }, []);

//     const handleSubmit = e => {
//         if (exercise.description !== '') {
//             e.preventDefault();
//             setExercise({
//                 username: e.target.value,
//                 description: e.target.value,
//                 duration: e.target.value,
//                 date: theDate,
//             })
//             addExercise(exercise);
            
//             axios.post('http://localhost:5000/exercises/update/'+props.match.params.id, exercise)
//                 .then(res => console.log(res.data))
//                 .catch(err => console.log("Problem submitting task.", err))
//         }
//         window.location = "/";
//     }

//     const handleChange = e => {
//         setExercise({...exercise, [e.target.name]: e.target.value, date: theDate });
//     }

//     const handleDate = date => {
//         setTheDate(date);
//     }