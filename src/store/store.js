import { createContext, useState } from "react";

const Context = createContext();

export function DataProvider({ children }) {
    const [patientForm, setPatientForm] = useState({
        id: 1,
        date: '',
        patientName: '',
        dateOfBirth: '',
        gender: '',
        address: '',
        patientsHealthIssue: ''
    });
    const [patientFormStatus, setPatientFormStatus] = useState([]);

    const [signUpForm, setSignUpForm] = useState({
        userName: '',
        password: ''
    });
    return <Context.Provider
        value={{
            patientFormStatus, setPatientFormStatus,
            patientForm, setPatientForm,
            signUpForm, setSignUpForm,
        }}>
        {children}
    </Context.Provider>
}
export default Context;