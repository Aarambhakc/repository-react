import React, { useState } from 'react'
import { useNavigate } from 'react-router';

export const AddUser = () => {
  const navigate = useNavigate()
  const[firstName, setFirstName]=useState("");
  const[lastName, setLastName]=useState ("");
  const[age, setAge]=useState("");
  const[gender, setGender]=useState("");
  const[email, setEmail]=useState("");

  const handleSubmit= async()=>{
    const url='http://localhost:3000/users';
    let response=await fetch(url,{
        method:"POST",
    body:JSON.stringify({
      firstName,
      lastName,
      age,
      gender,
      email,
    }),
    });
  
    response= await response.json();
    if(response){
      alert("User added successfully");
      navigate('/user')
    }
    else{
      alert("Failed to add user");
    }
  }
  return (
    <div style={{textAlign:"center",marginTop:"20px"}}>
      <h1>AddUser</h1>
      <input type="text" placeholder="Enter Firstname" onChange={(e)=>setFirstName(e.target.value)} />
      <br /><br />
      <input type="text" placeholder="Enter lastname" onChange={(e)=>setLastName(e.target.value)} />
      <br /><br />
      <input type="text" placeholder="Enter age" onChange={(e)=>setGender(e.target.value)} />
      <br /><br />
      <input type="text" placeholder="Enter gender" onChange={(e)=>setAge(e.target.value)} />
      <br /><br />
      <input type="text" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} />
      <br /><br />
      <button onClick={handleSubmit}>Submit</button>
      </div>
  )
}
export default AddUser;