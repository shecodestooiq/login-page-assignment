import React from "react";
import Context from "../Store";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "../App.css"


function Infos() {
  const infos = useContext(Context);
  console.log(infos);
  return (
    <div className="infos">
      <div className="heads">
        <h1>مرحبا مجددا</h1>
        <h3>الاسم:{infos.Name}</h3>
        <h3>كلمة السر:{infos.psw}</h3>
        <h3>الايميل:{infos.email}</h3>

        <Link to="/" className="Link">الرجوع</Link>
      </div>
    </div>
  );
}

export default Infos;
