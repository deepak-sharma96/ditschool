import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import disha from "../../assets/images/disha.png";
import jsSchool from "../../assets/images/jsschool.png";
import sajda from "../../assets/images/sajda.png";
import "./Testimonials.css";

const testimonials = [
  {
    school: "JS Memorial Public School",
    logo: jsSchool,
    rating: 4.5,
    review:
      "DIT School helped us manage attendance, fee records, and parent communication from one simple dashboard.",
  },
  {
    school: "Disha Public School",
    logo: disha,
    rating: 5,
    review:
      "The ERP is easy for our staff to use, and daily academic updates now reach parents much faster.",
  },
  {
    school: "Sajda Memorial Public School",
    logo: sajda,
    rating: 5,
    review:
      "From exams to reporting, DIT School has reduced manual work and made school operations smoother.",
  },
];

function Rating({ value }) {
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 !== 0;

  return (
    <div className="testimonial-rating" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: fullStars }).map((_, index) => (
        <FaStar key={`star-${index}`} aria-hidden="true" />
      ))}
      {hasHalfStar ? <FaRegStarHalfStroke aria-hidden="true" /> : null}
    </div>
  );
}

function Testimonials() {
  return (
    <section className="testimonial-section" id="testimonials">
      <div className="testimonial-container">
        <div className="section-heading testimonial-heading-wrapper">
          <h2>Trusted by Schools, Loved by Educators</h2>
          <p>
            DIT School Software is empowering schools, teachers, and administrators
            nationwide. Our clients appreciate the simplicity, speed, and reliability
            of our ERP system.
          </p>
        </div>

        <div className="testimonial-wrapper">
          {testimonials.map((item) => (
            <article className="testimonial-card reveal-item" key={item.school}>
              <Rating value={item.rating} />

              <div className="testimonial-top">
                <img src={item.logo} alt={item.school} />
                <h3>{item.school}</h3>
              </div>

              <p className="testimonial-review">&ldquo;{item.review}&rdquo;</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
