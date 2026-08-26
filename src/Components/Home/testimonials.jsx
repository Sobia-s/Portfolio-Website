import "./testimonials.css";
import { testimonials } from "../../Data/testimonialsData";
import SectionHeader from "../../shared/sectionHeading";

export default function Testimonials() {
  return (
    <section className="testimonial-section">
      <div className="testimonial-banner-container">
        <SectionHeader
          eyebrow="What people say"
          title="Trusted by professionals"
        />

        <div className="testimonial-cards-container">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="testimonial-card"
            >
              <div className="testimonial-user">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-user-img"
                  loading="lazy"
                />

                <div className="testimonial-user-info">
                  <span className="testimonial-user-name">
                    {testimonial.name}
                  </span>

                  <span className="testimonial-user-title">
                    {testimonial.title}
                  </span>
                </div>
              </div>

              <div className="testimonial-content">
                <p className="testimonial-card-heading">
                  {testimonial.heading}
                </p>

                <p className="testimonial-description">
                  {testimonial.description}
                </p>
              </div>

              <a
                href={testimonial.articleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="testimonial-article-link"
                aria-label={`${testimonial.articleLinkText} (opens in a new tab)`}
              >
                {testimonial.articleLinkText}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}