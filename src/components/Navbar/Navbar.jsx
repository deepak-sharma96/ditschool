import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";

const navItems = [
  { id: "home", label: "Home" },
  { id: "features", label: "Features" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

function Navbar({ activeSection, onNavigate, onRequestDemo }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  const handleNavClick = (event, sectionId) => {
    event.preventDefault();
    onNavigate(sectionId);
    setMenuOpen(false);
  };

  const handleDemoClick = (event) => {
    event.preventDefault();
    onRequestDemo();
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="site-container header-container">
        <a
          href="#home"
          className="brand"
          onClick={(event) => handleNavClick(event, "home")}
        >
          <img src={logo} alt="DIT School" className="brand-logo" />
          <span className="brand-name">DIT School</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-controls="site-nav"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <IoClose aria-hidden="true" /> : <HiOutlineMenuAlt3 aria-hidden="true" />}
        </button>

        <nav id="site-nav" className={menuOpen ? "nav-menu is-open" : "nav-menu"}>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? "active" : ""}
                  onClick={(event) => handleNavClick(event, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" onClick={handleDemoClick}>
                Request Demo
              </a>
            </li>
          </ul>
        </nav>

        <button className="login-btn" type="button" onClick={handleDemoClick}>
          Log In
        </button>
      </div>
    </header>
  );
}

export default Navbar;
