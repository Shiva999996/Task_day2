import React from 'react';
import './Display.css';

const Display = ({ users }) => {
  if (users.length === 0) 
    return <p className="no-users">No users yet</p>;

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.address}</td>
              <td>{u.phone_no}</td>
              <td>{u.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Display;
