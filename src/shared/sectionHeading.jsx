import "./sectionHeading.css";

const SectionHeader = ({ eyebrow, title, align = "left" }) => {
  return (
    <div className={`section-header ${align}`}>
      {eyebrow && (
        <p className="section-header-eyebrow">{eyebrow}</p>
      )}
      <h2 className="section-header-title">{title}</h2>
    </div>
  );
};

export default SectionHeader;