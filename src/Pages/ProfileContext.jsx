import React, { createContext, useState } from "react";

export const ProfileContext = createContext(null);

export const ProfileContextProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const value = {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword
  };

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  );
};
