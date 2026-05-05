document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll reveals
  const observerOptions = {
    root: null,
    rootMargin: '-100px 0px',
    threshold: 0.2
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Unobserve after revealing to prevent re-triggering
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    revealObserver.observe(el);
  });

  // Mobile touch pause for ticker
  const ticker = document.querySelector('.ticker-container');
  if (ticker && window.matchMedia('(pointer: coarse)').matches) {
    ticker.addEventListener('touchstart', () => {
      document.querySelectorAll('.animate-ticker').forEach(el => el.style.animationPlayState = 'paused');
    });
    ticker.addEventListener('touchend', () => {
      document.querySelectorAll('.animate-ticker').forEach(el => el.style.animationPlayState = 'running');
    });
  }
});