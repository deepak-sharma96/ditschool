import { useCallback, useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ProductVideo from "./components/ProductVideo/ProductVideo";
import MobileApps from "./components/MobileApps/MobileApps";
import Features from "./components/Features/Features";
import Pricing from "./components/Pricing/Pricing";
import FAQ from "./components/FAQ/FAQ";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const trackedSections = ["home", "features", "pricing", "faq", "contact"];

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [demoSubject, setDemoSubject] = useState("");

  const scrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleRequestDemo = useCallback(
    (subject = "") => {
      if (subject) {
        setDemoSubject(subject);
      }
      scrollToSection("contact");
    },
    [scrollToSection],
  );

  useEffect(() => {
    const sections = trackedSections
      .map((sectionId) => document.getElementById(sectionId))
      .filter(Boolean);

    if (!("IntersectionObserver" in window) || sections.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal-item");
    const revealItem = (item) => {
      item.classList.add("is-visible");
      item.setAttribute("data-reveal-visible", "true");
    };

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach(revealItem);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealItem(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onRequestDemo={handleRequestDemo}
      />
      <main>
        <Hero onRequestDemo={handleRequestDemo} />
        <ProductVideo />
        <MobileApps />
        <Features />
        <Pricing onSelectPlan={handleRequestDemo} />
        <FAQ />
        <Testimonials />
        <Contact selectedSubject={demoSubject} />
      </main>
      <Footer activeSection={activeSection} onNavigate={scrollToSection} />
    </>
  );
}

export default App;
