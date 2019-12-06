import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import styled from 'styled-components';
import axios from 'axios';

const EditExercise = props => {

    const [ theDate, setTheDate ] = useState( new Date() );

    let [ exercises, setExercises] = useState([{
        username: '',
        description: '',
        duration: '',
        date: '',
    }]);
    
    let [ users, setUsers ] = useState([]);
    
    useEffect(() => {
        console.log("Retrieving exercise")
        axios.get('http://localhost:5000/exercises/'+props.match.params.id)
            .then(res => {
                console.log("Retrieved exercise: ", res.data);
                setExercises(res.data)
            })
            .catch(err => console.log('Problem retrieving exercise: ' + props.match.params.id, err));

        axios.get('http://localhost:5000/users/')
            .then(res => {
                if (res.data.length > 0) {
                setUsers(res.data.map(user => user.username))
                }
            })
            .catch(err => {
                console.log("Problem retrieving users.", err);
        })
    }, []);

    const handleSubmit = (e) => {
        if (exercises.description !== '') {
            e.preventDefault();
            setExercises({
                username: e.target.value,
                description: e.target.value,
                duration: e.target.value,
                date: theDate,
            })
            
            axios.post('http://localhost:5000/exercises/update/' + props.match.params.id, exercises)
                .then(res => console.log(res.data))
                .catch(err => console.log("Problem uploading exercise", err))
        }
    }

    const handleChange = e => {
        setExercises({...exercises, [e.target.name]: e.target.value, date: theDate });
    }

    const handleDate = date => {
        setTheDate(date);
    }

    return (
        <div>
            <h3>Edit Exercise</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>
                        Username:</label>
                        <select
                            required
                            className="form-control"
                            name="username"
                            value={exercises.username}
                            onChange={handleChange}
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
                        value={exercises.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Duration (minutes):</label>
                    <input
                        required
                        type="number"
                        name="duration"
                        className="form-control"
                        value={exercises.duration}
                        onChange={handleChange}
                        placeholder={0}
                    />
                </div>
                <div className="form-group">
                    <label>Date:</label>
                    <DatePicker
                        selected={Date.parse(theDate)}
                        onChange={date => handleDate(date)}
                        onSelect={date => handleDate(date)}
                        dateFormat="dd/MM/yyyy"
                        name="date"
                        
                    />
                </div>
                <button onSubmit={handleSubmit}>Submit</button>
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

    // const handleSubmit = e => {
    //     if (exercise.description !== '') {
    //         e.preventDefault();
    //         setExercise({
    //             username: e.target.value,
    //             description: e.target.value,
    //             duration: e.target.value,
    //             date: theDate,
    //         })
    //         addExercise(exercise);
            
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