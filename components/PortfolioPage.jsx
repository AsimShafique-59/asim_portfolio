"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import {
  portfolioData,
  programmingLanguageNames,
  skillCategoryMeta,
  skillCategoryOrder
} from "@/data/portfolio";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" }
];

const monthYearFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric"
});

function formatMonthYear(dateValue) {
  if (!dateValue) return "Present";
  return monthYearFormatter.format(new Date(`${dateValue}T00:00:00`));
}

function formatExperienceRange(experience) {
  const startLabel = formatMonthYear(experience.startDate);
  const endLabel = experience.isCurrent ? "Present" : formatMonthYear(experience.endDate);
  return `${startLabel} - ${endLabel}`;
}

function formatEducationRange(education) {
  const startYear = education.startDate ? new Date(`${education.startDate}T00:00:00`).getFullYear() : "-";
  const endYear = education.endDate ? new Date(`${education.endDate}T00:00:00`).getFullYear() : "Present";
  return `${startYear} - ${endYear}`;
}

function getProjectYear(project) {
  if (project.endDate) return new Date(`${project.endDate}T00:00:00`).getFullYear();
  if (project.startDate) return new Date(`${project.startDate}T00:00:00`).getFullYear();
  return "Recent";
}

function truncateWords(text, maxWords) {
  if (!text) return "";
  const words = text.trim().split(/\s+/);
  if (words.length <= maxWords) return text;
  return `${words.slice(0, maxWords).join(" ")}...`;
}

function buildSkillGroups(skills) {
  const orderedSkills = [...skills].sort((a, b) => {
    if (a.order !== b.order) return a.order - b.order;
    return a.name.localeCompare(b.name);
  });

  const grouped = new Map();
  const languageSkills = [];

  for (const skill of orderedSkills) {
    if (programmingLanguageNames.has(skill.name.trim().toLowerCase())) {
      languageSkills.push(skill);
      continue;
    }

    if (!grouped.has(skill.category)) {
      grouped.set(skill.category, []);
    }
    grouped.get(skill.category).push(skill);
  }

  const groups = [];
  const seenCategories = new Set();

  if (languageSkills.length) {
    groups.push({
      category: "languages",
      title: "Programming Languages",
      icon: "bi bi-code-slash",
      skills: languageSkills
    });
  }

  for (const category of skillCategoryOrder) {
    const categorySkills = grouped.get(category) || [];
    if (!categorySkills.length) continue;

    const categoryMeta = skillCategoryMeta[category] || {};
    groups.push({
      category,
      title: categoryMeta.title || category,
      icon: categoryMeta.icon || "bi bi-stars",
      skills: categorySkills
    });

    seenCategories.add(category);
  }

  for (const [category, categorySkills] of grouped.entries()) {
    if (seenCategories.has(category)) continue;

    groups.push({
      category,
      title: category.replace(/_/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase()),
      icon: "bi bi-stars",
      skills: categorySkills
    });
  }

  return groups;
}

function validateContactForm(formData) {
  const errors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!formData.name.trim()) {
    errors.name = "This field is required.";
  }

  if (!formData.email.trim()) {
    errors.email = "This field is required.";
  } else if (!emailPattern.test(formData.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!formData.subject.trim()) {
    errors.subject = "This field is required.";
  } else if (formData.subject.trim().length < 3) {
    errors.subject = "Subject must be at least 3 characters long.";
  }

  if (!formData.message.trim()) {
    errors.message = "This field is required.";
  } else if (formData.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters long.";
  }

  return errors;
}

