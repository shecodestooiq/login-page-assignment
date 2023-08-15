import React, {
	createContext,
	useState,
} from "react";

const LoginContext = createContext();

export function ProviderUser({ children }) {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [birthday, setBirthday] = useState("");

	return (
		<LoginContext.Provider
			value={{
				userName,
				setUserName,
				password,
				setPassword,
				birthday,
				setBirthday,
			}}
		>
			{children}
		</LoginContext.Provider>
	);
}

export default LoginContext;
