import barcode from "../../assets/images/barcode2.png";
import chartBar from "../../assets/images/ChartBar.png";
import currencyInr from "../../assets/images/CurrencyInr.png";
import exam from "../../assets/images/Exam.png";
import globe from "../../assets/images/GlobeSimple.png";
import whatsapp from "../../assets/images/WhatsappLogo.png";
import "./Features.css";

const features = [
  {
    title: "Online Fee Payment",
    icon: currencyInr,
    alt: "Online fee payment",
    description:
      "Accept online fee payments seamlessly through integrated gateways for convenient transactions.",
  },
  {
    title: "Comprehensive Reporting",
    icon: chartBar,
    alt: "Reporting",
    description:
      "Generate detailed reports on student performance, attendance, and financials for better decision-making.",
  },
  {
    title: "Online Exam (Paid/Free)",
    icon: exam,
    alt: "Online exam",
    description:
      "Manage and conduct online exams with options for both free and paid participation, enhancing flexibility.",
  },
  {
    title: "SMS & WhatsApp Notifications",
    icon: whatsapp,
    alt: "WhatsApp notifications",
    description:
      "Send timely SMS notifications for alerts, reminders and updates to students and parents.",
  },
  {
    title: "QR Attendance",
    icon: barcode,
    alt: "QR attendance",
    description:
      "Track attendance efficiently with QR code scanning on student or employee ID cards with ease.",
  },
  {
    title: "Custom Domains",
    icon: globe,
    alt: "Custom domains",
    description:
      "Allow schools to use their own domain name, enhancing brand identity and professionalism.",
  },
];

function Features() {
  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <div className="section-heading features-heading">
          <h2>Features Of School Management Software</h2>
          <p>
            Explore a variety of content, constantly evolving and improving to
            provide you with the best experience possible.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <article className="feature-card reveal-item" key={feature.title}>
              <img src={feature.icon} alt={feature.alt} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
