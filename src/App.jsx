import { useCallback, useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import MobileNav from "./components/MobileNav.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import ResumeModals from "./components/ResumeModals.jsx";

export default function App() {
  const resumeTimersRef = useRef([]);
  const [resumeStage, setResumeStage] = useState(null);
  const [navScrolled, setNavScrolled] = useState(false);

  const clearResumeTimers = useCallback(() => {
    resumeTimersRef.current.forEach((id) => clearTimeout(id));
    resumeTimersRef.current = [];
  }, []);

  const closeResumeFlow = useCallback(() => {
    clearResumeTimers();
    setResumeStage(null);
  }, [clearResumeTimers]);

  const downloadResume = useCallback(() => {
    clearResumeTimers();
    setResumeStage("first");
    const t1 = window.setTimeout(() => setResumeStage("second"), 2000);
    const t2 = window.setTimeout(() => setResumeStage("resume"), 4000);
    const t3 = window.setTimeout(() => {
      setResumeStage(null);
    }, 7000);
    resumeTimersRef.current.push(t1, t2, t3);
  }, [clearResumeTimers]);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest?.("a[href^='#']");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    };
    document.body.addEventListener("click", onClick);
    return () => document.body.removeEventListener("click", onClick);
  }, []);

  useEffect(() => () => clearResumeTimers(), [clearResumeTimers]);

  return (
    <>
      <Navbar scrolled={navScrolled} onResumeClick={downloadResume} />
      <MobileNav />
      <Home />
      <main className="page-sections">
        <About onResumeClick={downloadResume} />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <ResumeModals stage={resumeStage} onClose={closeResumeFlow} />
    </>
  );
}
