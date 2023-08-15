import React, { useContext } from "react";
import { Link } from "react-router-dom";

//UseContext
import LoginContext from "../Contexts/LoginContext.js";

function CardShow() {
	const { userName, password, birthday } =
		useContext(LoginContext);

	return (
		<>
			<Link to='/'>
				<button> Back </button>
			</Link>
			<br></br>
			<h1>
				Welcome {userName} Here's your info.
			</h1>
			<br></br>
			Name : {userName}
			<br></br>
			Password : {password}
			<br></br>
			Birthday : {birthday}
		</>
	);
}

export default CardShow;
