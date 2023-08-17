import './App.css';
import { DataProvider } from './store/store'
import PatientInfo from './components/PatientInfo';
import { Routes, Route } from 'react-router-dom';
import PatientForm from './components/PatientForm';
import SignUp from './components/SignUp'

function App() {
  return (
    <DataProvider>
      <div className='App'>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/patientform' element={<PatientForm />} />
          <Route path='/patientform/patientinfo' element={<PatientInfo />} />
        </Routes>
      </div>
    </DataProvider>
  );
}

export default App;
