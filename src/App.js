import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'
import { Route, Routes } from 'react-router-dom';
import { UserDataContextProvider } from './context/UserDataContext'
import './App.css'

function App() {
  return <div>
    <UserDataContextProvider>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </UserDataContextProvider>

  </div>;
}

export default App;
