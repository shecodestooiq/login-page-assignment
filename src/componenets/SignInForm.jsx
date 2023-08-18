import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserDataContext from '../context/UserDataContext'
import { useRef } from 'react';

export default function SignInForm() {

  const { userData } = useContext(UserDataContext);
  const { email, password } = userData;
  const navigate = useNavigate();
  const inputEmailRef  = useRef();
  const inputPasswordRef = useRef();
  const handleSignIn = (e) => { 
    e.preventDefault();
    if (inputEmailRef.current.value === email && inputPasswordRef.current.value === password) {
    navigate('/profile');
    } else {
    alert('Invalid username or password');
    }
  }
  return (
    <div className='inputs'>
      <form>
        <input type='email' placeholder='Email' ref={inputEmailRef}/>
        <input type='password' placeholder='Password' ref={inputPasswordRef}/>
        <input
          type='submit'
          value='Sign In'
          onClick={handleSignIn}
          />
          <div className="back">
            <span>Dont have acoount ?  </span>
            <Link to=".." relative="path" className='back-link'> Create new one</Link>
          </div>
          <div className='forget'>
            <Link to=".." relative="path" className='forget-password'>Forget your password ?</Link>
          </div>
      </form>
    </div>
  )
}
