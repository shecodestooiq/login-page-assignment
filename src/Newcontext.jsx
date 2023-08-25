import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useInfo } from './InfoContext';

export default function Newcontext() {
  const navigate = useNavigate();
  const { patientInfo, setPatientInfo } = useInfo();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/Infopage');
  };

  return (
    <div>
      <h3>Patient form</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={patientInfo.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={patientInfo.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Disease</label>
          <input
            type="text"
            name="disease"
            value={patientInfo.disease}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Medicine</label>
          <input
            type="text"
            name="medicine"
            value={patientInfo.medicine}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Notes</label>
          <input
            type="text"
            name="notes"
            value={patientInfo.notes}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
