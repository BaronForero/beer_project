import { useLocation } from "react-router";
import { Link } from "react-router-dom";


const NavBar = () => {

    const location = useLocation();
    const navbarShouldShow = useLocation()

    return ( 
        <nav>
            <Link to="/">Home</Link>
        </nav>
    );
}

export default NavBar;