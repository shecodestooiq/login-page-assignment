import { createContext, useState } from "react";

const Context = createContext();

export function InfoProvider({children}){
    const [name, setName]=useState("")
const [password,setPssword]=useState("")
const [date,setDate]=useState("")

return(
    <Context.Provider value={{name,password,date,setName,setPssword,setDate}}>{children}</Context.Provider>
);
}
export default Context