import { useEffect, useRef } from "react";
import sec from "../styles/section.module.css";
import styles from "./GithubSection.module.css";

function mountCalendar(el) {
  if (!el || el.dataset.githubCalendar === "1") return;
  if (typeof window.GitHubCalendar !== "function") return;
  el.dataset.githubCalendar = "1";
  window.GitHubCalendar(el, "Smoke221", { responsive: true });
}

export default function GithubSection() {
  const calendarRef = useRef(null);

  useEffect(() => {
    const el = calendarRef.current;
    const tick = () => mountCalendar(el);
    tick();
    const id = setInterval(tick, 100);
    const stop = setTimeout(() => clearInterval(id), 15000);
    return () => {
      clearInterval(id);
      clearTimeout(stop);
    };
  }, []);

  return (
    <section className={`${sec.section} ${sec.dark}`}>
      <div className={sec.inner}>
        <header className={sec.header}>
          <h2 className={sec.title}>GitHub activity</h2>
          <p className={sec.subtitle}>
            <span className="accent">Open work</span> and steady contributions
          </p>
        </header>
        <div className={styles.dashboard}>
          <div id="github" className={styles.grid}>
            <img
              id="github-stats-card"
              src="https://github-readme-stats.vercel.app/api?username=Smoke221&show_icons=true"
              alt="GitHub stats for Smoke221"
            />
            <img
              id="github-top-langs"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Smoke221&layout=compact"
              alt="Top languages for Smoke221"
            />
            <div className={styles.chartWrap}>
              <img
                src="https://ghchart.rshah.org/D1462F/Smoke221"
                alt="Smoke221 GitHub contribution chart"
              />
            </div>
            <div className={styles.calendarHost}>
              <div className="calendar" ref={calendarRef} />
            </div>
            <img
              id="github-streak-stats"
              src="https://github-readme-streak-stats.herokuapp.com/?user=Smoke221"
              alt="GitHub streak stats for Smoke221"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
