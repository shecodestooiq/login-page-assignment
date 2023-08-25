import React, { createContext, useContext, useState } from 'react';

const InfoContext = createContext();

export const InfoProvider = ({ children }) => {
  const [patientInfo, setPatientInfo] = useState({
    name: 'fatima',
    age: '',
    disease: '',
    medicine: '',
    notes: '',
  });

  return (
    <InfoContext.Provider value={{ patientInfo, setPatientInfo }}>
      {children}
    </InfoContext.Provider>
  );
};

export const useInfo = () => {
  const context = useContext(InfoContext);
  if (!context) {
    throw new Error('useInfo must be used within an InfoProvider');
  }
  return context;
};
