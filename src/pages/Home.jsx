import { Link } from "react-router-dom";
import { useContext } from "react";
import { InfoContext } from "../store/store"


function Home() {
    const { registry, setRegistry } = useContext(InfoContext);


    return (<div>

        <Link to="/home"></Link>
        <h1>{registry.fullName}</h1>

    </div>

    )
}

export default Home;