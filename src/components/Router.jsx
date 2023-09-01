import { Route, Routes } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import InfoProvider from "./UserInfo";

function FuseBox(){
    return (
      <InfoProvider>
        <Routes>
            <Route path="/" element={<SignUp />}/>
            <Route path="/Home" element={<Home />}/>
        </Routes>
        </InfoProvider>
    )
}

export default FuseBox;