import React, { createContext, useState } from "react";


const Login = createContext();


export function ProviderUser({ children }) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [birthDay, setBirthDay] = useState("");

    return (
        <Login.Provider
            value={{
                userName,
                setUserName,
                password,
                setPassword,
                birthDay,
                setBirthDay
            }}
        >
            {children}</Login.Provider>
    );
}
export default Login;
