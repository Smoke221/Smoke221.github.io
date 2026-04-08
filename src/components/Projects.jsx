import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.root}>
      <header className={styles.header}>
        <h2 className={styles.title}>Selected work</h2>
        <p className={styles.subtitle}>
          <span className="accent">Performance</span> beats promises—backend and
          full-stack builds that stay usable as they grow.
        </p>
      </header>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          project={project}
          reversed={index % 2 === 1}
        />
      ))}
    </section>
  );
}
