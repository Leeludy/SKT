import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';

// Function to load and render Users component
function UsersFetch() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  // Make API request to get users
  useEffect(() => {
    axios.get('http://localhost:3030/users')
      .then((res) => {
        
        if (res.statusText !== "OK") {
          throw new Error(res.statusText);
        }
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.response) {
          // Request made and server responded
          // console.log(err.response.data);
          console.log(err.response.status);
          setErrorMessage(`Sorry: ${err.message} - Please try again later.`);
          // console.log(err.response.headers);
        } else if (err.request) {
          // The request was made but no response was received
          // console.log(err.data);
          setErrorMessage("Sorry: Server is not responding - Please try again later.");
        } else {
          // Something happened in setting up the request that triggered an Error
          
        }
        setErrorMessage(`Sorry: ${err.message} - Please try again later.`);
      });
  }, []);

  const editUser = (id) => {
    console.log(`Edit user no. ${id}`);
  };

  const deleteUser = (id) => {
    console.log(`Delete user no. ${id}`);
  };

  const renderUsers = (
    
    <div className="container py-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Users</h3>
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
                        users.map((user) => (
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
  );

  
                      
  // If there is an error, render error message.
  if (errorMessage) {
    return (
      <div className="error">
        {errorMessage}
      </div>
    );

  };
  // Render ender Users component.
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {renderUsers}
    </div>
  )
                    
};

export default UsersFetch;
