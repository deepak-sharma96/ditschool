import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import "./Pricing.css";

const plans = [
  {
    id: "basic",
    name: "Basic Plan",
    price: "₹8999.0",
    duration: "/ 1 Years",
    description: "Perfect for schools up to 300 students.",
    features: [
      ["Student Limit", "300"],
      ["Parents Limit", "300"],
      ["Staff Limit", "20"],
      ["Teacher Limit", "10"],
      ["Attendance", "Included"],
      ["Homework", "Included"],
      ["Online Exam", "Included"],
      ["Library", "Included"],
      ["Human Resource", "Included"],
      ["Transport", "Included"],
      ["Website", "Included"],
      ["WhatsApp Integration", "Included"],
      ["Bulk SMS & Email", "Included"],
    ],
  },
  {
    id: "pro",
    name: "Pro Plan",
    oldPrice: "₹12999.0",
    price: "₹11999.0",
    duration: "/ 1 Years",
    description: "Perfect for schools up to 500 students.",
    features: [
      ["Student Limit", "500"],
      ["Parents Limit", "500"],
      ["Staff Limit", "50"],
      ["Teacher Limit", "40"],
      ["Attendance", "Included"],
      ["Homework", "Included"],
      ["Online Exam", "Included"],
      ["Library", "Included"],
      ["Human Resource", "Included"],
      ["Hostel", "Included"],
      ["Transport", "Included"],
      ["Website", "Included"],
      ["WhatsApp Integration", "Included"],
    ],
  },
  {
    id: "premium",
    name: "Premium Plan",
    oldPrice: "₹23999.0",
    price: "₹22999.0",
    duration: "/ 1 Years",
    description: "Perfect for schools up to 1000 students.",
    features: [
      ["Student Limit", "1000"],
      ["Parents Limit", "1000"],
      ["Staff Limit", "100"],
      ["Teacher Limit", "100"],
      ["Attendance", "Included"],
      ["Homework", "Included"],
      ["Online Exam", "Included"],
      ["Library", "Included"],
      ["Office Accounting", "Included"],
      ["Transport", "Included"],
      ["Website", "Included"],
      ["WhatsApp Integration", "Included"],
      ["Live Class", "Included"],
    ],
  },
];

function Pricing({ onSelectPlan }) {
  const [selectedPlan, setSelectedPlan] = useState("pro");

  const handleSelect = (plan) => {
    setSelectedPlan(plan.id);
    onSelectPlan(`Interested in ${plan.name}`);
  };

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        <div className="section-heading pricing-heading">
          <h2>Our Pricing Plans</h2>
          <p>
            Explore our range of pricing options, each designed to meet your
            specific needs with clear and transparent pricing.
          </p>
        </div>

        <div className="pricing-wrapper">
          {plans.map((plan) => {
            const isActive = selectedPlan === plan.id;

            return (
              <article
                className={isActive ? "pricing-card active-card reveal-item" : "pricing-card reveal-item"}
                key={plan.id}
              >
                <div className={isActive ? "pricing-card-top active-top" : "pricing-card-top"}>
                  <h3>{plan.name}</h3>
                  <div className="pricing-price">
                    {plan.oldPrice ? <span className="old-price">{plan.oldPrice}</span> : null}
                    <span className="new-price">{plan.price}</span>
                    <span className="price-duration">{plan.duration}</span>
                  </div>
                  <p>{plan.description}</p>
                </div>

                <div className={isActive ? "pricing-card-bottom active-bottom" : "pricing-card-bottom"}>
                  {plan.features.map(([label, value]) => (
                    <div className="pricing-row" key={`${plan.id}-${label}`}>
                      <span>{label}</span>
                      <span>{value}</span>
                    </div>
                  ))}

                  <div className="pricing-divider" />

                  <button
                    className={isActive ? "pricing-btn white-btn" : "pricing-btn"}
                    type="button"
                    onClick={() => handleSelect(plan)}
                  >
                    Select Plan
                    <FaArrowRight aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
