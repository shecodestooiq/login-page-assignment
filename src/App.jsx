import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ProviderUser } from "./Contaxt/Login";
import FormInfo from "./componants/FormInfo";
import Form from "./componants/Form";



function App() {
  return (
    <>
      <ProviderUser>
        <Routes>
          <Route
            path='/'
            element={<Form />}
          ></Route>
          <Route
            path='/FormInfo'
            element={<FormInfo />}
          ></Route>

          
        </Routes>
      
      </ProviderUser>
    </>
  );
}
export default App;