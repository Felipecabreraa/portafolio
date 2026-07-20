/* ── Fondo 3D: red de nodos ── */
(function initBackground() {
  const canvas = document.querySelector('#bg');
  if (!canvas || typeof THREE === 'undefined') return;

  try {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  camera.position.z = 50;

  const nodes = [];
  const nodeCount = 80;
  const spread = 60;

  for (let i = 0; i < nodeCount; i++) {
    const geometry = new THREE.SphereGeometry(0.15, 8, 8);
    const material = new THREE.MeshBasicMaterial({
      color: i % 3 === 0 ? 0x22c55e : i % 3 === 1 ? 0x3b82f6 : 0x1e3a5f,
      transparent: true,
      opacity: 0.6
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(
      (Math.random() - 0.5) * spread,
      (Math.random() - 0.5) * spread,
      (Math.random() - 0.5) * spread
    );
    nodes.push(mesh);
    scene.add(mesh);
  }

  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x3b82f6,
    transparent: true,
    opacity: 0.08
  });

  const lines = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dist = nodes[i].position.distanceTo(nodes[j].position);
      if (dist < 18) {
        const geometry = new THREE.BufferGeometry().setFromPoints([
          nodes[i].position,
          nodes[j].position
        ]);
        const line = new THREE.Line(geometry, lineMaterial);
        lines.push({ line, i, j });
        scene.add(line);
      }
    }
  }

  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  function animate() {
    requestAnimationFrame(animate);

    nodes.forEach((node, i) => {
      node.position.y += Math.sin(Date.now() * 0.001 + i) * 0.002;
      node.rotation.y += 0.002;
    });

    lines.forEach(({ line, i, j }) => {
      const positions = line.geometry.attributes.position;
      positions.setXYZ(0, nodes[i].position.x, nodes[i].position.y, nodes[i].position.z);
      positions.setXYZ(1, nodes[j].position.x, nodes[j].position.y, nodes[j].position.z);
      positions.needsUpdate = true;
    });

    camera.position.x += (mouseX * 3 - camera.position.x) * 0.02;
    camera.position.y += (-mouseY * 3 - camera.position.y) * 0.02;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
  } catch (err) {
    console.warn('Fondo 3D no disponible (WebGL no soportado):', err);
  }
})();

/* ── Navegación ── */
(function initNav() {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  const progress = document.getElementById('scrollProgress');

  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 50);
    if (progress) {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const pct = height > 0 ? (window.scrollY / height) * 100 : 0;
      progress.style.width = `${pct}%`;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  toggle?.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.classList.toggle('active', open);
  });

  links?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle?.classList.remove('active');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });
})();

/* ── Scroll-spy: resalta el enlace de la sección activa ── */
(function initScrollSpy() {
  const links = document.querySelectorAll('.nav-links a[href^="#"]');
  if (!links.length) return;

  const sections = Array.from(links)
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  );

  sections.forEach(section => observer.observe(section));
})();

/* ── Delay escalonado para grupos de .reveal ── */
window.applyStagger = function applyStagger(root = document) {
  const groups = new Map();

  root.querySelectorAll('.reveal').forEach(el => {
    const parent = el.parentElement;
    if (!parent) return;
    if (!groups.has(parent)) groups.set(parent, []);
    groups.get(parent).push(el);
  });

  groups.forEach(items => {
    if (items.length < 2) return;
    items.forEach((el, i) => {
      el.style.setProperty('--delay', Math.min(i, 6));
    });
  });
};

window.applyStagger();

/* ── Botones magnéticos (hero) ── */
(function initMagneticButtons() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;
  if (reduceMotion || !finePointer) return;

  document.querySelectorAll('.hero-cta .btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transition = 'transform 0.15s ease-out';
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
      btn.style.transform = '';
    });
  });
})();

/* ── Spotlight en hover de tarjetas ── */
(function initCardSpotlight() {
  const finePointer = window.matchMedia('(pointer: fine)').matches;
  if (!finePointer) return;

  document.addEventListener('mousemove', (e) => {
    const card = e.target.closest('.specialty-card, .value-card');
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    card.style.setProperty('--my', `${e.clientY - rect.top}px`);
  });
})();

/* ── Línea de progreso de la metodología ── */
(function initTimelineFill() {
  const timeline = document.getElementById('timeline');
  const fill = document.getElementById('timelineFill');
  if (!timeline || !fill) return;

  function update() {
    const rect = timeline.getBoundingClientRect();
    const viewportCenter = window.innerHeight * 0.6;
    const total = rect.height;
    const covered = viewportCenter - rect.top;
    const pct = Math.max(0, Math.min(1, covered / total));
    fill.style.height = `${pct * 100}%`;
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();

/* ── Scroll reveal ── */
(function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();

/* ── Proyectos: acordeón ── */
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.project-toggle');
  if (!btn) return;

  const card = btn.closest('.project-card');
  const details = card.querySelector('.project-details');
  const isOpen = btn.getAttribute('aria-expanded') === 'true';

  document.querySelectorAll('.project-toggle[aria-expanded="true"]').forEach(other => {
    if (other !== btn) {
      other.setAttribute('aria-expanded', 'false');
      other.closest('.project-card').querySelector('.project-details').hidden = true;
      other.closest('.project-card').classList.remove('expanded');
      other.querySelector('.toggle-text').textContent = 'Ver detalles';
    }
  });

  btn.setAttribute('aria-expanded', !isOpen);
  details.hidden = isOpen;
  card.classList.toggle('expanded', !isOpen);
  btn.querySelector('.toggle-text').textContent = isOpen ? 'Ver detalles' : 'Ocultar detalles';
});

/* ── Smooth scroll ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ── Formulario de contacto ── */
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const subject = encodeURIComponent(`Contacto desde portafolio — ${name}`);
  const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\n\n${message}`);
  window.location.href = `mailto:luislagoscabrera@hotmail.com?subject=${subject}&body=${body}`;
});

/* ── Lightbox para media de proyectos ── */
(function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const content = document.getElementById('lightboxContent');
  const closeBtn = document.getElementById('lightboxClose');
  if (!lightbox || !content) return;

  function openLightbox(type, src) {
    content.innerHTML = '';

    if (type === 'video') {
      const video = document.createElement('video');
      video.src = src;
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      content.appendChild(video);
    } else {
      const img = document.createElement('img');
      img.src = src;
      img.alt = 'Captura del proyecto';
      content.appendChild(img);
    }

    lightbox.hidden = false;
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightbox.setAttribute('aria-hidden', 'true');
    content.innerHTML = '';
    document.body.style.overflow = '';
  }

  document.addEventListener('click', (e) => {
    const expandBtn = e.target.closest('.media-expand-btn');
    const thumb = e.target.closest('.media-thumb');

    if (expandBtn) {
      openLightbox(expandBtn.dataset.mediaType, expandBtn.dataset.mediaSrc);
    } else if (thumb) {
      openLightbox(thumb.dataset.mediaType, thumb.dataset.mediaSrc);
    }
  });

  closeBtn?.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
  });
})();
