import styles from "./ResumeModals.module.css";

export default function ResumeModals({ stage, onClose }) {
  return (
    <>
      <div
        id="resumeModal"
        className={`${styles.backdrop}${stage === "resume" ? ` ${styles.open}` : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={stage !== "resume"}
      >
        <div className={styles.panel}>
          <button
            type="button"
            className={styles.close}
            aria-label="Close"
            onClick={onClose}
          />
          <p>For more details, please check the contact section!</p>
        </div>
      </div>

      <div
        id="firstModal"
        className={`${styles.backdrop}${stage === "first" ? ` ${styles.open}` : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={stage !== "first"}
      >
        <div className={styles.panel}>
          <button
            type="button"
            className={styles.close}
            aria-label="Close"
            onClick={onClose}
          />
          <p>Anil is currently working as a backend developer...</p>
        </div>
      </div>

      <div
        id="secondModal"
        className={`${styles.backdrop}${stage === "second" ? ` ${styles.open}` : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={stage !== "second"}
      >
        <div className={styles.panel}>
          <button
            type="button"
            className={styles.close}
            aria-label="Close"
            onClick={onClose}
          />
          <p>He is open to taking on freelance projects.</p>
        </div>
      </div>
    </>
  );
}
