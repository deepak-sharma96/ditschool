import { FaArrowRight } from "react-icons/fa6";
import androidLogo from "../../assets/images/AndroidLogo.png";
import appleLogo from "../../assets/images/AppleLogo.png";
import cap from "../../assets/images/cap.png";
import desktopTower from "../../assets/images/DesktopTower.png";
import "./Hero.css";

function Hero({ onRequestDemo }) {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <img src={cap} alt="" className="cap" aria-hidden="true" />

          <h1>
            <span className="hero-line">Smart</span>
            <span className="hero-line">Solutions for</span>
            <span className="hero-line">your School</span>
          </h1>

          <p>
            Streamline administration with DIT School&apos;s all-in-one software.
            Simplify enrollment, track performance, and stay connected effortlessly.
          </p>

          <div className="hero-actions">
            <div className="available">
              <span>Available On</span>
              <img src={androidLogo} alt="Android" className="store-icon" />
              <img src={appleLogo} alt="Apple" className="store-icon" />
              <img src={desktopTower} alt="Desktop" className="store-icon" />
            </div>

            <button className="demo-btn" type="button" onClick={() => onRequestDemo()}>
              Request For Demo
              <FaArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
