import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import sec from "../styles/section.module.css";
import styles from "./Projects.module.css";

export default function Projects() {
  if (!projects.length) {
    return null;
  }

  const [featured, ...rest] = projects;

  return (
    <section id="projects" className={`${sec.section} ${styles.root}`}>
      <header className={styles.header}>
        <h2 className={styles.title}>Selected work</h2>
        <p className={styles.subtitle}>
          <span className="accent">Performance</span> beats promises—backend and
          full-stack builds that stay usable as they grow.
        </p>
      </header>

      <div className={styles.layout}>
        {featured ? (
          <ProjectCard project={featured} variant="featured" />
        ) : null}
        {rest.length > 0 ? (
          <div className={styles.grid}>
            {rest.map((project) => (
              <ProjectCard key={project.title} project={project} variant="card" />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
