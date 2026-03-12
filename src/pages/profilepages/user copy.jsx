import React from 'react'
import { Link } from 'react-router';

const User = () => {
    const userData = [
        {id: 1, name: "Sasan"},
        {id: 2, name: "Aashray"},
        {id: 3, name: "Adhyay"},
    ];
  return (
    <div>
      <h1>User List</h1>

      {userData.map((user) => (
        <div key={user.id}>
            <Link to={`/profile/user/${user.id}`}>{user.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default User;