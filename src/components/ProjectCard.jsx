import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project, variant }) {
  const cover = project.images?.[0];
  const extraShots = Math.max(0, (project.images?.length ?? 0) - 1);

  return (
    <article
      className={
        variant === "featured"
          ? `${styles.article} ${styles.featured}`
          : `${styles.article} ${styles.card}`
      }
    >
      <div className={styles.media}>
        {cover ? (
          <img
            src={cover}
            alt={`${project.title} preview`}
            className={styles.cover}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className={styles.coverPlaceholder} aria-hidden />
        )}
        {extraShots > 0 ? (
          <span className={styles.shotBadge}>+{extraShots} in project</span>
        ) : null}
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.meta}>
          <ul className={styles.tech} aria-label="Tech stack">
            {project.tech.map((t) => (
              <li key={t}>
                <span className={styles.techPill}>{t}</span>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <a
              className={styles.btnPrimary}
              href={project.live}
              target="_blank"
              rel="noreferrer"
            >
              View live
            </a>
            {project.github ? (
              <a
                className={styles.btnSecondary}
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                Source
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
