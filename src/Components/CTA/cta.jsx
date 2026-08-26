import "./cta.css";
import SectionHeader from "../../shared/sectionHeading";
import Button from "../../shared/button";

function CTA() {
    return (
        <section className="cta-section">
            <div className="cta-container">
                <SectionHeader
                    eyebrow="Let’s work together"
                    title="Have something in mind?"
                    align="center"
                />

                <p className="cta-text">
                    Let’s turn it into something you’ll be proud to share.
                </p>

                <Button to="/contact" variant="primary">
                    Let’s talk <span aria-hidden="true">→</span>
                </Button>
            </div>
        </section>
    );
}

export default CTA;