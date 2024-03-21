import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import '../styles/navbar.css'

const Navbar = () => {
    return ( <nav>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="nav-links">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/facilities">Facilities</Link></li>
                        <li><Link to="/academics">Academics</Link></li>
                        <li><Link to="/admission">Admission</Link></li>
                        <li><Link to="/contact">Contact us</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                    </ul>
                </div>
            </nav> );
}
 
export default Navbar;