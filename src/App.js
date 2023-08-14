import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./Store";
import Form from "./components/Form";
import Infos from "./components/Infos";
function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/Infos" element={<Infos />} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
