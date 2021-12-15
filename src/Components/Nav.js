import { Link } from "react-router-dom";
import NavWrapper from "../Styles/Nav.style";
import Hamburger from "../Assets/Hamburger.svg"
import Logo from "../Assets/Logo.png"
import { PrimaryButton } from "../Styles/Buttons.style";


function Navbar() {
    return(
        <NavWrapper>
            <img src={Logo} alt="" className="logo"/>
            <div className="nav-links">
                <Link to="/home">About</Link>
                <Link to="/home">Services</Link>
                <Link to="/home">How it works</Link>
                <Link to="/home">FAQ</Link>
                <PrimaryButton>
                    <Link to="/dashboard">Get started</Link>
                </PrimaryButton>
            </div>
            <button className="hamburger-button">
                <img alt="" src={Hamburger} />
            </button>
        </NavWrapper>
    )
}
export default Navbar;