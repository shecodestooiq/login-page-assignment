import { createContext, useState } from "react";

const Context = createContext();

export function DataProvider({ children }) {
  const [Name, setName] = useState("");
  const [psw, setPsw] = useState("");
  const [email, setEmail] = useState("");
  

  return (
    <Context.Provider value={{ Name, email,psw, setEmail, setName, setPsw}}>
      {children}
    </Context.Provider>
  );
}

export default Context;
