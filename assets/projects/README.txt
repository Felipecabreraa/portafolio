CÓMO AGREGAR VIDEOS Y CAPTURAS A CADA PROYECTO
==============================================

Para cada proyecto, coloca los archivos en su carpeta correspondiente:

  analitica-trn/     → Analítica TRN (flota)
  appagro/           → AppAgro (portal agrícola)
  app-etiquetado/    → App Etiquetado (QR web)
  clinica-dnd/       → Clínica DND
  web-trn/           → Web TRN (sitio corporativo)
  animal-game/       → Animal-Game (Android / Compose)

ARCHIVOS RECOMENDADOS POR PROYECTO
----------------------------------
  demo.mp4           Video demo de la herramienta (30–90 seg ideal)
  poster.jpg         Miniatura del video (opcional)
  screenshot-1.png   Captura del sistema
  screenshot-2.png   Otra captura (puedes agregar más)

DESPUÉS DE SUBIR LOS ARCHIVOS
-----------------------------
Edita js/projects.js y actualiza el bloque "media" del proyecto:

  media: {
    video: 'assets/projects/analitica-trn/demo.mp4',
    poster: 'assets/projects/analitica-trn/poster.jpg',
    images: [
      'assets/projects/analitica-trn/screenshot-1.png',
      'assets/projects/analitica-trn/screenshot-2.png'
    ]
  }

FORMATOS SOPORTADOS
-------------------
  Video:  .mp4 (recomendado), .webm
  Imagen: .png, .jpg, .webp

CONSEJO
-------
Graba pantallas cortas mostrando el flujo principal de cada herramienta.
Eso genera mucho más impacto que solo texto.
