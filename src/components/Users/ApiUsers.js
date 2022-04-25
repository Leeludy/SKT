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


    // Form values schema
    const [data, setData] = useState({

        first_name: '',
        last_name: '',
        email: '',
        password: '',
        role: '',
        notes: ''
    });


    // Handle change event of form fields and bind to constant
    function handleChange(e) {
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
    };


    // Add new user
    const handleSubmit = (e) => {
        e.preventDefault();

        // Create new user width binded data
        const newUser = { ...data };

        // Send the new user to the server
        axiosFetch({
            axiosInstance: axios,
            method: 'post',
            url: '/users/new',
            headers: { 'Content-Type': 'multipart/form-data' },
            requestConfig: newUser
        })
            .then(() => {
                getData();
                setData({}); // clear form
                setHidden(s => !s);
            });
    };


    // Delete user with :id (/users/:id)
    const deleteUser = (id) => {
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


    // Update user with :id (/users/:id)

    const editUser = (user) => {

        console.log(`Edit user no. ${user.id}`);
        console.log(user.first_name);







        // setHidden(s => !s);

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


                                    {/* New user's form */}
                                    {!hidden ? // Hide new user form until user clicks on "Add new user" button

                                        <form onSubmit={handleSubmit} className="newUser">
                                            <h2 className="py-2">New User</h2>
                                            <div className="form-group">
                                                <label htmlFor="first_name">First Name</label>
                                                <input
                                                    onChange={(e) => handleChange(e)}
                                                    type="text"
                                                    className="form-control"
                                                    id="first_name"
                                                    placeholder="First name"
                                                    value={data.first_name}

                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="last_name">Last Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="last_name"
                                                    name="last_name"
                                                    placeholder="Last Name"
                                                    value={data.last_name}
                                                    onChange={(e) => handleChange(e)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    value={data.email}
                                                    onChange={(e) => handleChange(e)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password">Password</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="password"
                                                    name="password"
                                                    placeholder="Password"
                                                    value={data.password}
                                                    onChange={(e) => handleChange(e)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="role">Role</label>
                                                <select
                                                    className="form-control"
                                                    name="role"
                                                    id="role"
                                                    value={data.role}
                                                    onChange={(e) => handleChange(e)}>
                                                    <option>Admin</option>
                                                    <option>Product Admin</option>
                                                    <option>Pilot</option>
                                                </select>
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor="notes">Notes</label>
                                                <textarea
                                                    className="form-control"
                                                    id="notes"
                                                    name="notes"
                                                    placeholder="Relevant notes..."
                                                    rows="3"
                                                    value={data.notes}
                                                    onChange={(e) => handleChange(e)}>
                                                </textarea>
                                            </div>
                                            <div>
                                                <button onClick={(e) => { setHidden(s => !s); }}
                                                    type="button" className="btn btn-danger btn-md m-3">Cancel</button>
                                                <button type="submit" className="btn btn-success">Submit</button>
                                            </div>
                                        </form>

                                        : null}
                                    {/* End of user's form */}

                                </div>
                                {hidden ? //Hide 'Add new user' button if new user form is visible

                                    <div>
                                        <button onClick={(e) => {
                                            setHidden(s => !s);
                                        }} type="button" className="btn btn-success btn-md m-3">Add New User</button>
                                    </div>

                                    : null}
                                {/* List of users */}
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h2>Active Users</h2>
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
                                                                <CTableDataCell><button onClick={() => editUser(user)} className="btn btn-outline-dark btn-sm" type="button">Edit</button></CTableDataCell>
                                                                <CTableDataCell><button onClick={() => deleteUser(user.id)} className="btn btn-outline-danger btn-sm" type="button">Del</button></CTableDataCell>
                                                            </CTableRow>
                                                        ))
                                                    }
                                                </CTableBody>
                                            </CTable>
                                        </div>
                                    </div>
                                </div>
                                {/* End of user's list */}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Users;