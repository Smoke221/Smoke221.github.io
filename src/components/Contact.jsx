import sec from "../styles/section.module.css";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={sec.section}>
      <div className={sec.inner}>
        <header className={sec.header}>
          <h2 className={sec.title}>Connect</h2>
          <p className={sec.subtitle}>
            Don&apos;t be <span className="accent">a stranger</span>—say hello
          </p>
        </header>
        <div className={styles.layout}>
          <nav
            id="main-contact"
            className={styles.links}
            aria-label="Contact links"
          >
            <div className={styles.row}>
              <img src="/Images/github.svg" alt="" />
              <a id="contact-github" href="https://github.com/Smoke221">
                Smoke221
              </a>
            </div>
            <div className={styles.row}>
              <img src="/Images/linkedin.svg" alt="" />
              <a
                id="contact-linkedin"
                href="https://www.linkedin.com/in/anilkancharla2/"
              >
                Kancharla Anil
              </a>
            </div>
            <div className={styles.row}>
              <img src="/Images/mail.svg" alt="" />
              <a id="contact-email" href="mailto:kanilreddy867@gmail.com">
                kanilreddy867@gmail.com
              </a>
            </div>
            <div className={styles.row}>
              <img src="/Images/whatsapp.svg" alt="" />
              <a id="contact-phone" href="tel:+91-7995125254">
                +91-7995125254
              </a>
            </div>
          </nav>
          <div id="contact-info" className={styles.blurb}>
            <p>
              As a backend developer specializing in robust, scalable
              solutions, I&apos;m eager to collaborate on challenging projects.
              Whether you need to strengthen your team or work with a freelance
              partner, I&apos;d love to connect.
            </p>
            <p>
              If you have an idea that needs solid engineering behind it, reach
              out by email or phone—I&apos;m open to collaboration and freelance
              work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
