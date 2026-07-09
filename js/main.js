(() => {
  const nodes = Array.from(document.querySelectorAll(".reveal"));
  const videos = Array.from(document.querySelectorAll(".pub-thumb video"));
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const show = (node) => node.classList.add("is-visible");

  // Any pixel intersecting the viewport (with a small buffer) counts as shown.
  const isInView = (node) => {
    const rect = node.getBoundingClientRect();
    const buffer = 48;
    return (
      rect.bottom > -buffer &&
      rect.top < window.innerHeight + buffer
    );
  };

  if (reduceMotion) {
    nodes.forEach(show);
    videos.forEach((video) => {
      video.removeAttribute("autoplay");
      video.pause();
    });
    return;
  }

  if (!nodes.length) return;

  nodes.forEach((node) => {
    if (isInView(node)) show(node);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        show(entry.target);
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: "48px 0px 48px 0px", threshold: 0 }
  );

  nodes.forEach((node) => {
    if (!node.classList.contains("is-visible")) observer.observe(node);
  });
})();
