import email from "../../assets/images/EnvelopeSimpleOpen.png";
import instagram from "../../assets/images/instagram.png";
import linkedin from "../../assets/images/linkedin.png";
import logo from "../../assets/images/logo.png";
import mapPin from "../../assets/images/MapPin.png";
import phone from "../../assets/images/PhoneCall.png";
import twitter from "../../assets/images/twitterr.png";
import "./Footer.css";

const footerLinks = [
  { id: "home", label: "Home" },
  { id: "features", label: "Features" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

const socials = [
  { label: "Twitter", icon: twitter },
  { label: "LinkedIn", icon: linkedin },
  { label: "Instagram", icon: instagram },
];

function Footer({ activeSection, onNavigate }) {
  const handleLinkClick = (event, sectionId) => {
    event.preventDefault();
    onNavigate(sectionId);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left reveal-item">
          <a
            className="footer-logo"
            href="#home"
            onClick={(event) => handleLinkClick(event, "home")}
          >
            <img src={logo} alt="DIT School logo" />
            <h2>DIT School</h2>
          </a>

          <p className="footer-description">
            Striving to enhance the world of education with elegant and efficient
            solutions through DIT School.
          </p>
        </div>

        <div className="footer-right reveal-item">
          <div className="quick-links">
            <h4>Quick Links</h4>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={activeSection === link.id ? "active" : ""}
                    onClick={(event) => handleLinkClick(event, link.id)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="socials">
            <h4>Socials</h4>
            <div className="social-icons">
              {socials.map((social) => (
                <a href="#home" aria-label={social.label} key={social.label}>
                  <img src={social.icon} alt="" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="address">
            <h4>Addresses</h4>
            <div className="address-list">
              <div className="address-item">
                <img src={mapPin} alt="" aria-hidden="true" />
                <p className="address-text">
                  FF-74 R-Tech Mall,
                  <br />
                  Neemrana, Rajasthan,
                  <br />
                  India
                </p>
              </div>

              <div className="address-item">
                <img src={phone} alt="" aria-hidden="true" />
                <p className="address-text">+91 8619333672</p>
              </div>

              <div className="address-item">
                <img src={email} alt="" aria-hidden="true" />
                <p className="address-text">info@dutit.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
