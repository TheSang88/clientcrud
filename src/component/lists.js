import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function User() {

    const [users, setUser] = useState([{
        Name: "sang", Email: "sang@gmail.com", Age: "20"
    }]);

    useEffect(() => {
        axios.get('http://localhost:3001/User/listuser')
            .then(result => setUser(result.data))
            .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/User/deleteUser/' + id)
            .then(res => {
                console.log(res)
                window.location.reload()
            })

            .catch(errr => console.log(errr))
    }
    return (
        <div>
            <h3 align="center">Persons List</h3>
            <Link to='/create' className='btn btn-success'>ADD +</Link>
            <table className="table table-striped" style={{ marginTop: 20 }}>

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => {
                            return (
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>
                                        <Link to={'/edit/' + user._id} className='btn btn-success'>update</Link>
                                        <button className='btn btn-danger'
                                            onClick={(e) => handleDelete(user._id)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};
export default User;
