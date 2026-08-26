import BannerIntro from "./bannerIntro";
import LuminaBanner from "./luminaBanner";
import Testimonials from "./testimonials";

function Home() {
    return (
        <main>
            <BannerIntro />
            <Testimonials />
            <LuminaBanner />
        </main>
    )
}

export default Home;