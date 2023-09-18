import React from 'react'
import Context from '../infoStore/InfoStore'
import { useContext } from 'react'
import { Link } from 'react-router-dom'


const LoginPage = () => {
    const {users , setUsers}=useContext(Context)
    const handlChange = (e) => {
       const  {name , value}=e.target;
       setUsers((prevUser)=>({...prevUser, [name]:value}) )

    }
  return (
    <div>
        <input type="text"  name='name' value={users.name} onChange={handlChange }/>
        <input type="password" name='password' value={users.password} onChange={handlChange }/>
        <Link to='/home'> <button type="submit" >Submit</button></Link>
        
    </div>
  )
}

export default LoginPage