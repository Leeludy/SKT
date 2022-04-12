import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CTable, CTableBody, CTableDataCell, CTableFoot, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import './styles/users.css';

function UsersFetch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3030/users')
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.first_name} {user.last_name} {user.email}
        </li>
      ))}

      {loading && <p>Loading...</p>}


    </ul>



  )
}

export default UsersFetch;

