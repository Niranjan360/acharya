import { Link } from "react-router-dom";
import '../styles/footer.css'


const Footer = () => {
    return ( 
    <footer>
        <div className="f1">
            <div className="gird-layout">
                <div>
                    <h3>CONTACT US</h3>
                    <span>+91 7406-041078</span>
                    <span>+91 98457-59847</span>
                    <span>acharyainternational128@gmail.com</span>
                    <span>332/4, Sri Acharya Gurukula, Hallididdi road, Kadakola 571-311, Mysuru</span>
                </div>
                <div>
                    <h3>SERVICES</h3>
                    <Link to="/contact">Contact Us</Link>
                    <Link>Payment</Link>
                    <Link>FAQ</Link>
                    <Link>Guide</Link>
                </div>
                <div>
                    <h3>INFORMATION</h3>
                    <Link to="/contact">About Work With Us</Link>
                    <Link>Privacy Policy</Link>
                    <Link>Terms & Condition</Link>
                    <Link>Press Enquires</Link>
                </div>
            </div>

            <div className="socialmedia">
                <a href="/insta"><i class='bx bxl-instagram'></i></a>
                <a href="/twitter"><i class='bx bxl-twitter'></i></a>
                <a href="/facebook"><i class='bx bxl-facebook' ></i></a>
            </div>
        </div>
        <div className="f2">
            <span> &copy; Acharya International School </span>
        </div>
    </footer> );
}
 
export default Footer;