import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

const User = () => {
  const navigate = useNavigate();
  const url='http://localhost:3000/users';
  const[userData ,setUserData]=useState([]);
  const[loading, setloading] = useState(false);

  
  const fetchUserData=async()=>{
    setloading(true);
    let response= await fetch(url);
    response= await response.json();
    setUserData(response);
    setloading(false);
  };
  useEffect(() => {
    fetchUserData();
  }, []);


    const handleDelete = async (id) => {
    let response = await fetch(url + "/" + id, {
      method: "DELETE",
    });
    response = await response.json();
    if (response) {
      alert("User deleted successfully");
      fetchUserData();
    } else {
      alert("Failed to delete user");
    }
  };

  const handleEdit = (id) => {
    navigate(`/EditUser/${id}`);
  };
  return (
    <div style={{ padding: 20 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <h1>User List</h1>
        <Link to={"/addUser"}>Add User</Link>
      </div>

        {loading ? (
        <h1>loading</h1>
        ) : (
      <table border="1" cellPadding="10" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th style={{ textAlign: "start" }}>ID</th>
            <th style={{ textAlign: "start" }}> First Name</th>
            <th style={{ textAlign: "start" }}> Last Name</th>
            <th style={{ textAlign: "start" }}>Age</th>
            <th style={{ textAlign: "start" }}>Gender</th>
            <th style={{ textAlign: "start" }}>Email</th>
              <th style={{ textAlign: "start" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleEdit(user.id)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        )}
    </div>
  );
};

export default User;