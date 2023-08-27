import React,{ useState, useContext } from 'react';

import { Link } from 'react-router-dom';


import usericon from '../assist/usericon.jpg';
import showpassword from '../assist/showpassword.png';
import hidepassword from '../assist/hidepassword.png';

import Login from '../Contaxt/Login.jsx';



function Form() {
    const {
        userName,
        setUserName,
        password,
        setPassword,
        birthDay,
        setBirthDay,
    } = useContext(Login);
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = (e) => {
        e.preventDefult();
        setShowPassword(!showPassword);
    };
    const ValidateName = () => {
        return (
            <p>Name should Have At List 6 Characters</p>
        );
    };
    const PasswordErrorMessage = () => {
        return (
            <p>Passwors should Have At List 8 Characters</p>
        );
    };
    return (
        <>
            <form>
                <label> User Name: </label>
                <input
                    type='text'
                    id='userName'
                    placeholder='Ex:Ruqaya'
                    onChange={(e) => {
                        setUserName(e.target.value);
                    }}
                />
                <img
                    src={usericon}
                    alt='user icon'
                />
                {userName.length}
                {userName.length < 6 ? (
                    <ValidateName />
                ) : null}
                <br></br>

                <label> Password: </label>
                <input
                    type={
                        showPassword ? "text" : "password"
                    }
                    value={password}
 
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />
                <button
                    onClick={togglePasswordVisibility}>
                    {showPassword ? (
                        <img
                            src={showpassword}
                            alt='show password icon'
                        />
                    ) : (
                        <img src={hidepassword}
                            alt='hide password icon'
                        />
                    )}
                </button>
                {password.length}
                {password.length < 8 ? (
                    <PasswordErrorMessage />
                ) : null}
                <br></br>


                <label> BirthDay : </label>
                <input
                    type='date'
                    id='birthday'
                    placeholder='y-m-d'
                    value={birthDay}
                    onChange={(e) => 
                        setBirthDay(e.target.value)}
                />
                {!birthDay && <p>enter your birthday</p>}
                
                <br></br>

                {userName.length < 4 || password.length < 8 || !birthDay ? (
                <button onClick={() => alert("Please Enter Your Info!")}>
                    Sign in
                </button>
            ) : (
                <Link to='/FormInfo'>
                    <button type='submit'>Sign In</button>
                </Link>
            )}

            </form>
        </>
    );
}
export default Form;