import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>Forum</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
            </nav>
        </header>);
}
 
export default Header;