import useAxios from "../../hooks/useAxios";
import { useEffect, useState } from "react";
import axios from '../../hooks/AxiosInstance';

import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';


// User's component function
const Users = () => {
    const [users, error, loading, axiosFetch] = useAxios();
    const [hidden, setHidden] = useState(true);

    // Configure the axios request
    const getData = () => {
        axiosFetch({
            axiosInstance: axios,
            method: 'get',
            url: '/users'
        });
    }

    // Execute the axios request
    useEffect(() => {
        getData();
        // eslint-disable-next-line 
    }, []);

    // Add new user
    const handleSubmit = (e) => {
        e.preventDefault();
        // Pass data from New user form <<<<---- IMPORTANT
        axiosFetch({
            axiosInstance: axios,
            method: 'post',
            url: '/users/new',
            requestConfig: {

                first_name: 'Test',
                last_name: 'Doe',
                email: 'john@beweb.com',
                password: 'password123',
                role: 'Product Admin',
                notes: 'Headache Admin'
            }
        })
            .then(() => {
                getData();
            });
    };

    // Delete user with :id (/users/:id)
    const deleteUser = (id) => {
        console.log(`Delete user no. ${id}`);
        axiosFetch({
            axiosInstance: axios,
            method: 'delete',
            url: `/users/${id}`,
            requestConfig: {}
        })
            .then(() => {
                getData();
            });
    };

    // Updates user with :id (/users/:id)
    const editUser = (id) => {
        setHidden(s => !s);
        // load user data and pass it to form placeholder <<<<---- IMPORTANT
    };

    // Render User's table
    return (
        <div>

            {loading && <p>Loading...</p>}
            {!loading && error && <p className="errMsg">{error}</p>}
            {!loading && !error && users?.length &&

                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Active Users</h3>

                                    {/* User edit form */}
                                    {!hidden ? <form>
                                        <div className="form-group">
                                            <label htmlFor="first_name">First Name</label>
                                            <input type="text" className="form-control" id="first_name" placeholder="{user.id.first_name}" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="last_name">Last Name</label>
                                            <input type="text" className="form-control" id="last_name" placeholder="Last Name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" className="form-control" id="email" placeholder="Email" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" className="form-control" id="password" placeholder="Password" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="role">Role</label>
                                            <select className="form-control" id="role">
                                                <option>Product Admin</option>
                                                <option>Headache Admin</option>
                                                <option>Headache User</option>
                                            </select>
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="notes">Notes</label>
                                            <textarea className="form-control" id="notes" rows="3"></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-success">Submit</button>
                                    </form> : null}
                                    {/* End of User edit form */}

                                    <button onClick={handleSubmit} type="button" className="btn btn-success btn-md m-3">Add New User</button>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <CTable striped>
                                                <CTableHead>
                                                    <CTableRow>
                                                        <CTableHeaderCell>ID</CTableHeaderCell>
                                                        <CTableHeaderCell>Name</CTableHeaderCell>
                                                        <CTableHeaderCell>Last Name</CTableHeaderCell>
                                                        <CTableHeaderCell>email</CTableHeaderCell>
                                                        <CTableHeaderCell>Role</CTableHeaderCell>
                                                        <CTableHeaderCell>Notes</CTableHeaderCell>
                                                        <CTableHeaderCell></CTableHeaderCell>
                                                        <CTableHeaderCell></CTableHeaderCell>
                                                    </CTableRow>
                                                </CTableHead>
                                                <CTableBody>
                                                    {
                                                        users && users.length >= 1 && users.map((user) =>
                                                        (
                                                            <CTableRow key={user.id}>
                                                                <CTableDataCell>{user.id}</CTableDataCell>
                                                                <CTableDataCell>{user.first_name}</CTableDataCell>
                                                                <CTableDataCell>{user.last_name}</CTableDataCell>
                                                                <CTableDataCell>{user.email}</CTableDataCell>
                                                                <CTableDataCell>{user.role}</CTableDataCell>
                                                                <CTableDataCell>{user.notes}</CTableDataCell>
                                                                <CTableDataCell><button onClick={() => editUser(user.id)} className="btn btn-outline-dark btn-sm" type="button">Edit</button></CTableDataCell>
                                                                <CTableDataCell><button onClick={() => deleteUser(user.id)} className="btn btn-outline-danger btn-sm" type="button">Del</button></CTableDataCell>
                                                            </CTableRow>
                                                        ))
                                                    }
                                                </CTableBody>
                                            </CTable>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Users;