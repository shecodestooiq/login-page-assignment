import { useContext} from "react";
import { useNavigate } from "react-router-dom";
import Context from "../Store";

import "../App.css";
function Form() {
  const infos = useContext(Context);
  const navigate = useNavigate();

  const HandleSumit = (e) => {
    e.preventDefault();
    if (infos.Name === "") {
      alert("pls enter your name");
      return;
    }
    if (infos.psw === "") {
      alert("pls enter your password");
      return;
    }
    if (infos.email === "") {
      alert("pls enter your Email");
      return;
    }
    navigate("/Infos");
  };

  return (
    <div className="home">
      <form className="forma">
        <h1>!مرحبا</h1>
        <h3>يرجى تسجيل الدخول</h3>
        <input
          type="text"
          name={infos.Name}
          value={infos.Name}
          id="name"
          onChange={(e) => infos.setName(e.target.value)}
          placeholder="الاسم"
        ></input>
        <br></br>
        <input
          type="password"
          name={infos.psw}
          value={infos.psw}
          id="psw"
          onChange={(e) => infos.setPsw(e.target.value)}
          placeholder="كلمة السر"
        ></input>
        <br></br>
        <input
          type="email"
          name={infos.email}
          value={infos.email}
          id="email"
          onChange={(e) => infos.setEmail(e.target.value)}
          placeholder="الايميل"
        ></input>
        <br></br>
        <button onClick={HandleSumit}>تسجيل الدخول</button>
      </form>
    </div>
  );
}

export default Form;
