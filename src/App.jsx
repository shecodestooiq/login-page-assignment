import "./App.css";
import { Routes, Route } from "react-router-dom";

//Components
import CardShow from "./Components/CardShow";
import Form from "./Components/Form";

//UseContext
import { ProviderUser } from "./Contexts/LoginContext";

function App() {
	return (
		<>
			<ProviderUser>
				<Routes>
					<Route
						path='/'
						element={<Form />}
					></Route>
					<Route
						path='/CardShow'
						element={<CardShow />}
					></Route>
				</Routes>
			</ProviderUser>
		</>
	);
}

export default App;
