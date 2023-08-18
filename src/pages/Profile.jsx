import React from 'react';
import { useContext } from 'react';
import UserDataContext from '../context/UserDataContext';
import { Link } from 'react-router-dom';

export default function Profile() {
    const { userData } = useContext(UserDataContext);

    return (
      <div className='profile'>
        <div className="img">
            {/* <img src='../public/profile'/> */}
        </div>
        <div className="texts">
            <h1>{userData.username}'s Profile</h1>
            <p>Email: {userData.email}</p>
            <Link to=".." relative="path" className='back-link'>Register Your Information</Link>
        </div>
        
      </div>
    )
}
