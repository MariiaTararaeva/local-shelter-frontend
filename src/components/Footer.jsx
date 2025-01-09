import LogoText from "../assets/GoobyLogoShelter.png";
import "../styles/App.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h5 className="footer-title">Gooby Pet Finder</h5>
        <div className="footer-logo">
          <Link to="/">
            <img src={LogoText} className="footer-logo-image" alt="LogoText" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
