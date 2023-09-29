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
        axios.post("http://localhost:3001/User/createUser", { name, email, age })
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
                    <input type="text" className="form-control"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Email: </label>
                    <input type="text" className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Age: </label>
                    <input type="text" className="form-control"
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    );

};
export default CreateUser;
