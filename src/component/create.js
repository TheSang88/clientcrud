import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        axios.post("https://servercrud.onrender.com/User/createUser", { name, email, age })
            .then(result => {
                console.log(result)
                navigate('/list');
            })
            .catch(err => console.log('sad' + err))
    }
    return (
        <div>
            <h3>Add New User</h3>
            <form onSubmit={Submit} >
                <div className="form-group">
                    <label>Person Name: </label>
                    <input type="text"
                        placeholder='Enter name'
                        className="form-control"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Email: </label>
                    <input type="text"
                        placeholder='Enter Email'
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Age: </label>
                    <input type="text"
                        placeholder='Enter Age'
                        className="form-control"
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                </div>
                <button className='btn btn-success mt-2'>Submit</button>
            </form>
        </div>
    );

};
export default CreateUser;
