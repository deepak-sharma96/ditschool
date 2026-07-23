import { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "Who can use this software?",
    answer:
      "Our School Management Software is designed for schools, coaching institutes, colleges, teachers, students and administrators. It helps manage daily academic and administrative activities from one platform.",
  },
  {
    question: "Can parents track student attendance?",
    answer:
      "Yes. Parents can easily monitor attendance, homework, exam results and important school updates through the parent portal or mobile application.",
  },
  {
    question: "Is the software cloud-based?",
    answer:
      "Yes. Our cloud-based solution allows secure access from anywhere using a computer, tablet or smartphone with an internet connection.",
  },
  {
    question: "Is my school's data secure?",
    answer:
      "Absolutely. We use secure servers, encrypted data transmission and regular backups to keep your school information safe and protected.",
  },
  {
    question: "Can the software be customized?",
    answer:
      "Yes. We provide customization options such as school branding, logo, themes and additional modules based on your institution's requirements.",
  },
  {
    question: "How can I get started?",
    answer:
      "Simply contact our team or request a free demo. We will guide you through setup, training and complete onboarding to help you get started quickly.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="section-heading faq-heading">
          <h2>Frequently Asked Questions (FAQ)</h2>
          <p>Find answers to the most common questions about our School Management Software.</p>
        </div>

        <div className="faq-wrapper">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article className={isOpen ? "faq-item active" : "faq-item"} key={item.question}>
                <button
                  className="faq-question"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <h3>{item.question}</h3>
                  <span className="faq-icon" aria-hidden="true">
                    {isOpen ? "-" : "+"}
                  </span>
                </button>

                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
