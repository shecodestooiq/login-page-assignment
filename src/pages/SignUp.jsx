import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { InfoContext } from "../store/store"



function SignUp() {
    const navigate = useNavigate();
    const today = new Date();
    const date = today.toISOString().slice(0, 10);
    const {registry, setRegistry} = useContext(InfoContext);

    const[form, setForm] = useState(
        {
            fullName: ' ',
            email: ' ',
            password: ' ',
            dob: ' ',
        });
       

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("account made");
        navigate('./home');
        setRegistry(form);
    }
    return (
       
        <div className="signup-page" >
             <Link to="/" ></Link>
            <h1>Please Sign up!</h1>
            <form className="signup-form" onSubmit={(e) => {handleSubmit(e)}}>
                <label>Full Name</label>
                <input
                htmlFor="fullName"
                id="fullName"
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={(e) => {setForm({...form, fullName: e.target.value})}}
                required></input>


                <label>Email</label>
                <input
                htmlFor="email"
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={(e) => {setForm({...form, email:e.target.value})}}
                required></input>

                <label>Password</label>
                <input
                htmlFor="password"
                id="password"
                type="password"
                name="password"
                value={form.password.value}
                onChange={(e) => {setForm({...form, password: e.target.value})}}
                required></input>

                <label>Date of Birth</label>
                <input
                htmlFor="dob"
                id="dob"
                name="dob"
                type="date"
                min="1920-01-01" max={date}
                value={form.dob}
                onChange={(e) => {setForm({...form, dob: e.target.value})}}
                required></input>

                <button type="submit">Sign up</button>
            </form>

        </div>
      
    )
}

export default SignUp;