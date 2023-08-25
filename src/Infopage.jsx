import React from 'react';
import { useInfo } from './InfoContext';

export default function Infopage() {
  const { patientInfo } = useInfo();

  return (
    <div>
      <h2>Patient Information:</h2>
      <p>Name: {patientInfo.name}</p>
      <p>Age: {patientInfo.age}</p>
      <p>Disease: {patientInfo.disease}</p>
      <p>Medicine: {patientInfo.medicine}</p>
      <p>Notes: {patientInfo.notes}</p>
    </div>
  );
}
