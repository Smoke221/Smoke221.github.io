import { skills } from "../data/skills.js";
import sec from "../styles/section.module.css";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={sec.section}>
      <div className={sec.inner}>
        <header className={sec.header}>
          <h2 className={sec.title}>Skills &amp; tools</h2>
          <p className={sec.subtitle}>
            <span className="accent">Ideas</span> turned into working software
          </p>
        </header>
        <div className={styles.grid}>
          {skills.map((s) => (
            <div key={s.name} className={styles.card}>
              <img className={styles.icon} src={s.img} alt="" />
              <h3 className={styles.name}>{s.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
