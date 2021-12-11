import {Link} from "react-router-dom"
import { FooterWrapper, LinksWrapper } from "../Styles/Footer.style";
import Logo from "../Assets/Logo.png";
import InstagramIcon from "../Assets/InstagramIcon.png";
import FacebookIcon from "../Assets/FacebookIcon.png";
import LinkedinIcon from "../Assets/LinkedinIcon.png";
function Footer() {
    return (
        <FooterWrapper>
            <LinksWrapper className="footer-links-wrapper">
                <div className="footer-img-container">
                    <img src={Logo} alt="" />
                </div>
                <div className="link-list">
                    <Link to="/register">About</Link>
                    <Link to="/register">Pricing</Link>
                    <Link to="/register">Services</Link>
                    <Link to="/register">Terms and conditions</Link>
                </div>
            </LinksWrapper>
            <LinksWrapper>
                <div className="link-list social-icons">
                    <Link to="/register">
                        <img src={InstagramIcon} alt="" />
                    </Link>
                    <Link to="/register">
                        <img src={FacebookIcon} alt="" />
                    </Link>
                    <Link to="/register">
                        <img src={LinkedinIcon} alt="" />
                    </Link>
                </div>
                <div className="link-list contact-list">
                    <Link to="/register">Tel: +2349131057044</Link>
                    <Link to="/register">Mail:  support@ichores.com</Link>
                </div>
            </LinksWrapper>
        </FooterWrapper>
    )
}

export default Footer;