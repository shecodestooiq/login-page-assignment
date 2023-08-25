import React, { useContext } from "react";
import '../App.css';
import { ProfileContext } from './ProfileContext';

function Home() {
  const { name, email } = useContext(ProfileContext);

  return (
    <div>
      {name && email ? (
        <div>
          <h1>Welcome, {name}</h1>
          <p>Email: {email}</p>
        </div>
      ) : (
        <h1>Welcome to the Home Page</h1>
      )}
    </div>
  );
}

export default Home;
