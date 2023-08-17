import Context from "../store/store";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";

const PatientForm = () => {
  const [optionValue, setOptionValue] = useState("");
  const {
    patientForm,
    setPatientForm,
    patientFormStatus,
    setPatientFormStatus,
    signUpForm,
  } = useContext(Context);
  const navigate = useNavigate();

  const handleDateChange = (e) => {
    setPatientForm({ ...patientForm, date: e.target.value });
  };
  const handleNameChange = (e) => {
    setPatientForm({ ...patientForm, patientName: e.target.value });
  };
  const handleDOBirthChange = (e) => {
    setPatientForm({ ...patientForm, dateOfBirth: e.target.value });
  };
  const handleGenderChange = (e) => {
    const selectedValue = e.target.value;
    setOptionValue(selectedValue);
    setPatientForm({ ...patientForm, gender: selectedValue });
  };
  const handleAddressChange = (e) => {
    setPatientForm({ ...patientForm, address: e.target.value });
  };
  const handlePatientsHealthIssueChange = (e) => {
    setPatientForm({ ...patientForm, patientsHealthIssue: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(`Submitted!`);
    setPatientForm({ ...patientForm, id: patientForm.id + 1 });
    setPatientFormStatus([...patientFormStatus, patientForm]);
    navigate("./patientinfo");
  };

  const clearInputs = () => {
    setPatientForm({
      date: "",
      patientName: "",
      dateOfBirth: "",
      gender: "",
      address: "",
      patientsHealthIssue: "",
    });
  };

  return (
    <>
      <div className="userContainer">
        <img src={logo} alt="logo" />
        <p>Welcome {signUpForm.userName}</p>
      </div>
      <h1 className="centered">Patient Information Form</h1>
      <div className="patientFormContainer">
        <form onSubmit={handleSubmitForm} className="patientInputsContainer">
          <label htmlFor="date">Date</label>
          <div>
            <input
              type="date"
              id="date"
              value={patientForm.date}
              onChange={handleDateChange}
              required
            />
          </div>

          <label htmlFor="name">Patient Name</label>
          <div>
            <input
              type="text"
              id="name"
              value={patientForm.patientName}
              onChange={handleNameChange}
              required
            />
          </div>

          <label htmlFor="dateOfBirth">Date of Birth</label>
          <div>
            <input
              type="date"
              id="dateOfBirth"
              value={patientForm.dateOfBirth}
              onChange={handleDOBirthChange}
              required
            />
          </div>

          <label htmlFor="gender">Gender</label>
          <div>
            <select
              value={optionValue}
              name="gender"
              id="gender"
              onChange={handleGenderChange}
              required
            >
              <option disabled value="">
                Choose gender...
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <label htmlFor="address">Address</label>
          <div>
            <input
              type="text"
              id="address"
              value={patientForm.address}
              onChange={handleAddressChange}
              required
            />
          </div>

          <label htmlFor="patientsHealthIssue">Patient's Health Issue</label>
          <div>
            <input
              type="text"
              id="patientsHealthIssue"
              value={patientForm.patientsHealthIssue}
              onChange={handlePatientsHealthIssueChange}
              required
            />
          </div>
          <div className="btnContainer">
            <button type="click" onClick={clearInputs} className="clearBtn">
              Clear
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PatientForm;