export default function PortfolioPage() {
  const {
    contact,
    experiences,
    projects,
    education,
    skills,
    stats,
    fullName,
    role,
    heroSummary,
    heroBadges: heroBadgeValues,
    focusTagline,
    aboutParagraphs,
    services,
    faq,
    brandName,
    brandLogoSrc,
    brandLogoAlt
  } = portfolioData;

  const [activeSection, setActiveSection] = useState("#home");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const layers = Array.from(document.querySelectorAll("[data-parallax]"));
    if (!layers.length) return undefined;

    let rafId = null;
    const update = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      layers.forEach((layer) => {
        const speed = Number(layer.dataset.parallax || 0);
        const offset = scrollY * speed;
        layer.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
      rafId = null;
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const featuredProjects = useMemo(() => projects.filter((project) => project.isFeatured), [projects]);
  const skillGroups = useMemo(() => buildSkillGroups(skills), [skills]);
  const heroBadges = useMemo(
    () => (heroBadgeValues?.length ? heroBadgeValues : skills.slice(0, 6).map((skill) => skill.name)),
    [heroBadgeValues, skills]
  );
  const statsWithCounts = useMemo(() => {
    const techCount = skills.length;
    return stats.map((stat) =>
      stat.label.toLowerCase().includes("technologies")
        ? { ...stat, target: techCount }
        : stat
    );
  }, [skills, stats]);
  const currentExperience = useMemo(
    () => experiences.find((experience) => experience.isCurrent) || experiences[0],
    [experiences]
  );

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = storedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      setActiveSection(window.location.hash);
    }

    const revealEls = Array.from(document.querySelectorAll(".reveal"));
    revealEls.forEach((element, index) => {
      const explicitDelay = Number(element.dataset.delay || 0);
      const staggerDelay = explicitDelay || Math.min(index * 45, 380);
      element.style.setProperty("--delay", `${staggerDelay}ms`);
    });

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -6% 0px" }
    );

    revealEls.forEach((element) => revealObserver.observe(element));

    const sections = NAV_ITEMS.map((item) => document.querySelector(item.href)).filter(Boolean);

    const activeSectionObserver = new IntersectionObserver(
      (entries) => {
        let bestEntry = null;

        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          if (!bestEntry || entry.intersectionRatio > bestEntry.intersectionRatio) {
            bestEntry = entry;
          }
        }

        if (bestEntry) {
          setActiveSection(`#${bestEntry.target.id}`);
        }
      },
      { threshold: [0.25, 0.45, 0.65] }
    );

    sections.forEach((section) => activeSectionObserver.observe(section));

    const scrollProgress = document.getElementById("scrollProgress");
    let isTicking = false;

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxHeight > 0 ? scrollTop / maxHeight : 0;

      if (scrollProgress) {
        scrollProgress.style.transform = `scaleX(${progress})`;
      }

      isTicking = false;
    };

    const handleScroll = () => {
      if (isTicking) return;
      isTicking = true;
      window.requestAnimationFrame(updateScrollProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    const counters = Array.from(document.querySelectorAll(".counter[data-target]"));
    const aboutStats = document.querySelector(".about-stats");

    const animateCounter = (counterElement) => {
      const target = Number(counterElement.dataset.target || 0);
      const duration = 900;
      let startTime = null;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;

        const progress = Math.min((timestamp - startTime) / duration, 1);
        const value = Math.floor(progress * target);
        counterElement.textContent = String(value);

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          counterElement.textContent = String(target);
        }
      };

      window.requestAnimationFrame(step);
    };

    counters.forEach((counterElement) => {
      counterElement.textContent = "0";
    });

    let hasAnimatedCounters = false;
    const startCounters = () => {
      if (hasAnimatedCounters) return;
      hasAnimatedCounters = true;

      counters.forEach((counterElement, index) => {
        window.setTimeout(() => animateCounter(counterElement), index * 120);
      });
    };

    const aboutInViewport = () => {
      if (!aboutStats) return false;
      const rect = aboutStats.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
    };

    let counterObserver = null;

    if (aboutInViewport()) {
      startCounters();
    } else if (aboutStats && "IntersectionObserver" in window) {
      counterObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            startCounters();
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
      );

      counterObserver.observe(aboutStats);
    } else {
      window.setTimeout(startCounters, 200);
    }

    return () => {
      revealObserver.disconnect();
      activeSectionObserver.disconnect();
      if (counterObserver) {
        counterObserver.disconnect();
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleNavClick = (event, targetId) => {
    event.preventDefault();

    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState({}, "", targetId);
    setActiveSection(targetId);
    setIsNavOpen(false);
  };

  const handleThemeToggle = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  };

  const handleFormInput = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    setFormErrors((previous) => ({ ...previous, [name]: "" }));
  };

  const handleContactSubmit = async (event) => {
    event.preventDefault();

    const errors = validateContactForm(formData);
    if (Object.keys(errors).length) {
      setFormErrors(errors);
      setFormStatus({
        type: "danger",
        message: "Please fix the errors in the contact form and try again."
      });
      return;
    }

    setIsSubmitting(true);
    setFormStatus(null);

    try {
      let successMessage = "Thanks! Your message was sent successfully.";
      const isLocalhost =
        typeof window !== "undefined" && ["localhost", "127.0.0.1"].includes(window.location.hostname);

      if (!isLocalhost) {
        const formBody = new URLSearchParams({
          "form-name": "contact",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }).toString();

        const response = await fetch("/__forms.html", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: formBody
        });

        if (!response.ok) {
          throw new Error("Netlify form submit failed.");
        }
      } else {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });

        const payload = await response.json();

        if (!response.ok) {
          setFormErrors(payload.errors || {});
          setFormStatus({
            type: "danger",
            message: payload.message || "Please fix the errors in the contact form and try again."
          });
          return;
        }

        successMessage = payload.message || successMessage;
      }

      setFormStatus({
        type: "success",
        message: successMessage
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setFormErrors({});
    } catch {
      setFormStatus({
        type: "warning",
        message: "Your message could not be delivered. Please try again or email me directly."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="scroll-progress" id="scrollProgress" aria-hidden="true" />
      <div className="bg-glow bg-glow-cyan" data-parallax="0.12" />
      <div className="bg-glow bg-glow-orange" data-parallax="0.2" />
      <div className="bg-glow bg-glow-lime" data-parallax="0.08" />

      <header className="site-header">
        <nav className="navbar navbar-expand-lg navbar-light container-xxl px-3 px-lg-4">
          <a className="navbar-brand brand-pill" href="#home" onClick={(event) => handleNavClick(event, "#home")}>
            <Image
              className="brand-logo"
              src={brandLogoSrc}
              alt={brandLogoAlt || `${brandName} logo`}
              width={42}
              height={42}
              priority
              unoptimized
            />
            <span className="brand-text">{brandName}</span>
          </a>

          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            aria-controls="mainNavbar"
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsNavOpen((previous) => !previous)}
          >
            <i className="bi bi-list fs-3" />
          </button>

          <div className={`collapse navbar-collapse justify-content-end${isNavOpen ? " show" : ""}`} id="mainNavbar">
            <ul className="navbar-nav nav-gap">
              {NAV_ITEMS.map((item) => (
                <li className="nav-item" key={item.href}>
                  <a
                    className={`nav-link${activeSection === item.href ? " active" : ""}`}
                    href={item.href}
                    aria-current={activeSection === item.href ? "page" : undefined}
                    onClick={(event) => handleNavClick(event, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="nav-item nav-actions">
                <button
                  className="theme-toggle"
                  type="button"
                  onClick={handleThemeToggle}
                  aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                  aria-pressed={theme === "dark"}
                >
                  <i className={`bi ${theme === "dark" ? "bi-sun-fill" : "bi-moon-stars-fill"}`} />
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="container-xxl px-3 px-lg-4 py-main">
        <section id="home" className="section hero-section">
          <div className="hero-shell reveal" data-anim="up">
            <span className="hero-spark hero-spark-1" aria-hidden="true" />
            <span className="hero-spark hero-spark-2" aria-hidden="true" />
            <span className="hero-spark hero-spark-3" aria-hidden="true" />

            <div className="hero-grid">
              <div className="hero-copy">
                <p className="hero-kicker">Python • DRF • Generative AI Systems</p>
                <h1 className="hero-title">{fullName}</h1>
                <p className="hero-subtitle">{role}</p>
                <p className="hero-description">{heroSummary}</p>

                <div className="hero-badges">
                  {heroBadges.map((badge) => (
                    <span className="hero-badge" key={badge}>
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="hero-actions">
                  <a href="#contact" className="btn hero-btn btn-main" onClick={(event) => handleNavClick(event, "#contact")}>
                    <i className="bi bi-envelope-fill me-2" />Get In Touch
                  </a>
                  <a href="#projects" className="btn hero-btn btn-outline-main" onClick={(event) => handleNavClick(event, "#projects")}>
                    <i className="bi bi-code-slash me-2" />View Projects
                  </a>
                </div>

                <div className="hero-social">
                  <a href={`mailto:${contact.email}`} aria-label="Email">
                    <i className="bi bi-envelope-fill" />
                  </a>
                  <a href={contact.linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i className="bi bi-linkedin" />
                  </a>
                  <a href={contact.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <i className="bi bi-github" />
                  </a>
                  <a href="tel:+923254155556" aria-label="Phone">
                    <i className="bi bi-telephone-fill" />
                  </a>
                </div>
              </div>

              <div className="hero-visual">
                <div className="hero-portrait">
                  <span className="hero-ring" aria-hidden="true" />
                  <Image
                    className="hero-avatar"
                    src="/images/profile-image.jpg"
                    alt={`Portrait of ${fullName}`}
                    width={240}
                    height={240}
                    priority
                  />
                </div>

                <div className="hero-mini-cards">
                  <article className="hero-mini-card">
                    <i className="bi bi-geo-alt-fill" aria-hidden="true" />
                    <div>
                      <p className="hero-mini-label">Based in</p>
                      <p className="hero-mini-value">{contact.location}</p>
                    </div>
                  </article>
                  <article className="hero-mini-card">
                    <i className="bi bi-briefcase-fill" aria-hidden="true" />
                    <div>
                      <p className="hero-mini-label">Current role</p>
                      <p className="hero-mini-value">{currentExperience?.title || "Open to new roles"}</p>
                    </div>
                  </article>
                  <article className="hero-mini-card">
                    <i className="bi bi-stars" aria-hidden="true" />
                    <div>
                      <p className="hero-mini-label">Focus</p>
                      <p className="hero-mini-value">{focusTagline || "Python • DRF • LLMs • Automation"}</p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section reveal" data-anim="up">
          <div className="section-head section-head-center about-head">
            <h2>About Me</h2>
          </div>

          <div className="about-layout">
            <div className="about-stats">
              {statsWithCounts.map((stat, index) => (
                <article
                  className="about-stat-card reveal"
                  data-anim="left"
                  data-delay={String(index * 80)}
                  key={stat.label}
                >
                  <p className="about-stat-value">
                    <span className="counter" data-target={stat.target}>
                      {stat.target}
                    </span>
                    +
                  </p>
                  <p className="about-stat-label">{stat.label}</p>
                </article>
              ))}
            </div>

            <div className="about-copy reveal" data-anim="right">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section glass-card reveal" data-anim="up">
          <div className="section-head">
            <p className="section-kicker">Services</p>
            <h2>Python + AI Expertise</h2>
          </div>

          <div className="row g-3">
            {services.map((service, index) => (
              <div className="col-12 col-md-6 col-xl-4" key={service.title}>
                <article className="service-card reveal" data-anim="zoom" data-delay={String(index * 60)}>
                  <div className="service-card-head">
                    <i className={service.icon} aria-hidden="true" />
                    <h3 className="h5 mb-0">{service.title}</h3>
                  </div>
                  <p className="mb-0">{service.description}</p>
                </article>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section glass-card reveal" data-anim="up">
          <div className="section-head">
            <p className="section-kicker">Experience</p>
            <h2>Career Journey</h2>
          </div>

          <div className="timeline">
            {experiences.map((experience, index) => (
              <article
                className="timeline-item reveal"
                data-anim={index % 2 === 0 ? "left" : "right"}
                key={experience.id}
              >
                <div className="timeline-top">
                  <div>
                    <h3 className="h5 mb-1">{experience.title}</h3>
                    <p className="timeline-company mb-1">{experience.company}</p>
                    <p className="timeline-meta mb-0">
                      <i className="bi bi-calendar-event" /> {formatExperienceRange(experience)}
                      {experience.location ? (
                        <>
                          <span className="dot" />
                          <i className="bi bi-geo-alt" /> {experience.location}
                        </>
                      ) : null}
                    </p>
                  </div>
                </div>

                <p className="mb-2">{experience.description}</p>

                {experience.highlights.length ? (
                  <ul className="timeline-points">
                    {experience.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}

                {experience.techStack.length ? (
                  <div className="stack-wrap">
                    {experience.techStack.map((tech) => (
                      <span className="stack-pill" key={`${experience.id}-${tech}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section glass-card reveal" data-anim="up">
          <div className="section-head text-center projects-head">
            <h2>Featured Projects</h2>
          </div>

          <div className="row g-3 project-showcase-grid justify-content-center">
            {featuredProjects.map((project, index) => (
              <div className="col-12 col-md-6 col-xl-4" key={project.id}>
                <article className="project-showcase-card reveal" data-anim="zoom" data-delay={String(index * 70)}>
                  <div className="project-showcase-header">
                    <h3 className="h6 mb-1">{project.title}</h3>
                    <p className="project-year mb-0">{getProjectYear(project)}</p>
                  </div>

                  <div className="project-showcase-body">
                    <ul className="project-points">
                      <li>{project.shortDescription}</li>
                      <li>{truncateWords(project.description, 18)}</li>
                    </ul>

                    <div className="project-pill-wrap">
                      {project.techStack.map((tech) => (
                        <span className="project-pill" key={`${project.id}-${tech}`}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="project-links">
                      {project.liveUrl ? (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-detail-link">
                          <i className="bi bi-box-arrow-up-right me-1" />Live Demo
                        </a>
                      ) : null}
                      {project.githubUrl ? (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-detail-link">
                          <i className="bi bi-github me-1" />View Details
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="section glass-card reveal" data-anim="up">
          <div className="section-head">
            <p className="section-kicker">Skills</p>
            <h2>Python & AI Stack</h2>
          </div>

          <div className="row g-3 skills-grid">
            {skillGroups.map((group, index) => (
              <div className="col-12 col-md-6 col-xl-4" key={group.category}>
                <article className="skill-showcase-card reveal" data-anim="zoom" data-delay={String(index * 40)}>
                  <div className="skill-showcase-head">
                    <i className={group.icon} aria-hidden="true" />
                    <h3 className="h5 mb-0">{group.title}</h3>
                  </div>

                  <div className="skill-pill-wrap">
                    {group.skills.map((skill) => (
                      <span className="skill-pill" key={`${group.category}-${skill.name}`}>
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="section glass-card reveal" data-anim="up">
          <div className="section-head">
            <p className="section-kicker">Education</p>
            <h2>Academic Background</h2>
          </div>

          <div className="row g-3">
            {education.map((item, index) => (
              <div className="col-12 col-lg-6" key={item.id}>
                <article className="edu-card reveal" data-anim="left" data-delay={String(index * 60)}>
                  <h3 className="h5 mb-1">{item.degree}</h3>
                  <p className="timeline-company mb-1">{item.institution}</p>
                  <p className="timeline-meta mb-2">
                    <i className="bi bi-calendar-event" /> {formatEducationRange(item)}
                    {item.location ? (
                      <>
                        <span className="dot" />
                        <i className="bi bi-geo-alt" /> {item.location}
                      </>
                    ) : null}
                  </p>

                  {item.fieldOfStudy ? (
                    <p className="mb-2">
                      <strong>Field:</strong> {item.fieldOfStudy}
                    </p>
                  ) : null}

                  {item.grade ? (
                    <p className="mb-2">
                      <strong>Grade/Certification:</strong> {item.grade}
                    </p>
                  ) : null}

                  {item.description ? <p className="mb-0">{item.description}</p> : null}
                </article>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="section glass-card reveal" data-anim="up">
          <div className="section-head">
            <p className="section-kicker">FAQ</p>
            <h2>Working Together</h2>
          </div>

          <div className="faq-grid">
            {faq.map((item, index) => (
              <article className="faq-card reveal" data-anim="up" data-delay={String(index * 60)} key={item.question}>
                <h3 className="h6 mb-2">{item.question}</h3>
                <p className="mb-0">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section reveal" data-anim="up">
          <div className="section-head section-head-center contact-head">
            <h2>Get In Touch</h2>
          </div>

          <div className="contact-layout">
            <article className="contact-panel">
              <h3 className="h5 mb-4">Contact Information</h3>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <span className="contact-icon">
                    <i className="bi bi-envelope-fill" />
                  </span>
                  <div>
                    <p className="contact-label">Email</p>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <span className="contact-icon">
                    <i className="bi bi-telephone-fill" />
                  </span>
                  <div>
                    <p className="contact-label">Phone</p>
                    <a href="tel:+923254155556">{contact.phone}</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <span className="contact-icon">
                    <i className="bi bi-linkedin" />
                  </span>
                  <div>
                    <p className="contact-label">LinkedIn</p>
                    <a href={contact.linkedInUrl} target="_blank" rel="noopener noreferrer">
                      {contact.linkedInLabel}
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <span className="contact-icon">
                    <i className="bi bi-github" />
                  </span>
                  <div>
                    <p className="contact-label">GitHub</p>
                    <a href={contact.githubUrl} target="_blank" rel="noopener noreferrer">
                      {contact.githubLabel}
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <span className="contact-icon">
                    <i className="bi bi-geo-alt-fill" />
                  </span>
                  <div>
                    <p className="contact-label">Location</p>
                    <span className="contact-location">{contact.location}</span>
                  </div>
                </div>
              </div>
            </article>

            <article className="contact-panel">
              <h3 className="h5 mb-4">Send Message</h3>

              {formStatus ? (
                <div className={`alert alert-${formStatus.type} mb-3`} role="alert">
                  {formStatus.message}
                </div>
              ) : null}

              <form
                className="contact-form compact-form"
                name="contact"
                method="POST"
                action="/__forms.html"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                noValidate
                onSubmit={handleContactSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" value="" />
                <div className="row g-3">
                  <div className="col-12">
                    <label className="form-label" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-control"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleFormInput}
                    />
                    {formErrors.name ? <div className="field-error">{formErrors.name}</div> : null}
                  </div>

                  <div className="col-12">
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleFormInput}
                    />
                    {formErrors.email ? <div className="field-error">{formErrors.email}</div> : null}
                  </div>

                  <div className="col-12">
                    <label className="form-label" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      className="form-control"
                      placeholder="Project inquiry"
                      value={formData.subject}
                      onChange={handleFormInput}
                    />
                    {formErrors.subject ? <div className="field-error">{formErrors.subject}</div> : null}
                  </div>

                  <div className="col-12">
                    <label className="form-label" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      rows={4}
                      placeholder="Tell me about your project or collaboration idea..."
                      value={formData.message}
                      onChange={handleFormInput}
                    />
                    {formErrors.message ? <div className="field-error">{formErrors.message}</div> : null}
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-main contact-submit-btn" disabled={isSubmitting}>
                      <i className="bi bi-send-fill me-2" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </div>
              </form>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p className="mb-0">&copy; {currentYear} Asim Shafique.</p>
      </footer>
    </>
  );
}
