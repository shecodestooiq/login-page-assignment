import { createContext, useState } from "react";
import React from 'react'

const UserDataContext = createContext();

export function UserDataContextProvider({ children }) {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        rePassword: ''
    });

    return (
        <UserDataContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserDataContext.Provider>
    )
}
export default UserDataContext
