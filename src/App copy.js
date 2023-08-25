import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Newcontext from './Newcontext';
import Infopage from './Infopage';
import { InfoProvider } from './InfoContext';
import Sign from './Sign';

function App() {
  return (
    <div>
      <InfoProvider>
        <Routes>
        <Route path="/sign" element={<Sign />} />
          <Route path="/Newcontext" element={<Newcontext />} />
          <Route path="/Infopage" element={<Infopage />} />
        </Routes>
      </InfoProvider>
    </div>
  );
}

export default App;
