import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Login from "../Contaxt/Login.jsx";


function FormInfo() {
  const { userName, password, birthDay } =
    useContext(Login);
  return (
    <>
      <link to='/'>
        <button> Back </button>

      </link>
      <br></br>
      <h1>Welcome {userName} Here is your Info.</h1>
      Name : {userName}
      <br></br>
      Password : {password}
      <br></br>
  
      BirthDay: {birthDay}
    </>
  );
}
export default FormInfo;