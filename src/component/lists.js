import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import VariantsSpinner from './Spinner.js'
function User() {

    const [users, setUser] = useState([{
        Name: "sang", Email: "sang@gmail.com", Age: "20"
    }]);

    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        axios.get('https://servercrud.onrender.com/User/listuser')
            .then(result => {
                setLoading(false);
                setUser(result.data)
            })
            .catch(err => {
                setLoading(true);
                console.log(err)
            })
    }, [])





    const handleDelete = (id) => {
        axios.delete('https://servercrud.onrender.com/User/deleteUser/' + id)
            .then(res => {
                console.log(res)
                window.location.reload()
            })

            .catch(errr => console.log(errr))
    }








    return (
        <div>


            <h3 className="form-group" align="center">Persons List</h3>
            <Link to='/create' className='btn btn-success form-group'>ADD +</Link>
            <Table striped bordered hover className="table table-striped form-group" style={{ marginTop: 20 }}>

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th colSpan="2">Action</th>
                    </tr>
                </thead>
                {loading ? (<VariantsSpinner />) : (
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
                )}
            </Table>



        </div>

    );
};
export default User;
