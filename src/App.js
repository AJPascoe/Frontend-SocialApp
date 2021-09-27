import React, { useState } from "react";
import './App.css';
import { fetchRequest } from "./utils";

const App =() =>  {
  const [username, setUsername]= useState();
  const [email, setEmail]= useState();
  const [pass, setPass]= useState();
  const [desc, setDesc]= useState();
  const [city, setCity]= useState();
  const [from, setFrom]= useState();

  const submitHandler = (e) => {
    e.preventDefault();
    fetchRequest(username, email, pass, desc, city, from);
    //call fetch request for creating user

  
  }

  return (
  <div className= "App">
    <form onSubmit = {submitHandler}>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)}/> {/*sets what ever is inputed as username*/}
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
      <input placeholder="Password" onChange={(e) => setPass(e.target.value)}/>
      <input placeholder="Description" onChange={(e) => setDesc(e.target.value)}/>
      <input placeholder="City" onChange={(e) => setCity(e.target.value)}/>
      <input placeholder="From" on change={(e) => setFrom(e.target.value)}/>
      <button type="submit">Submit</button>
    </form>
  </div>
  );
};

export default App;
