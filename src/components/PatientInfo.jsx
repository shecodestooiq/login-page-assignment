import Context from "../store/store";
import { useContext, useState } from "react";
import logo from "../images/logo.png";

const PatientInfo = () => {
  const { patientFormStatus, signUpForm } = useContext(Context);
  const [showInfo, setShowInfo] = useState({});

  const handleShowMore = (id) => {
    console.log(id);
    patientFormStatus.forEach((patient) => {
      if (patient.id === id) {
        setShowInfo((prevShowInfo) => ({
          ...prevShowInfo,
          [id]: patient,
        }));
      }
    });
  };

  return (
    <div className="patientInfoContainer">
      <div className="userContainer">
        <img src={logo} alt="logo" />
        <p>Welcome {signUpForm.userName}</p>
      </div>
      <h1 className="centered">Patient Information Details</h1>
      {patientFormStatus.length <= 0 ? (
        <>
          <h3>⚠️ No Data Available!</h3>
          <h4>👈🏻 Back forward and fill the form please.</h4>
        </>
      ) : (
        patientFormStatus.map((patient) => (
          <>
            <div key={patient.id} className="infoContainer">
              <h3>{patient.patientName}</h3>
              <h3>{patient.date}</h3>
              <button onClick={() => handleShowMore(patient.id)}>
                More Info
              </button>
            </div>
            <div className="afterClickCOntainer">
              {showInfo[patient.id] && (
                <>
                  <div className="infoTitle">
                    <h5>Date of Birth</h5>
                    <h3>{showInfo[patient.id].dateOfBirth}</h3>
                  </div>
                  <div className="infoTitle">
                    <h5>Gender</h5>
                    <h3>{showInfo[patient.id].gender}</h3>
                  </div>
                  <div className="infoTitle">
                    <h5>Address</h5>
                    <h3>{showInfo[patient.id].address}</h3>
                  </div>
                  <div className="infoTitle">
                    <h5>Patient's Health Issue</h5>
                    <h3>{showInfo[patient.id].patientsHealthIssue}</h3>
                  </div>
                </>
              )}
            </div>
          </>
        ))
      )}
    </div>
  );
};
export default PatientInfo;
