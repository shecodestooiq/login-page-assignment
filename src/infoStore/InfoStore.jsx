import { useState } from "react";
import { createContext } from "react";

const Context=createContext();

export const InfoProvider = ({children}) =>{

    const[users , setUsers]=useState({
        name:'',
        password:''
    })
    return(
        <Context.Provider value={{users, setUsers}}>
            {children}
        </Context.Provider>

    )
}
export default Context;