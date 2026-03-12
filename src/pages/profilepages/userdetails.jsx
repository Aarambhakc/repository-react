import React from 'react'
import {Link, useParams} from 'react-router';

 const UserDetails = () => {
  const {id} = useParams();
  console.log(id);
  return (
    <div>
        <h1>User Detail page</h1>

        <h2>User Id is: {id}</h2>

        <Link to={"/user"}>Back to Users</Link>
    </div>
  )
}
export default UserDetails;