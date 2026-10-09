(() => {
  const targets = document.querySelectorAll(
    '.service-card,.steps li,.reason-list li,.screens-grid figure,.faq-list details,.contact-card,.section-intro,.eyebrow'
  );
  targets.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.setProperty('--d', (i % 5) * 0.08 + 's');
  });
  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  targets.forEach(el => io.observe(el));
})();