
export function setupScrollAnimation() {
  // Observer for revealing elements on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });
  
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => observer.observe(el));

  return () => {
    revealElements.forEach(el => observer.unobserve(el));
  };
}

export function setupHeroAnimation() {
  // Animation for hero elements
  const animateHero = () => {
    const elements = document.querySelectorAll('.animate-on-load');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('opacity-100', 'translate-y-0');
      }, 300 * index);
    });
  };

  animateHero();
}
