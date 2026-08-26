import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./servicesBanner.css";
import { services } from "../../Data/servicesData";
import SectionHeader from "../../shared/sectionHeading";

function ServicesBanner() {
  useEffect(() => {
    document.title = "Services | Frontend & React Development";
  }, []);

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-heading-container">
          <SectionHeader
            eyebrow="What I do"
            title="Building thoughtful digital experiences"
          />

          <p className="services-subtitle">
            I help brands, individuals, and startups transform their ideas and
            designs into responsive and user-focused web experiences.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.id}>
              <span className="service-icon" aria-hidden="true">
                {service.icon}
              </span>

              <div className="service-middle">
                <h2 className="service-title">{service.title}</h2>

                <p className="service-description">
                  {service.description}
                </p>
              </div>

              <Link to="/contact" className="service-card-btn">
                Get Started <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesBanner;