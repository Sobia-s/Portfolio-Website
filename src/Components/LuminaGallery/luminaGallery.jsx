import "./luminaGallery.css";
import image1 from "../../Assets/lumina-gallery/1.png";
import image2 from "../../Assets/lumina-gallery/2.webp";

const images = [
  {
    src: image1,
    alt: "Lumina portfolio template preview",
    link: "https://react-portfolio-template-indol.vercel.app/",
  },
  {
    src: image2,
    alt: "Lumina portfolio template preview",
    link: "https://lumina-portfolio-system.vercel.app/",
  },
];

export default function LuminaGallery() {
  return (
    <>
      <div className="shared-gallery">
        {images.map((image, index) => (
          <div className="shared-gallery-item" key={index}>
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                width="400"
                height="300"
              />
            </a>
          </div>
        ))}
      </div>

      <h2 className="lumina-cta-container">
        <span className="lumina-cta-text">
          From an idea to a real product.{"  "}
        </span>
        <a
          href="https://lumina-portfolio-system.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="lumina-cta-link"
        >
          Inside Lumina
        </a>
      </h2>
    </>
  );
}
