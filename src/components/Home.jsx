import React from 'react'
import { useContext } from 'react'
import Context from '../infoStore/InfoStore'
import { Link } from 'react-router-dom'



const Home = () => {
    const {users} = useContext(Context)
  return (<>
  <Link to='/'>Go Back</Link>
    <div><h1> Welcome {users.name} </h1></div>

  </>
    
  )
}

export default Home