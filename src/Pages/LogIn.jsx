import React, { useContext } from "react";
import { ProfileContext } from './ProfileContext';
import { useNavigate } from "react-router-dom";
import '../App.css';

function LogIn() {
  const { name, setName, email, setEmail, password, setPassword } = useContext(ProfileContext);
  const navigate = useNavigate();

  const handleChangeName = (e) => setName(e.target.value);

  const handleChangeEmail = (e) => setEmail(e.target.value);
  
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  }

  return (
    <div className="frm">
      <form onSubmit={handleSubmit}>
        <div className="frm-elm">
          <input
            value={name}
            type="text"
            onChange={handleChangeName}
            placeholder="enter name"
          />
        </div>

        <div className="frm-elm">
          <input
            value={email}
            type="email"
            onChange={handleChangeEmail}
            placeholder="enter email"
          />
        </div>

        <div className="frm-elm">
          <input
            value={password}
            type="password"
            onChange={handleChangePassword}
            placeholder="enter password"
          />
        </div>

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default LogIn;
