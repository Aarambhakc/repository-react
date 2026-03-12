import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";

 const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

  const url = "http://localhost:3000/users/"+id;

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(url);
      response = await response.json();
      console.log(response);
      setFirstName(response.firstName)
      setLastName(response.lastName)
      setAge(response.age)
      setGender(response.gender)
      setEmail(response.email)
    };
    fetchData();
  }, [url]);


  const handleUpdate = async() => {
    let response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify({
            firstName, lastName,
            age,
            gender,
            email,
        }),
    });

    response = await response.json();

    if(response){
        alert("User updated successfully");
        navigate("/user");
    }
  }
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Edit User Page</h1>
      <input
        type="text"
        placeholder="Enter Firstname"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter lastname"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default EditUser;