import CTA from "../CTA/cta";
import Testimonials from "../Home/testimonials";
import ServicesBanner from "./servicesBanner";

function Services() {
    return (
        <main>
            <ServicesBanner />
            <Testimonials />
            <CTA />
        </main>
    );
}

export default Services;