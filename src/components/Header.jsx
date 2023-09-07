import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>Forum</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/profile">Profile</NavLink>
            </nav>
        </header>);
}
 
export default Header;