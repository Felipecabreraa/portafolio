const PROJECTS = [
  {
    id: 'analitica-trn',
    name: 'Analítica TRN',
    period: '2024 – Actualidad',
    category: 'Plataforma Analítica',
    tag: 'Datos & Flota',
    color: '#3b82f6',
    summary: 'Plataforma analítica operacional de flota de camiones, desarrollada junto a usuarios de negocio para definir KPIs, flujos y reglas de acceso por rol.',
    problem: 'La operación de flota carecía de visibilidad centralizada sobre consumo, rutas, eficiencia y alertas. Los datos telemáticos existían, pero no había una plataforma que los tradujera en indicadores accionables para jefaturas y operación.',
    solution: 'Desarrollé una plataforma analítica con módulos de resumen, eficiencia, consumo, rutas, alertas y auditoría. Incluye ingesta automática de datos telemáticos (SOAP/XML), cálculo de KPIs y parametrización de roles según reglas de negocio.',
    features: [
      'Módulos: resumen, eficiencia, consumo, rutas, alertas y auditoría',
      'Ingesta y procesamiento de datos telemáticos (SOAP/XML)',
      'Cálculo automático de KPIs operacionales de flota',
      'Parametrización de roles: SuperAdmin, Admin y Operador',
      'Definición de indicadores junto a áreas de operación y logística',
      'Documentación técnico-funcional del flujo de datos'
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'Power BI', 'Excel Avanzado', 'SOAP/XML', 'MySQL', 'KPIs operacionales'],
    impact: 'Reemplazó reportes manuales dispersos por una vista única de flota: jefaturas y operación consultan los mismos indicadores de consumo, eficiencia, rutas y alertas para decidir con datos actualizados en vez de estimaciones.',
    role: 'Levantamiento de requerimientos, definición de KPIs con usuarios de negocio, parametrización de roles, documentación funcional y validación con áreas clave.',
    future: 'Alertas predictivas, integración con más fuentes telemáticas y reportes automatizados por correo.',
    media: {
      video: 'assets/projects/analitica-trn/demo.mp4',
      poster: null,
      images: []
    },
    mediaPath: 'assets/projects/analitica-trn'
  },
  {
    id: 'appagro',
    name: 'AppAgro',
    period: '2023 – 2024',
    category: 'Sistema Web',
    tag: 'Web',
    color: '#22c55e',
    summary: 'Portal web para gestión operacional agrícola: contratos, mano de obra, facturación de contratistas, centros de costo, temporadas y reportes gerenciales.',
    problem: 'El área agrícola gestionaba contratos, mano de obra y costos con procesos manuales y planillas dispersas. Esto dificultaba el control por temporada, la trazabilidad de contratistas y la generación de reportes confiables.',
    solution: 'Desarrollé AppAgro como aplicación web centralizada que digitaliza la operación agrícola, desde el levantamiento de requerimientos hasta el despliegue productivo, con acompañamiento post-implementación.',
    features: [
      'Gestión de mano de obra interna',
      'Facturación de contratistas y control de contratos',
      'Administración de anexos y documentación',
      'Centros de costo y temporadas',
      'Reportes con filtros avanzados y exportaciones',
      'Dashboard gerencial con indicadores clave'
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Prisma', 'Tailwind CSS', 'Render'],
    impact: 'Reemplazó planillas dispersas por un sistema único de contratos, mano de obra y facturación, dando control por temporada y trazabilidad de contratistas que antes no existía.',
    role: 'Relevamiento de necesidades operativas, traducción a especificaciones funcionales, desarrollo full-stack y ajustes post-implementación según feedback de usuarios.',
    future: 'Sincronización en tiempo real con App Etiquetado (la app mobile de terreno ya en producción), módulos de planificación de cosecha y reportes automatizados por correo.',
    media: {
      video: 'assets/projects/appagro/demo.mp4',
      poster: null,
      images: []
    },
    mediaPath: 'assets/projects/appagro'
  },
  {
    id: 'app-etiquetado',
    name: 'App Etiquetado',
    period: '2023 – 2024',
    category: 'Sistema Web',
    tag: 'Web · QR',
    color: '#06b6d4',
    summary: 'Sistema web de etiquetado con QR para operación de campo y acopio, con trazabilidad por temporada y control por roles.',
    problem: 'El registro de totes entre campo y acopio se hacía manualmente, generando errores, pérdida de trazabilidad y dificultad para validar cantidades, especies, variedades y responsables por temporada.',
    solution: 'Implementé una plataforma web de etiquetado QR con flujo de salida desde campo y recepción en acopio, generación e impresión de etiquetas, carga maestra desde Excel por temporada y autenticación por roles.',
    features: [
      'Generación e impresión de etiquetas con códigos QR',
      'Escaneo QR para lecturas en campo y acopio',
      'Registro de empresa, especie, variedad y centro de costo',
      'Control de cantidad de totes y jefe de cuadrilla',
      'Carga maestra y exportaciones Excel (xlsx)',
      'Auth con sesiones propias (scrypt + tokens en BD)',
      'Roles SuperAdmin, Admin y Operador con permisos diferenciados'
    ],
    tech: [
      'React 19',
      'TypeScript',
      'Vite 8',
      'Node.js',
      'Express',
      'MySQL 8',
      'mysql2',
      'qrcode.react',
      'html5-qrcode',
      'jsPDF',
      'html2canvas',
      'xlsx',
      'cors',
      'dotenv',
      'Render'
    ],
    impact: 'Eliminó el registro en papel entre campo y acopio: cada tote queda trazado por escaneo QR, con cantidades y responsables validados en el momento en lugar de al cierre de temporada.',
    role: 'Diseño funcional de roles y permisos, definición del proceso de carga maestra con usuarios, desarrollo full-stack (React + Express + MySQL) y despliegue en Render.',
    future: 'Sincronización offline, integración con AppAgro y reportes en tiempo real de movimientos.',
    media: {
      video: 'assets/projects/app-etiquetado/demo.mp4',
      poster: null,
      images: []
    },
    mediaPath: 'assets/projects/app-etiquetado'
  },
  {
    id: 'clinica-dnd',
    name: 'Clínica DND',
    period: '2024 – Actualidad',
    category: 'Gestión & Automatización',
    tag: 'Automatización',
    color: '#8b5cf6',
    summary: 'Solución digital para optimizar gestión de consultas, pacientes y agenda, mejorando la atención y reduciendo trabajo administrativo.',
    problem: 'La clínica enfrentaba procesos manuales en citas, comunicación con pacientes y centralización de información, generando sobrecarga administrativa y una experiencia de atención menos fluida.',
    solution: 'Diseñé e implementé un sistema para automatizar agenda, registro de pacientes, flujos de consulta y comunicación, centralizando la operación en una plataforma digital.',
    features: [
      'Gestión de pacientes e historial de consultas',
      'Agenda digital con control de disponibilidad',
      'Automatización de mensajes y recordatorios',
      'Centralización de información administrativa',
      'Reducción de tareas manuales repetitivas',
      'Mejora en la experiencia del paciente'
    ],
    tech: ['React', 'Node.js', 'APIs', 'MySQL', 'Automatizaciones'],
    impact: 'Centralizó agenda, pacientes y recordatorios en una sola plataforma, reduciendo el trabajo administrativo manual y las inasistencias por falta de aviso previo.',
    role: 'Análisis de procesos, diseño de la solución, desarrollo e implementación con enfoque en usabilidad para el equipo administrativo.',
    future: 'Portal de pacientes, integración con sistemas de salud y reportes de productividad.',
    media: {
      video: 'assets/projects/clinica-dnd/demo.mp4',
      poster: null,
      images: []
    },
    mediaPath: 'assets/projects/clinica-dnd'
  },
  {
    id: 'web-trn',
    name: 'Web TRN',
    period: '2023 – Actualidad',
    category: 'Presencia Digital',
    tag: 'Web Corporativa',
    color: '#f59e0b',
    summary: 'Sitio web corporativo de Transportes Río Negro para fortalecer presencia digital, comunicación institucional y acceso a información de servicios.',
    problem: 'La empresa necesitaba una presencia digital profesional que comunicara sus servicios, valores y canales de contacto de forma clara y alineada a su identidad corporativa.',
    solution: 'Desarrollé una plataforma web con estructura clara, diseño profesional y enfoque en usabilidad, presentando servicios e información relevante para clientes y colaboradores.',
    features: [
      'Diseño alineado a identidad corporativa',
      'Presentación de servicios e información institucional',
      'Estructura navegable y responsive',
      'Optimización de comunicación digital',
      'Secciones de contacto y acceso a información',
      'Enfoque en usabilidad y claridad visual'
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'GitHub Actions'],
    impact: 'Le dio a la empresa un canal digital propio para comunicar servicios y contacto, reemplazando la dependencia de referencias informales y redes sociales de terceros.',
    role: 'Diseño, desarrollo y estructuración del sitio web corporativo en coordinación con el equipo de la empresa.',
    future: 'Área de clientes, seguimiento de servicios en línea e integración con sistemas internos.',
    media: {
      video: 'assets/projects/web-trn/demo.mp4',
      poster: null,
      images: []
    },
    mediaPath: 'assets/projects/web-trn'
  },
  {
    id: 'animal-game',
    name: 'Animal-Game',
    period: '2026 – En desarrollo',
    category: 'Aplicación Mobile',
    tag: 'Android · Compose',
    color: '#ec4899',
    summary: 'Juego educativo Android de matching de animales, construido con Kotlin, Jetpack Compose y arquitectura limpia (MVVM + Clean Architecture).',
    problem: 'Quería una app mobile propia que demuestre dominio de Android moderno: Compose, inyección de dependencias, persistencia local y un dominio testeable sin acoplarse a la UI.',
    solution: 'Estoy desarrollando Animal-Game con capas core, data, domain y feature. El flujo de datos es UI → ViewModel → UseCase → Repository → DataSource. El dominio permanece libre de Android y testeable en JVM puro.',
    features: [
      'Flujo de juego: splash → home → categorías → dificultad → partida → resultados',
      'Pantallas de progreso, colección y ajustes',
      'Catálogo de animales desde JSON local (kotlinx.serialization)',
      'Persistencia de progreso con Room y ajustes con DataStore Preferences',
      'Audio: efectos con SoundPool y música con MediaPlayer',
      'Navegación con Navigation Compose',
      'Inyección de dependencias con Hilt (KSP)',
      'Tests: JUnit4, coroutines-test y Compose UI Test / Espresso'
    ],
    tech: [
      'Kotlin 2.0',
      'Jetpack Compose',
      'Material 3',
      'MVVM',
      'Clean Architecture',
      'Hilt',
      'Navigation Compose',
      'Room',
      'DataStore',
      'kotlinx.serialization',
      'Coroutines',
      'StateFlow',
      'SoundPool',
      'MediaPlayer',
      'JUnit4',
      'AGP 8.6'
    ],
    impact: 'Proyecto personal en desarrollo orientado a demostrar arquitectura Android escalable, UI moderna con Compose y dominio desacoplado. [Agregar resultado / publicación en Play Store]',
    role: 'Diseño de arquitectura, implementación de capas domain/data/feature, UI con Compose, persistencia local, audio y suite de pruebas.',
    future: 'Publicación en Google Play, sincronización remota (stub ya previsto en data) y ampliación de categorías / modos de juego.',
    media: {
      video: 'assets/projects/animal-game/demo.mp4',
      poster: null,
      images: []
    },
    mediaPath: 'assets/projects/animal-game'
  }
];

function getVideoMime(src) {
  const ext = src.split('.').pop().toLowerCase();
  const types = { mp4: 'video/mp4', webm: 'video/webm', mov: 'video/quicktime' };
  return types[ext] || 'video/mp4';
}

function hasMedia(project) {
  const { video, images } = project.media;
  return video || (images && images.length > 0);
}

function renderMediaSection(project) {
  const { video, poster, images } = project.media;
  const hasVideo = Boolean(video);
  const hasImages = images && images.length > 0;

  if (!hasVideo && !hasImages) {
    return `
      <div class="project-media-empty">
        <div class="media-empty-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <polygon points="23 7 16 12 23 17 23 7"/>
            <rect x="1" y="5" width="15" height="14" rx="2"/>
          </svg>
        </div>
        <p><strong>Demo disponible a solicitud</strong></p>
        <p class="media-empty-hint">Escríbeme y te muestro el sistema funcionando en una breve videollamada o capturas.</p>
      </div>
    `;
  }

  let html = '<div class="project-media">';

  if (hasVideo) {
    html += `
      <div class="media-video-wrap">
        <video
          class="project-video"
          controls
          playsinline
          preload="metadata"
          ${poster ? `poster="${poster}"` : ''}
          data-lightbox-video
        >
          <source src="${video}" type="${getVideoMime(video)}" />
          Tu navegador no soporta reproducción de video.
        </video>
        <button class="media-expand-btn" data-media-type="video" data-media-src="${video}" aria-label="Ver video en pantalla completa">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
        </button>
      </div>
    `;
  }

  if (hasImages) {
    html += `
      <div class="media-gallery ${hasVideo ? 'media-gallery-compact' : ''}">
        ${images.map((src, i) => `
          <button class="media-thumb" data-media-type="image" data-media-src="${src}" aria-label="Ver captura ${i + 1}">
            <img src="${src}" alt="${project.name} — captura ${i + 1}" loading="lazy" />
          </button>
        `).join('')}
      </div>
    `;
  }

  html += '</div>';
  return html;
}

function renderProjects() {
  const container = document.getElementById('projectsList');
  if (!container) return;

  container.innerHTML = PROJECTS.map((project, index) => {
    const cleanTech = project.tech.filter(t => !t.startsWith('['));

    return `
    <article class="project-card reveal" data-project="${project.id}" style="--project-color: ${project.color}">
      <div class="project-header">
        <div class="project-meta">
          <span class="project-tag">${project.tag}</span>
          <span class="project-category">${project.category}</span>
          <span class="project-period">${project.period}</span>
        </div>
        <h3 class="project-title">${project.name}</h3>
        <p class="project-summary">${project.summary}</p>
      </div>

      <div class="project-preview">
        ${renderMediaSection(project)}
        <div class="project-tech-preview">
          ${cleanTech.slice(0, 5).map(t => `<span class="tech-badge-sm">${t}</span>`).join('')}
          ${cleanTech.length > 5 ? `<span class="tech-badge-sm">+${cleanTech.length - 5}</span>` : ''}
        </div>
      </div>

      <button class="project-toggle" aria-expanded="false" data-index="${index}">
        <span class="toggle-text">Ver detalles del proyecto</span>
        <svg class="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
      </button>

      <div class="project-details" hidden>
        <div class="detail-grid">
          <div class="detail-block">
            <h4>Problema detectado</h4>
            <p>${project.problem}</p>
          </div>
          <div class="detail-block">
            <h4>Solución implementada</h4>
            <p>${project.solution}</p>
          </div>
          <div class="detail-block detail-block-full">
            <h4>Funcionalidades principales</h4>
            <ul>${project.features.map(f => `<li>${f}</li>`).join('')}</ul>
          </div>
          <div class="detail-block">
            <h4>Tecnologías</h4>
            <div class="tech-badges">${project.tech.map(t => `<span class="tech-badge-sm">${t}</span>`).join('')}</div>
          </div>
          <div class="detail-block">
            <h4>Impacto</h4>
            <p>${project.impact}</p>
          </div>
          <div class="detail-block">
            <h4>Mi rol</h4>
            <p>${project.role}</p>
          </div>
          <div class="detail-block detail-block-full">
            <h4>Mejoras futuras</h4>
            <p>${project.future}</p>
          </div>
        </div>
      </div>
    </article>
  `;
  }).join('');

  revealProjectCards(container);
}

function revealProjectCards(container) {
  const cards = container.querySelectorAll('.reveal');
  window.applyStagger?.(container);

  if (!('IntersectionObserver' in window)) {
    cards.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  cards.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', renderProjects);
