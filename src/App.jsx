import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import { ProfileContextProvider } from './Pages/ProfileContext';

function App() {
  return (
    <div className="App">
      <nav className='nav'>
        <Link className='nav-elm' to="/">Home</Link>
        <Link className='nav-elm' to="/LogIn">Log In</Link> 
      </nav>
      <ProfileContextProvider> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LogIn" element={<LogIn />} />
        </Routes>
      </ProfileContextProvider>
    </div>
  );
}

export default App;