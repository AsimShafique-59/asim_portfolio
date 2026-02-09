document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const navLinks = Array.from(document.querySelectorAll(".nav-link[href^='#']"));
  const navbarCollapseEl = document.getElementById("mainNavbar");
  const navbarCollapse = navbarCollapseEl && window.bootstrap
    ? window.bootstrap.Collapse.getOrCreateInstance(navbarCollapseEl, { toggle: false })
    : null;

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      const targetEl = targetId ? document.querySelector(targetId) : null;
      if (!targetEl) return;

      event.preventDefault();
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState({}, "", targetId);
      if (navbarCollapse) {
        navbarCollapse.hide();
      }
    });
  });

  const revealEls = Array.from(document.querySelectorAll(".reveal"));
  revealEls.forEach((el, idx) => {
    const existingDelay = Number(el.dataset.delay || 0);
    const staggerDelay = existingDelay || Math.min(idx * 45, 380);
    el.style.setProperty("--delay", `${staggerDelay}ms`);
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
  );

  revealEls.forEach((el) => revealObserver.observe(el));

  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const activeSectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const activeId = `#${entry.target.id}`;
        navLinks.forEach((link) => {
          const isActive = link.getAttribute("href") === activeId;
          link.classList.toggle("active", isActive);
          if (isActive) {
            link.setAttribute("aria-current", "page");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    },
    { threshold: 0.45 }
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

  const animateCounter = (counterEl) => {
    const target = Number(counterEl.dataset.target || 0);
    const duration = 1200;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      counterEl.textContent = String(value);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        counterEl.textContent = String(target);
      }
    };

    window.requestAnimationFrame(step);
  };

  if (!counters.length) return;

  counters.forEach((counterEl) => {
    counterEl.textContent = "0";
  });

  let hasAnimatedCounters = false;
  const startCounters = () => {
    if (hasAnimatedCounters) return;
    hasAnimatedCounters = true;
    counters.forEach((counterEl, idx) => {
      window.setTimeout(() => animateCounter(counterEl), idx * 140);
    });
  };

  const aboutInViewport = () => {
    if (!aboutStats) return false;
    const rect = aboutStats.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
  };

  // Start immediately if About stats are already visible after reload.
  if (aboutInViewport()) {
    startCounters();
    return;
  }

  if (aboutStats && "IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver(
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
    // Fallback for older browsers or edge cases.
    window.setTimeout(startCounters, 200);
  }
});
