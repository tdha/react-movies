import { Link } from "react-router-dom";

function NavBar () {
    return (
        <nav>
            <Link to="/">Movies List</Link>
            &nbsp; | &nbsp;
            <Link to="/actors">Actors List</Link>
        </nav>
    );
}

export default NavBar