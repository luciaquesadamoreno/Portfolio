export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  links: Array<{
    title: string;
    url: string;
  }>;
}

export const projects: Project[] = [
  {
    id: 'web-formacion-cta',
    title: 'Web Formación Clínica CTA',
    description: 'Portal de formación online para profesionales clínicos con cursos en formato vodcast.',
    fullDescription: 'Plataforma de e-learning orientada a formación clínica. Incluye catálogo de cursos públicos y privados y sus correspondientes episodios. Los cursos se imarten empleando como material interactivo el podcast en video, que está producido por profesionales el sector de la salud mental.',
    image: 'https://images.unsplash.com/photo-1691050769649-390293697deb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740',
    technologies: ['HTML', 'JavaScript', 'CSS', 'MySQL', 'Python', 'Docker'],
    links: [
      { title: 'Repositorio', url: 'https://github.com/lili1224/FormacionClinicaCTA.git' },
      { title: 'Documentación', url: 'https://riunet.upv.es/entities/publication/cd655546-a812-4203-81a7-f25a09ff646b' },
    ],
  },
  {
    id: 'portfolio-proyectos',
    title: 'Porfolio Proyectos',
    description: 'Porfolio personal con proyectos, detalles y página de contacto.',
    fullDescription: 'Este repositorio contiene el porfolio de proyectos personales, mostrando una colección de trabajos con descripciones, tecnologías usadas y enlaces a repositorios y demos. Incluye una página principal, listado de proyectos, vistas de detalle por proyecto y componentes reutilizables para acelerar la creación y mantenimiento del portafolio.',
    image: 'https://images.unsplash.com/photo-1645650850779-dba7330d095f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670',
    technologies: ['Vite', 'CSS', 'TypeScript', 'HTML'],
    links: [
      { title: 'Repositorio', url: 'https://github.com/lili1224/Portfolio.git' },
      { title: 'Sitio (este proyecto)', url: 'https://lili1224.github.io/Portfolio/#' }
    ],
  },
  {
    id: 'web-carcassonne',
    title: 'Web Carcassonne',
    description: 'Sitio web para la ciudad de Carcassonne: turismo, eventos y reservas.',
    fullDescription: 'Portal turístico para la ciudad que agrupa información sobre monumentos, eventos locales, rutas recomendadas y servicios. Permite búsquedas geolocalizadas, reservas de visitas guiadas, integración con mapas y generación de itinerarios personalizados para visitantes. Pensado para ser multi-idioma y responsive.',
    image: 'https://images.unsplash.com/photo-1547638375-ebf04735d792?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    links: [
      { title: 'Repositorio', url: 'https://github.com/lili1224/Web-Carcassonne.git' }
    ],
  },
  {
    id: 'app-calculadora',
    title: 'App Calculadora',
    description: 'Aplicación calculadora para Android con funciones científicas y historial de operaciones.',
    fullDescription: 'Aplicación multiplataforma que ofrece operaciones básicas y avanzadas (trigonometría, logaritmos, cálculo de porcentajes), historial de operaciones, modo científico y personalización de tema.',
    image: 'https://images.unsplash.com/photo-1668930185267-1f3c19851b5b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774',
    technologies: ['Java', 'Android Studio'],
    links: [
      { title: 'Código', url: 'https://github.com/lili1224/App-Calculadora.git' }
    ],
  },
  {
    id: 'seguridad-contenidos',
    title: 'Seguridad de Contenidos',
    description: 'Servicio para protección y moderación automática de contenidos digitales.',
    fullDescription: 'Plataforma que analiza y modera contenido multimedia y texto para detectar violaciones de políticas, vulnerabilidades de seguridad y fugas de información sensible. Añade watermarking, encriptación ligera para distribución y un dashboard para revisar incidencias y aplicar políticas de retención. Ideal para plataformas que manejan contenido generado por usuarios.',
    image: 'https://plus.unsplash.com/premium_photo-1676618539983-d1a95978fd7d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
    technologies: ['Python'],
    links: [
      { title: 'Repositorio', url: 'https://github.com/lili1224/Proyecto-seguridad-digital-de-contenidos.git' }
      
    ],
  },
  {
    id: 'web-restaurante-ia',
    title: 'Web Restaurante',
    description: 'Sitio web para restaurante con carta dinámica.',
    fullDescription: 'Sitio pensado para restaurantes que incluye carta dinámica según disponibilidad y sistema de reservas integrado. Incluye análisis de satisfacción mediante encuestas.',
    image: 'https://images.unsplash.com/photo-1682778418768-16081e4470a1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1548',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    links: [
      { title: 'Repositorio', url: 'https://github.com/lili1224/Web-restaurante-.git' }
    ],
  },
  {
    id: 'generacion-panoramicas',
    title: 'Generación Panorámicas',
    description: 'Herramienta para crear panorámicas y stitching de imágenes a partir de sets fotográficos.',
    fullDescription: 'Aplicación que toma colecciones de fotos con solapamiento y genera panorámicas de alta resolución mediante algoritmos de stitching y corrección de color. Incluye opciones avanzadas de alineación, blending y export en múltiples formatos. Pensada para fotografía profesional y para integrar en flujos de procesamiento automatizado.',
    image: 'https://images.unsplash.com/photo-1455894127589-22f75500213a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1574',
    technologies: ['Python', 'OpenCV', 'NumPy', 'Glob'],
    links: [
      { title: 'Código', url: 'https://github.com/lili1224/Generaci-n-Panoramicas.git' }
    ],
  },
  {
    id: 'procesador-audio',
    title: 'Procesador de Audio',
    description: 'Aplicación para procesado y edición de audio con efectos y análisis en tiempo real.',
    fullDescription: 'Procesador de audio que ofrece edición no destructiva, ecualización, compresión, efectos en tiempo real y análisis espectral. Incluye un motor de plugins, herramientas de reducción de ruido y export en múltiples formatos. Puede integrarse como servicio backend para procesado por lotes o como aplicación de escritorio para edición interactiva.',
    image: 'https://images.unsplash.com/photo-1734383172855-c2330405768c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774',
    technologies: ['Python', 'Numpy'],
    links: [
      { title: 'Repositorio', url: 'https://github.com/lili1224/Procesador-de-audio-con-Python.git' }
    ],
  },
];
