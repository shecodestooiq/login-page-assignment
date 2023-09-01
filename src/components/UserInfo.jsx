import { createContext, useState } from "react";
import { InfoContext } from "../store/store";


function InfoProvider({children}){
    const[registry, setRegistry] = useState(
    {
        fullName: ' ',
        email: ' ',
        password: ' ',
        dob: ' ',
    })
   


    return (<InfoContext.Provider value={{registry, setRegistry}}>
        {children}
    </InfoContext.Provider>)

}

export default InfoProvider;

