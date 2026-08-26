import img0 from "../Assets/projects/0.png";
import img1 from "../Assets/projects/1.png";
import img2 from "../Assets/projects/2.png";
import img3 from "../Assets/projects/3.png";
import img4 from "../Assets/projects/4.png";
import img5 from "../Assets/projects/5.png";
import img6 from "../Assets/projects/6.png";
import wpPhotoImg from "../Assets/projects/7.png";
import wpBlogImg from "../Assets/projects/8.png";

export const projects = [
  {
    id: "lumina",
    title: "Lumina: React Portfolio System",
    category: "react",
    image: img0,
    technologies: [
      "React",
      "Accessibility",
      "Responsive Design",
      "Scalable Architecture",
    ],
    description: (
      <>
        I built Lumina, a production-ready React portfolio system that helps professionals
        launch a polished digital identity without design stress or backend complexity.
        <br />
        Built around reusable architecture, accessibility, responsive design, and a simple
        setup experience.
      </>
    ),
    caseStudy: "/product",
    demo: "https://react-portfolio-template-indol.vercel.app/",
  },
  {
    id: "lumina-landing-page",
    title: "Lumina Landing Page",
    category: "react",
    image: img1,
    technologies: ["HTML", "CSS", "Responsive Design", "UI Implementation"],
    description: (
      <>
        I designed and developed Lumina’s landing page using HTML and CSS,
        bringing together clean visual design, responsive layouts, and thoughtful
        frontend structure. I focused on making the product feel clear,
        easy to explore, and consistent with Lumina’s purpose.
      </>
    ),
    code: "https://github.com/Sobia-s/lumina-landing-page",
    live: "https://lumina-portfolio-system.vercel.app/",
  },
  {
    id: "e-commerce-platform",
    title: "E-Commerce Platform",
    category: "react",
    image: img2,
    technologies: ["React", "React Router", "JSX", "CSS", "UI Design"],
    description: (
      <>
        I built an e-commerce platform for a garden firm to make online
        shopping simpler and more convenient.
        <br />
        Implemented a dynamic product catalog, smooth cart management, and an
        integrated checkout with a clean, responsive UI.
        <br />
        The result is a fast, user-friendly shopping experience.
      </>
    ),
    code: "https://github.com/Sobia-s/Garden-firm-project",
    live: "https://lucky-shrub-garden-firm.netlify.app/",
  },
  {
    id: "restaurant-website",
    title: "Restaurant Website",
    category: "react",
    image: img3,
    technologies: ["React", "JSX", "CSS", "UX Design", "Responsive Design"],
    description: (
      <>
        I developed a website for Little Lemon to make table reservations simpler
        and more convenient.
        <br />
        Implemented dynamic booking functionality with a fully operational
        reservation form and visually appealing UI.
        <br />
        The result is a responsive platform that makes table reservations quick
        and easy.
      </>
    ),
    code: "https://github.com/Sobia-s/my-capstone-project",
    live: "https://my-capstone.netlify.app/",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    category: "react",
    image: img4,
    technologies: ["React", "Chakra UI", "UI Components", "JSX"],
    description: (
      <>
        Created a modern-style portfolio for React developers to simplify
        navigation.
        <br />
        Implemented a unique, responsive design with functional form submission
        (including form validation), featured projects, and intuitive
        navigation.
        <br />
        The result is a responsive, modern portfolio that effectively showcases
        personality and work.
      </>
    ),
    code: "https://github.com/Sobia-s/React-Project",
    live: "https://myreact-projects.netlify.app/",
  },
  {
    id: "photography-website",
    title: "Photography Website",
    category: "wordpress",
    image: img5,
    technologies: ["WordPress", "Elementor", "WPForms", "ElementsKit Lite"],
    description: (
      <>
        Built a photography website to showcase work and manage client bookings
        easily.
        <br />
        Developed with a visually appealing design, interactive gallery, and
        working contact form.
        <br />
        The result is an easy-to-use site that shows photography and makes
        contacting clients simple.
      </>
    ),
    canvaImage: wpPhotoImg,
  },
  {
    id: "blog-website",
    title: "Blog Website",
    category: "wordpress",
    image: img6,
    technologies: ["WordPress", "Elementor", "WPForms", "UI Design"],
    description: (
      <>
        Built a blog website to provide an easy-to-manage platform for content
        creation.
        <br />
        Developed with a visually appealing, clean layout, integrated contact
        form, and post features for smooth navigation and enjoyable reading.
        <br />
        The result is a user-friendly blog that makes creating, managing, and
        reading content simple and engaging.
      </>
    ),
    canvaImage: wpBlogImg,
  },
];
