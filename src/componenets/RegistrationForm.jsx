import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UserDataContext from '../context/UserDataContext';

export default function RegistrationForm() {
    const navigate = useNavigate();
    const { userData, setUserData } = useContext(UserDataContext);
    const { username, email, password, rePassword } = userData;

    const handleSubmit = (e) => {
      e.preventDefault();
      
      if (username === "" || email === "" || password === "") {
      alert('Please fill in all fields');
      return;
      }
      else if (password.length < 8) {
      alert('Password should be at least 8 characters');
      return;
      }
      else if (password !== rePassword) {
      alert('Passwords must be the same');
      return;
      }
      else{
        navigate('/sign-in')
      }
    }
  return (
    <div className='inputs'>
      <form>
        <input type='text'
          placeholder='Name'
          value={username}
          onChange={e=> setUserData({...userData,username:e.target.value})}
          required
          />
        <input
          type='email' 
          placeholder='Email'
          value={email}
          onChange={e=> setUserData({...userData,email:e.target.value})}
          required
           />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={e=> setUserData({...userData,password:e.target.value})}
          required
           />
        <input
          type='password'
          value={rePassword}
          onChange={e=> setUserData({...userData,rePassword:e.target.value})}
          placeholder='Password again'
          required
           />
        <input
          type='submit'
          value='Create Account'
          onClick={handleSubmit}
          />
      </form>
    </div>
  )
}
