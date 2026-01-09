import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Receptek App</span>
                <div className="navbar-nav">
                    <NavLink to="/" className="nav-link">Kezdőlap</NavLink>
                    <NavLink to="/kereses" className="nav-link">Kereses</NavLink>
                    <NavLink to="/receptek" className="nav-link">Receptek</NavLink>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;