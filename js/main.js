(() => {
  const nodes = Array.from(document.querySelectorAll(".reveal"));
  const videos = Array.from(document.querySelectorAll(".pub-thumb video"));
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reduceMotion) {
    nodes.forEach((node) => node.classList.add("is-visible"));
    videos.forEach((video) => {
      video.removeAttribute("autoplay");
      video.pause();
    });
  } else if (nodes.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    nodes.forEach((node, index) => {
      if (index === 0) {
        requestAnimationFrame(() => node.classList.add("is-visible"));
        return;
      }
      observer.observe(node);
    });
  }
})();
