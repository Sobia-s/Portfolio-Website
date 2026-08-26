import luminaOverview from "../Assets/case-study/1.png";
import luminaArticle from "../Assets/case-study/2.png";

export const product = {
  title: "Lumina React Portfolio System",

  tagline:
    "A case study on building a production-ready portfolio system for professionals.",

  liveDemo: "https://react-portfolio-template-indol.vercel.app/",
  buyLink: "https://lumina-portfolio-system.vercel.app/",
  articleLink:
    "https://www.linkedin.com/pulse/what-developer-wrote-lumina-olivia-wilcox",

  overview: {
    text: "Lumina is a production-ready React portfolio system built for engineers, developers, data scientists, freelancers, and students who want a personalized professional portfolio without design confusion, backend complexity, or starting from scratch. It started with a simple idea: a portfolio should do more than list skills and projects. It should tell your story and help people understand the person behind the work.",
    image: luminaOverview,
    imageAlt: "Lumina portfolio system overview",
  },

  problem: {
    heading: "The Problem",
    text: "I noticed talented professionals with strong skills and impressive work struggling to build a professional digital presence. Their work was there, but their story wasn't. Building a portfolio often meant dealing with design decisions, project setup, responsive layouts, and code they didn't know how to customize. I wanted to make that process simpler.",
  },

  goal: {
    heading: "The Goal",
    text: "Build a complete portfolio system that is clean, scalable, accessible, and easy to customize, allowing anyone to launch a professional digital identity in a day.",
    list: [
      "Set up a portfolio without design or backend struggles",
      "Manage content from one central location",
      "Customize the portfolio to match a personal brand",
    ],
  },

  audience: {
    heading: "Who I Built Lumina For",
    intro:
      "Lumina is designed for professionals with basic coding knowledge who want to build a strong digital presence:",
    list: [
      "Developers and engineers building or upgrading their portfolio",
      "Data scientists and AI engineers showcasing their work",
      "Freelancers and students building their digital identity",
      "Professionals who want their work to be easier to discover",
    ],
  },

  scope: {
    heading: "The Challenges",
    intro:
      "The biggest challenge was making Lumina powerful enough to scale while keeping it simple enough for someone with basic coding knowledge to understand and customize. I focused on four areas:",

    list: [
      "Config-driven content: all major content can be managed from one place without editing components",
      "Theme system: global branding, colors, and light/dark modes are managed consistently",
      "Step-by-step documentation: setup instructions written for beginners as well as experienced developers",
      "Reusable components: sections, cards, buttons, and other UI elements can be reused and customized easily",
    ],

    ending:
      "The most challenging part was building the theme system and managing global branding across the application while keeping the architecture understandable and maintainable.",
  },

  features: {
    heading: "What's Inside Lumina",
    list: [
      "Fully responsive design with light and dark modes",
      "Customizable branding and smooth animations",
      "Config-driven content management",
      "Step-by-step documentation for easy setup",
      "Reusable components and editable pre-built sections",
      "Accessibility-focused and SEO-ready structure",
      "Dynamic project details with structured content flow",
      "Contact form with validation and feedback",
    ],
  },

  process: {
    heading: "My Process",

    text: "I started by building my own portfolio and documenting every point of friction. Whenever something felt too complicated or required unnecessary effort, I asked how it could be simpler. Those observations shaped Lumina's features. I then focused on the structure and user experience, designing each section to guide visitors from who you are, to what you build, to how you think. From there, I developed the reusable component system, theme architecture, configuration system, and documentation, followed by testing and refinement.",
  },

  outcome: {
    heading: "Outcomes & Results",

    text: "Lumina launched and made its first sale within 24 hours. More importantly, the first customer shared a detailed LinkedIn article about the product, discussing its architecture, technical foundation, design, reusable components, and scalability. That feedback gave me valuable validation that the system was not only useful, but also technically thoughtful and approachable.",

    articleImage: luminaArticle,
    articleImageAlt: "LinkedIn article reviewing Lumina",

    testimonial:
      "Lumina is a polished, thoughtfully structured React portfolio template. The layout is clean, components are reusable, theming is handled with CSS variables, and animations are tastefully encapsulated. An excellent starting point that's friendly for beginners and scalable for pros.",

    testimonialAuthor: "Olivia Wilcox, Founder & Senior SRE",
    articleLink:
      "https://www.linkedin.com/pulse/lighting-way-developers-inside-lumina-new-kind-portfolio-wilcox-zwige/?trackingId=ChqsGk8XRICPoiimAweCMg%3D%3D",
  },

  cta: {
    heading: "See Lumina in Action",

    intro:
      "How the system works and explore the product behind the case study.",
  },
};
