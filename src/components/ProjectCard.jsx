import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project, reversed }) {
  return (
    <article
      className={`${styles.card}${reversed ? ` ${styles.reverse}` : ""}`}
    >
      <div className={styles.info}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.tech}>
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className={styles.links}>
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer">
              Source code
            </a>
          ) : null}
          <a href={project.live} target="_blank" rel="noreferrer">
            Live site
          </a>
        </div>
      </div>
      <div className={styles.media}>
        <Swiper
          className={`swiper ${styles.swiperRoot}`}
          modules={[Autoplay, EffectCreative]}
          loop
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          effect="creative"
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-120%", 0, -500],
            },
            next: {
              opacity: 1,
              scale: 1.1,
            },
          }}
          speed={1000}
        >
          {project.images.map((src, i) => (
            <SwiperSlide key={src}>
              <img src={src} alt={`${project.title} screenshot ${i + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </article>
  );
}
