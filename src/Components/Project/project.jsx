import { useEffect, useState } from "react";
import "./project.css";
import { projects } from "../../Data/projectsData";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import SectionHeader from "../../shared/sectionHeading";
import Button from "../../shared/button";

function Projects() {
  useEffect(() => {
    document.title = "Work | React & Frontend Development";
  }, []);

  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("react");

  // First project is the featured project.
  const [featured, ...rest] = projects;

  const filteredProjects = rest.filter(
    (project) => project.category === filter,
  );

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <main className="project-section">
      <div className="project-container">
        {/* Heading */}
        <div className="project-heading-container">
          <SectionHeader
            eyebrow="A Selection of My Work"
            title="How I turn ideas into thoughtful web experiences"
          />
        </div>

        {/* Project filters */}
        <nav
          className="project-filter"
          aria-label="Filter projects by technology"
        >
          <button
            type="button"
            className={filter === "react" ? "active" : ""}
            onClick={() => setFilter("react")}
            aria-pressed={filter === "react"}
          >
            React
          </button>

          <button
            type="button"
            className={filter === "wordpress" ? "active" : ""}
            onClick={() => setFilter("wordpress")}
            aria-pressed={filter === "wordpress"}
          >
            WordPress
          </button>
        </nav>

        {/* Featured Project */}
        {filter === "react" && (
          <article className="project-featured-card">
            <div className="project-featured-image-container">
              <img
                src={featured.image}
                alt={`${featured.title} project preview`}
                className="project-featured-image"
                loading="lazy"
              />
            </div>

            <div className="project-featured-content">
              <SectionHeader
                eyebrow="Featured Product"
                title={featured.title}
              />

              <div className="project-featured-description">
                {featured.description}
              </div>

              {featured.technologies?.length > 0 && (
                <div className="project-tech-tags">
                  {featured.technologies.map((tech) => (
                    <span key={tech} className="project-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <div className="project-featured-links">
                {featured.caseStudy && (
                  <Button
                    to={featured.caseStudy}
                    variant="primary"
                  >
                    Case Study
                  </Button>
                )}

                {featured.demo && (
                  <Button
                    to={featured.demo}
                    variant="secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </Button>
                )}
              </div>
            </div>
          </article>
        )}

        {/* Project Grid */}
        <div className="project-grid">
          {filteredProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-card-image-wrapper">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="project-card-img"
                  loading="lazy"
                />
              </div>

              <div className="project-card-content">
                <h2 className="project-card-title">
                  {project.title}
                </h2>

                <div className="project-card-description">
                  {project.description}
                </div>

                {project.technologies?.length > 0 && (
                  <div className="project-tech-tags">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="project-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="project-card-links">
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card-link"
                    >
                      <FaGithub aria-hidden="true" />
                      <span>See Code</span>
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card-link project-card-link-primary"
                    >
                      <span>Live</span>
                      <FiExternalLink aria-hidden="true" />
                    </a>
                  )}

                  {project.canvaImage && (
                    <button
                      type="button"
                      className="project-card-link"
                      onClick={() => openModal(project)}
                      aria-label={`View ${project.title} website preview`}
                    >
                      See Website
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Website Preview Modal */}
      {selectedProject && (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProject.title} website preview`}
          onClick={closeModal}
        >
          <div
            className="modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={closeModal}
              aria-label="Close website preview"
            >
              <span aria-hidden="true">✕</span>
            </button>

            <img
              src={selectedProject.canvaImage}
              alt={`${selectedProject.title} website preview`}
              className="modal-image"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </main>
  );
}

export default Projects;