import { NavLink } from "react-bootstrap";

const Navbar = () => {
    return (
        <nav className="bg-gray-200 p-4">
            <ul className="flex space-x-4">
                <li>
                    <NavLink to="/" className="text-gray-700 hover:text-gray-900">Kezdőlap</NavLink>
                </li>
                <li>
                    <NavLink to="/kereses" className="text-gray-700 hover:text-gray-900">Kereses</NavLink>
                </li>
                <li>
                    <NavLink to="/receptek" className="text-gray-700 hover:text-gray-900">Receptek</NavLink>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;