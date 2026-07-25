(() => {
  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    .matches;

  /* ---------- theme ---------- */

  const toggle = document.querySelector(".theme-toggle");
  const themeColor = document.querySelector('meta[name="theme-color"]');

  const systemLight = window.matchMedia("(prefers-color-scheme: light)");
  const systemTheme = () => (systemLight.matches ? "light" : "dark");

  // Storage throws in some private-browsing contexts; the theme still works.
  const readChoice = () => {
    try {
      const stored = localStorage.getItem("theme");
      return stored === "light" || stored === "dark" ? stored : null;
    } catch (error) {
      return null;
    }
  };

  const saveChoice = (theme) => {
    try {
      if (theme) {
        localStorage.setItem("theme", theme);
      } else {
        localStorage.removeItem("theme");
      }
    } catch (error) {
      /* not persisted */
    }
  };

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    if (themeColor) {
      themeColor.content = theme === "light" ? "#fbfbfa" : "#0b0b0c";
    }
    if (toggle) {
      toggle.setAttribute(
        "aria-label",
        theme === "light" ? "Switch to dark theme" : "Switch to light theme"
      );
    }
  };

  applyTheme(readChoice() || systemTheme());

  toggle?.addEventListener("click", () => {
    const next = root.dataset.theme === "light" ? "dark" : "light";
    // Toggling back to what the OS already uses hands control back to the OS.
    saveChoice(next === systemTheme() ? null : next);
    applyTheme(next);
  });

  // Follow the OS only while the visitor has not made an explicit choice.
  systemLight.addEventListener("change", () => {
    if (readChoice()) return;
    applyTheme(systemTheme());
  });

  /* ---------- reveal on scroll ---------- */

  const revealables = Array.from(document.querySelectorAll(".reveal"));

  if (reduceMotion) {
    revealables.forEach((node) => node.classList.add("is-visible"));
  } else {
    const inView = (node) => {
      const rect = node.getBoundingClientRect();
      return rect.top < window.innerHeight + 48 && rect.bottom > -48;
    };

    revealables.forEach((node) => {
      if (inView(node)) node.classList.add("is-visible");
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );

    revealables
      .filter((node) => !node.classList.contains("is-visible"))
      .forEach((node) => revealObserver.observe(node));
  }

  /* ---------- thumbnail playback ---------- */

  const videos = Array.from(document.querySelectorAll(".pub-thumb video"));

  if (reduceMotion) {
    videos.forEach((video) => video.pause());
    return;
  }

  // The markup has no autoplay attribute, so nothing downloads until this
  // observer calls play(); off-screen clips cost neither bytes nor decoding.
  // Until then the poster frame stands in.
  const playbackObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    },
    { rootMargin: "200px 0px" }
  );

  videos.forEach((video) => playbackObserver.observe(video));
})();
