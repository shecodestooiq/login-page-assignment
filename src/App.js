import Form from "./components/Form";
import UserInfo from "./components/UserInfo";
import "./App.css";
import { InfoProvider } from "./store/Store";
import { BrowserRouter,Route,Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div>
        <InfoProvider>
          <Routes>
           <Route path="/" element={<Form/>}/>
           <Route path="/UserInfo" element={<UserInfo/>}/>
          </Routes>
        </InfoProvider>
      </div>

  </div>);
}

export default App;
