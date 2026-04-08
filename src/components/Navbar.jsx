import styles from "./Navbar.module.css";

export default function Navbar({ onResumeClick, scrolled }) {
  return (
    <nav
      id="nav-menu"
      className={`${styles.root} ${scrolled ? styles.scrolled : ""}`}
    >
      <ul className={styles.logoList}>
        <li>
          <a id="nav-name" className={styles.wordmark} href="#home">
            Kancharla
          </a>
        </li>
      </ul>
      <div className={styles.right}>
        <ul className={styles.menuList}>
          <li>
            <a className={styles.link} href="#home">
              Home
            </a>
          </li>
          <li>
            <a className={styles.link} href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className={styles.link} href="#projects">
              Project
            </a>
          </li>
          <li>
            <a className={styles.link} href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className={styles.link} href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <button
          type="button"
          id="resume-button-1"
          className={styles.resumeBtn}
          onClick={onResumeClick}
        >
          Resume
        </button>
      </div>
    </nav>
  );
}
