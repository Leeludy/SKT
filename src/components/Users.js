// Loading component's libraries
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/users.css';

// Function to load and render Users component
function UsersFetch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Make API request to get users
  useEffect(() => {
    axios.get('http://localhost:3030/users')
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  // Return Render table with users
  return (
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
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {
                        loading ? (
                          <div className="text-center">
                            <div className="spinner-border text-primary" role="status">
                              <span className="sr-only">Loading...</span>
                            </div>
                          </div>
                        ) : (
                          users.map((user) => (
                            <CTableRow key={user.id}>
                              <CTableDataCell>{user.id}</CTableDataCell>
                              <CTableDataCell>{user.first_name}</CTableDataCell>
                              <CTableDataCell>{user.last_name}</CTableDataCell>
                              <CTableDataCell>{user.email}</CTableDataCell>
                              <CTableDataCell>{user.access_level}</CTableDataCell>
                              <CTableDataCell>{user.notes}</CTableDataCell>
                            </CTableRow>
                          ))
                        )
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
};

export default UsersFetch;

