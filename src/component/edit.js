import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditUser() {
    const { id } = useParams();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://servercrud.onrender.com/User/getuser/' + id)
            .then(result => {
                console.log(result)
                setName(result.data.name)
                setEmail(result.data.email)
                setAge(result.data.age)
            })
            .catch(err => console.log(err))

    }, [id])



    const Updata = (e) => {
        e.preventDefault();
        axios.put("https://servercrud.onrender.com/User/edituser/" + id, { name, email, age })
            .then(result => {
                console.log(result)
                navigate('/list');
            })
            .catch(err => console.log('sad' + err))
    }

    return (
        <div>
            <h3>Edit User</h3>
            <form onSubmit={Updata}>
                <div className="form-group">
                    <label>Person Name: </label>
                    <input type="text"
                        placeholder='Enter name'
                        className="form-control"
                        value={name} onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input type="text"
                        className="form-control"
                        placeholder='Enter Email'
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Age: </label>
                    <input type="text"
                        placeholder='Enter Age'
                        className="form-control"
                        value={age} onChange={(e) => setAge(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <button className='btn btn-success mt-2'>Updata</button>
                </div>
            </form>
        </div>
    );

};
export default EditUser;
