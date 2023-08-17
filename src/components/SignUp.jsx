import Context from "../store/store";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";

const SignUp = () => {
  const { signUpForm, setSignUpForm } = useContext(Context);
  const navigate = useNavigate();

  const handleUserNameChange = (e) => {
    setSignUpForm({ ...signUpForm, userName: e.target.value });
  };
  const handlePassChange = (e) => {
    setSignUpForm({ ...signUpForm, password: e.target.value });
  };

  const handleSubmitSignUpForm = (e) => {
    e.preventDefault();
    console.log("Submitted Correctly");
    navigate("./patientform");
  };

  return (
    <div className="signUpContainer">
      <img src={logo} alt="logo" />
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmitSignUpForm} className="formContainer">
        {/* <div> */}
        <label htmlFor="userName">User Name</label>
        {/* </div> */}
        <div>
          <input
            type="userName"
            id="userName"
            value={signUpForm.userName}
            onChange={handleUserNameChange}
            required
          />
        </div>
        <label htmlFor="password">Password</label>
        <div>
          <input
            type="password"
            id="password"
            value={signUpForm.password}
            onChange={handlePassChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
export default SignUp;
