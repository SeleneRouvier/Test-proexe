import React from 'react';
import './styles.css';

export const UsersTable = ({ usersList }) => {

  console.log('users', usersList)

  return (
    <div className="container-table rounded bg-light">
      <table className="table">
        <thead>
          <tr className="text-center">
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">City</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {usersList?.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address.street}</td>
              <td>
                <button type="button" className="btn btn-warning">
                  Edit
                </button>
              </td>
              <td>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
