import { useEffect } from "react";
import "./story.css";
import drawing1 from "../../Assets/story/1st.jpg";
import drawing2 from "../../Assets/story/2nd.jpg";
import drawing3 from "../../Assets/story/3rd.jpg";
import LuminaSection from "../LuminaGallery/luminaGallery";
import SectionHeader from "../../shared/sectionHeading";

const drawings = [drawing1, drawing2, drawing3];

function Story() {
  useEffect(() => {
    document.title = "How I Became a Web Developer | Sobia";
  }, []);

  return (
    <section className="story-container">
      <div className="story-inner-container">
        <SectionHeader title="Where it all began" />

        <p className="story-container-para">
          From the beginning, I've been deeply curious and passionate about
          drawing and colors. I loved creating landscapes, birds, sketches,
          and colorful canvases. Each piece I finished filled me with happiness
          and pride. Some of my early creations:
        </p>

        <div className="gallery">
          {drawings.map((src, index) => (
            <div className="gallery-item" key={src}>
              <img
                src={src}
                alt={`Sobia's early drawing ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <p className="story-container-para">
          Then, somewhere along the way, websites started catching my attention.
          I loved how they looked, but even more, I wanted to understand what
          was happening behind the screen.
        </p>

        <ul className="story-container-list">
          <li>How are they built?</li>
          <li>How do they work?</li>
          <li>Who makes them?</li>
        </ul>

        <p className="story-container-para">
          That curiosity led me to web development. WordPress was my first step.
          I built simple sites and genuinely enjoyed it. But something kept
          pulling me further; I wanted to write the code myself, from scratch.
        </p>

        <p className="story-container-para">
          That's when I chose frontend development. I explored HTML tags, added
          colors with CSS, and placed my first image on a page —{" "}
          <i>I made this!</i> That moment of pride carried me forward.
        </p>

        <p className="story-container-para">
          I love building things for the web, real, functional web experiences
          that solve real problems and create better user experiences. Knowing
          firsthand how challenging it can be to build a professional digital
          identity, I decided to create something that helps others do it with
          confidence.
        </p>

        <p className="story-container-para">
          That idea became Lumina: a production-ready React portfolio system
          that helps freelancers, developers, data scientists, and students
          launch a personalized, professional portfolio in a day, without
          design stress, backend complexity, or starting from scratch.
        </p>

        <LuminaSection />

        <p className="story-container-para">
          Building Lumina strengthened my skills beyond frontend development.
          It taught me to think like a product builder, making thoughtful
          decisions about architecture, user experience, accessibility, and
          scalability. Those lessons continue to shape every project I build
          today.
        </p>

        <p className="story-container-para">
          And that’s probably the best way to describe my journey so far:
        </p>

        <p className="story-container-para">
          from drawing → to web development → to building something of my own.
        </p>

        <p className="story-container-para">
          The tools changed, but the part I love has stayed the same: creating
          something from an idea and seeing it come to life.
        </p>

        <p className="story-container-para">
          Thanks for reading - You're great! 💙
        </p>
      </div>
    </section>
  );
}

export default Story;