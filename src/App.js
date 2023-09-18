import {Routes , Route} from 'react-router-dom'
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import { InfoProvider } from './infoStore/InfoStore';

function App() {
  return (
    <InfoProvider>
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </InfoProvider>
    
  )
}

export default App;
