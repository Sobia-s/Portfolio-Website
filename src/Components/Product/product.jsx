import { useEffect } from "react";
import "./product.css";
import { product } from "../../Data/productData";
import SectionHeader from "../../shared/sectionHeading";
import Button from "../../shared/button";

function Product() {
  useEffect(() => {
    document.title = "My product Lumina: a portfolio system";
  }, []);

  return (
    <main className="product-page">
      <div className="product-container">
        {/* Hero */}
        <div className="product-hero">
          <SectionHeader title={product.title} />
          <p className="product-tagline">{product.tagline}</p>
        </div>

        <div className="product-divider" />

        {/* Overview */}
        <div className="product-section">
          <h2 className="product-section-heading">Overview</h2>

          <p className="product-section-text">
            {product.overview.text}
          </p>

          <img
            src={product.overview.image}
            alt={product.overview.imageAlt}
            className="product-image"
            loading="lazy"
          />
        </div>

        <div className="product-divider" />

        {/* Problem */}
        <div className="product-section">
          <h2 className="product-section-heading">
            {product.problem.heading}
          </h2>

          <p className="product-section-text">
            {product.problem.text}
          </p>
        </div>

        <div className="product-divider" />

        {/* Goal */}
        <div className="product-section">
          <h2 className="product-section-heading">
            {product.goal.heading}
          </h2>

          <p className="product-section-text product-goal-text">
            {product.goal.text}
          </p>

          <ul className="product-list">
            {product.goal.list.map((item) => (
              <li className="product-list-item" key={item}>
                <span
                  className="product-list-arrow"
                  aria-hidden="true"
                >
                  →
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="product-divider" />

        {/* Audience */}
        <div className="product-section">
          <h2 className="product-section-heading">
            {product.audience.heading}
          </h2>

          <p className="product-section-text">
            {product.audience.intro}
          </p>

          <ul className="product-list">
            {product.audience.list.map((item) => (
              <li className="product-list-item" key={item}>
                <span
                  className="product-list-dot"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="product-divider" />

        {/* Scope */}
        <div className="product-section">
          <h2 className="product-section-heading">
            {product.scope.heading}
          </h2>

          <p className="product-section-text">
            {product.scope.intro}
          </p>

          <ul className="product-list">
            {product.scope.list.map((item) => (
              <li className="product-list-item" key={item}>
                <span
                  className="product-list-arrow"
                  aria-hidden="true"
                >
                  →
                </span>
                {item}
              </li>
            ))}
          </ul>

          <p className="product-section-text">
            {product.scope.ending}
          </p>
        </div>
        <div className="product-divider" />

        {/* Features */}
        <div className="product-section">
          <h2 className="product-section-heading">
            {product.features.heading}
          </h2>

          <ul className="product-list">
            {product.features.list.map((item) => (
              <li className="product-list-item" key={item}>
                <span
                  className="product-list-arrow"
                  aria-hidden="true"
                >
                  →
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="product-divider" />

        {/* Process */}
        <div className="product-section">
          <h2 className="product-section-heading">
            {product.process.heading}
          </h2>

          <p className="product-section-text">
            {product.process.text}
          </p>
        </div>

        <div className="product-divider" />

        {/* Outcome */}
        <div className="product-section">
          <h2 className="product-section-heading">
            {product.outcome.heading}
          </h2>

          <p className="product-section-text">
            {product.outcome.text}
          </p>

          <img
            src={product.outcome.articleImage}
            alt={product.outcome.articleImageAlt}
            className="product-image"
            loading="lazy"
          />

          <blockquote className="product-testimonial">
            <p className="product-testimonial-text">
              "{product.outcome.testimonial}"
            </p>

            <cite className="product-testimonial-author">
              - {product.outcome.testimonialAuthor}
            </cite>
          </blockquote>

          <a
            href={product.outcome.articleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="product-article-link"
          >
            Read full article on LinkedIn →
          </a>
        </div>

        <div className="product-divider" />

        {/* Result */}
        <div className="product-section">
          <h2 className="product-section-heading">
            {product.cta.heading}
          </h2>

          <p className="product-section-text">
            {product.cta.intro}
          </p>

          <div className="product-buttons">
            <Button
              to={product.liveDemo}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              See Live Demo
            </Button>

            <Button
              to={product.buyLink}
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore the System
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Product;