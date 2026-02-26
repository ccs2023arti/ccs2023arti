/* ═══════════════════════════════════════════
   SEATax — Interactive Frontend
   ═══════════════════════════════════════════ */

(function () {
  'use strict';

  // ────────── Cursor Glow ──────────
  const glow = document.getElementById('cursorGlow');
  let mouseX = 0, mouseY = 0, glowX = 0, glowY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateGlow() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    glow.style.left = glowX + 'px';
    glow.style.top = glowY + 'px';
    requestAnimationFrame(animateGlow);
  }
  animateGlow();

  // ────────── Nav Scroll ──────────
  const nav = document.getElementById('nav');

  function handleNavScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // ────────── Mobile Menu ──────────
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    mobileMenuBtn.classList.toggle('active');
  });

  navLinks.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      mobileMenuBtn.classList.remove('active');
    });
  });

  // ────────── Scroll Reveal ──────────
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, parseInt(delay));
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // ────────── Animated Counters ──────────
  const counters = document.querySelectorAll('.stat-number');

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((el) => counterObserver.observe(el));

  function animateCounter(el) {
    const target = parseInt(el.dataset.count);
    const duration = 2000;
    const start = performance.now();

    function step(timestamp) {
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      el.textContent = Math.floor(eased * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  // ────────── Bar Chart Animation ──────────
  const chartBars = document.querySelectorAll('.bar');

  const barObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          barObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  chartBars.forEach((bar) => {
    bar.style.animationPlayState = 'paused';
    barObserver.observe(bar);
  });

  // ────────── FAQ Accordion ──────────
  document.querySelectorAll('.faq-question').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isActive = item.classList.contains('active');

      document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // ────────── Smooth Scroll ──────────
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = nav.offsetHeight;
        const targetPos = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });

  // ────────── Parallax on Hero Orbs ──────────
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled > window.innerHeight) return;

    const orbs = document.querySelectorAll('.hero-orb');
    orbs.forEach((orb, i) => {
      const speed = 0.15 + i * 0.05;
      orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
  }, { passive: true });

  // ────────── Tilt Effect on Feature Cards ──────────
  document.querySelectorAll('.feature-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / centerY * -3;
      const rotateY = (x - centerX) / centerX * 3;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // ────────── Typing Effect on Hero Badge ──────────
  const badge = document.querySelector('.hero-badge');
  if (badge) {
    badge.style.opacity = '0';
    setTimeout(() => {
      badge.style.opacity = '';
    }, 300);
  }

  // ────────── Progress Ring Animation ──────────
  const ringCircle = document.querySelector('.progress-ring-circle');
  if (ringCircle) {
    const ringObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ringCircle.style.strokeDashoffset = '82';
            ringObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    ringCircle.style.strokeDashoffset = '327';
    ringObserver.observe(ringCircle);
  }

  // ────────── Active Nav Link Highlight ──────────
  const sections = document.querySelectorAll('section[id]');

  function highlightNav() {
    const scrollPos = window.scrollY + 200;
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (link) {
        link.classList.toggle('active', scrollPos >= top && scrollPos < top + height);
      }
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });

  // ────────── Invitation Code Modal ──────────
  const modal = document.getElementById('inviteModal');
  const modalClose = document.getElementById('modalClose');
  const inviteForm = document.getElementById('inviteForm');
  const inviteInput = document.getElementById('inviteCode');
  const inviteError = document.getElementById('inviteError');

  function openModal() {
    modal.classList.add('open');
    document.body.classList.add('modal-open');
    setTimeout(() => inviteInput.focus(), 350);
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.classList.remove('modal-open');
    inviteInput.value = '';
    inviteInput.classList.remove('error', 'success', 'shake');
    inviteError.textContent = '';
  }

  document.querySelectorAll('[data-open-invite]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  modalClose.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  inviteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const code = inviteInput.value.trim();

    inviteInput.classList.remove('error', 'success', 'shake');
    inviteError.textContent = '';

    const t = window.SEATaxI18n ? window.SEATaxI18n.getCurrentTranslations() : {};

    if (!code) {
      inviteInput.classList.add('error', 'shake');
      inviteError.textContent = t.modal_err_empty || 'Please enter your invitation code.';
      return;
    }

    if (code.length < 6) {
      inviteInput.classList.add('error', 'shake');
      inviteError.textContent = t.modal_err_short || 'That code looks too short. Please check and try again.';
      return;
    }

    const submitBtn = inviteForm.querySelector('.modal-submit');
    submitBtn.classList.add('loading');
    submitBtn.textContent = t.modal_verifying || 'Verifying...';

    setTimeout(() => {
      submitBtn.classList.remove('loading');
      const submitKey = t.modal_submit || 'Continue';
      submitBtn.innerHTML = submitKey;

      inviteInput.classList.add('success');
      inviteError.style.color = '#059669';
      inviteError.textContent = t.modal_accepted || 'Code accepted! Redirecting...';

      setTimeout(() => {
        closeModal();
        inviteError.style.color = '';
      }, 1800);
    }, 1500);
  });

  inviteInput.addEventListener('input', () => {
    let val = inviteInput.value.toUpperCase().replace(/[^A-Z0-9-]/g, '');
    inviteInput.value = val;
    inviteInput.classList.remove('error', 'shake');
    inviteError.textContent = '';
  });
})();
