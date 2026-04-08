import styles from "./Home.module.css";

const INTERESTS = [
  "Code",
  "Coffee",
  "Cooking",
  "Freelancing",
  "Travel",
  "Enthusiastic",
];

export default function Home() {
  return (
    <div id="home" className={styles.root}>
      <div className={styles.layout}>
        <p className={styles.eyebrow}>Backend &amp; full-stack developer</p>
        <h1 className={styles.title}>Anil Kancharla</h1>
        <p className={styles.lede}>
          I design and ship reliable APIs, data layers, and full-stack web
          experiences—so your product stays fast, maintainable, and easy to
          evolve.
        </p>
        <div className={styles.actions}>
          <a className={`${styles.btn} ${styles.btnPrimary}`} href="#contact">
            Get in touch
          </a>
          <a className={`${styles.btn} ${styles.btnGhost}`} href="#projects">
            View work
          </a>
        </div>
        <ul className={styles.chips} aria-label="Interests">
          {INTERESTS.map((label) => (
            <li key={label}>
              <span className={styles.chip}>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
