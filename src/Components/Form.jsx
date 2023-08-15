import React, {
	useContext,
	useState,
} from "react";
import { Link } from "react-router-dom";

//Asssets
import UserIcon from "../Assets/userName.png";
import PasswordShow from "../Assets/passwordShow.png";
import PasswordHide from "../Assets/passwordHide.png";

//UseContext
import LoginContext from "../Contexts/LoginContext.js";

//Components
// import CardShow from './CardShow';

function Form() {
	const {
		userName,
		setUserName,
		password,
		setPassword,
		birthday,
		setBirthday,
	} = useContext(LoginContext);
	const [showPassword, setShowPassword] =
		useState(false);

	const togglePasswordVisibility = (e) => {
		e.preventDefault();
		setShowPassword(!showPassword);
	};

	const ValidateName = () => {
		return (
			<p>
				Name should have at least 3 characters
			</p>
		);
	};
	const PasswordErrorMessage = () => {
		return (
			<p>
				Password should have at least 8 characters
			</p>
		);
	};

	return (
		<>
			<form>
				<label> User Name : </label>
				<input
					type='text'
					id='userName'
					placeholder='Ex: Nada'
					onChange={(e) => {
						setUserName(e.target.value);
					}}
				/>
				<img
					src={UserIcon}
					alt='User Icon'
				/>
				{userName.length}
				{userName.length < 4 ? (
					<ValidateName />
				) : null}
				<br></br>

				<label> Password : </label>
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
					onClick={togglePasswordVisibility}
				>
					{showPassword ? (
						<img
							src={PasswordShow}
							alt='Password Show Icon'
						/>
					) : (
						<img
							src={PasswordHide}
							alt='Password Hide Icon'
						/>
					)}
				</button>
				{password.length}
				{password.length < 8 ? (
					<PasswordErrorMessage />
				) : null}
				<br></br>

				<label> Birthday : </label>
				<input
					type='date'
					id='birthday'
					placeholder='Ex: 23.05.1991'
					onChange={(e) => {
						setBirthday(e.target.value);
					}}
				/>
				{birthday === null || birthday === "" ? (
					<p>Choose a date</p>
				) : null}
				<br></br>

				{( userName.length < 4 &&
					password.length < 8 &&
					(birthday === null || birthday === "")
				) ?
					(
						<button
							onClick={() =>
								alert("Please fill all fields!")
							}
						>
							Sign in
						</button>
					) :
					(
					<Link to='/CardShow'>
						<button>Sign in</button>
					</Link>
				)}
			</form>
		</>
	);
}

export default Form;
