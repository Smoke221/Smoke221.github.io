import sec from "../styles/section.module.css";
import styles from "./About.module.css";

export default function About({ onResumeClick }) {
  return (
    <section id="about" className={sec.section}>
      <div className={sec.inner}>
        <header className={sec.header}>
          <h2 className={sec.title}>About</h2>
          <p className={sec.subtitle}>
            <span className="accent">Grounded</span> in craft and collaboration
          </p>
        </header>
        <div className={styles.grid}>
          <img
            className={styles.portrait}
            src="/Images/me_working.webp"
            alt="Anil Kancharla"
          />
          <div className={styles.copy}>
            <p className={styles.intro}>
              I&apos;ve always been interested in technology and the way it can
              be used to make people&apos;s lives better. I&apos;ve been
              fascinated by how computers and software solve problems and
              streamline processes. I take real pride in my work and strive to
              do my best—committed to excellence in everything I do. I value
              teamwork and collaboration, and I enjoy working with others toward
              shared goals. Together, we can accomplish far more than we can
              alone.
            </p>
            <button
              type="button"
              id="resume-button-2"
              className={styles.resumeBtn}
              onClick={onResumeClick}
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
