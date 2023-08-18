import { useContext } from "react";
import UserDataContext from "../context/UserDataContext";
import SignInForm from "../componenets/SignInForm";

export default function SignIn() {
    const { userData } = useContext(UserDataContext);
  return (
    <div className="signUp">
        <h1>Sign In As {userData.username}</h1>
      <SignInForm />
    </div>
  )
}