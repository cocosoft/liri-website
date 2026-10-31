/** Español (es-ES). Estructura idéntica a en: ui + canales + 22 secciones. */

export const es = {
  ui: {
    meta: {
      homeTitle: 'Liri — Tu asistente personal de IA',
      homeDescription:
        'Liri es un agente de IA de terminal de código abierto (MIT): {tools} herramientas integradas, {channels} canales de mensajería, cinco capas de seguridad, soporte para modelos locales y enrutamiento entre varios proveedores.',
    },

    nav: {
      capabilities: 'Capacidades',
      architecture: 'Arquitectura',
      security: 'Seguridad',
      routing: 'Enrutamiento',
      voice: 'Voz',
      brain: 'Segundo cerebro',
      desktop: 'Escritorio',
      cost: 'Coste',
      ecosystem: 'Ecosistema',
      evolution: 'Registro de desarrollo',
      start: 'Empezar',
      docs: 'Documentación',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
    },

    lang: {
      label: 'Idioma',
      switchToZh: 'Cambiar a chino',
      switchToEn: 'Cambiar a inglés',
    },

    stage: {
      label: 'Iteración rápida',
      note: 'Las API y la documentación pueden cambiar',
      detail:
        'Liri se encuentra en una fase de iteración rápida: las API, las opciones de configuración y la documentación cambian entre versiones. Revisa las notas de la versión antes de actualizar.',
      cta: 'Notas de la versión',
    },

    footer: {
      tagline: 'Asistente personal de IA · Local-first · Seguridad integrada',
      resources: 'Recursos',
      repo: 'Repositorio de GitHub',
      issue: 'Reportar un problema',
      releases: 'Notas de la versión',
      license: 'Licencia MIT',
      community: 'Comunidad',
      discord: 'Discord (muy pronto)',
      docs: 'Documentación',
      status: 'Estado del proyecto',
      evolution: 'Registro de desarrollo',
      support: 'Apoyar a Liri',
      discussions: 'Discussions (próximamente)',
      copyright: '© {year} Liri. Publicado bajo licencia MIT.',
      stats:
        '{tsFiles} archivos TS · {tools} herramientas · {securityLayers} capas de seguridad · {channels} canales · {buddySpecies} especies de Buddy',
    },

    docs: {
      label: 'Documentación',
      pageTitle: 'Documentación — Liri',
      pageDescription:
        'Instalación, configuración, integración de canales y referencia de comandos de Liri.',
      all: 'Toda la documentación',
      articleTitle: '{title} — Documentación de Liri',
      backHome: 'Volver al inicio',
      indexTitle: 'Documentación',
      indexIntro:
        'Sincronizado desde <code class="font-mono text-brand-400">app/docs</code> en el repositorio de GitHub · {count} artículos.',
      footerNote:
        'El sitio puede ir por detrás del código fuente. El <a class="text-surface-400 hover:text-surface-200" href="https://github.com/cocosoft/Liri/tree/main/app/docs" target="_blank" rel="noopener noreferrer">repositorio de GitHub</a> es la referencia.',
      source: 'Archivo de origen: ',
      englishOnly: 'La documentación solo está disponible en inglés por ahora.',
    },

    common: {
      scroll: 'Desplázate hacia abajo',
      copy: 'Haz clic para copiar',
      backHome: 'Volver al inicio',
      fullStatus: 'Ver el estado completo',
    },
  },

  channels: {
    即时通讯: 'Mensajería',
    国内平台: 'Plataformas de China',
    协作与社交: 'Colaboración y redes sociales',
    其它通道: 'Otros canales',
    微信: 'WeChat',
    企业微信: 'WeCom',
    钉钉: 'DingTalk',
    飞书: 'Feishu',
    元宝: 'Yuanbao',
    移动端接入: 'Acceso móvil',
  },

  about: {
    title: 'Qué es Liri',
    p1: 'Liri es un <strong class="text-brand-300">asistente personal de IA</strong> construido sobre una arquitectura <strong class="text-brand-300">TypeScript + Rust</strong>.',
    p2: 'No es solo un chatbot: puede <strong class="text-brand-300">entender la intención</strong>, <strong class="text-brand-300">ejecutar comandos</strong>, <strong class="text-brand-300">gestionar tareas</strong>, <strong class="text-brand-300">llamar herramientas</strong> e incluso colaborar con otros agentes de IA. Un mismo motor alimenta cada punto de entrada: terminal, escritorio, IM y MCP.',
    p3: '<strong class="text-brand-300">{modules}</strong> subsistemas modulares, <strong class="text-brand-300">{tsFiles}</strong> archivos TypeScript y <strong class="text-brand-300">{desktopComponents}</strong> componentes de escritorio, recortables según la variante de compilación.',
    statLabels: ['Archivos TypeScript', 'Herramientas integradas', 'Canales de mensajería', 'Componentes TSX de escritorio'],
    verifyTitle: 'Compruébalo en el código fuente de GitHub',
  },

  architecture: {
    title: 'Arquitectura de un vistazo',
    subtitle:
      '8 capas funcionales del punto de entrada a la retroalimentación; en ingeniería las imponen 6 puertas de dependencia (entry > ui > app > service > infra > core)',
    summary: {
      title: 'Por capas, como un sistema operativo',
      subtitle:
        'Un núcleo fino, límites entre subsistemas y puertas de dependencia; local-first es el valor por defecto, no un interruptor.',
      pillars: [
        {
          title: 'Núcleo',
          desc: '@openliri/kernel es un paquete propio que expone una interfaz fina, protegido por las puertas K01–K08',
        },
        {
          title: 'Subsistemas',
          desc: 'Herramientas, canales, memoria, enrutamiento, sandbox y tareas tienen sus propios puntos de entrada y límites',
        },
        {
          title: 'Puertas',
          desc: 'Una dirección de dependencia de 6 capas más de 20 comprobaciones de arquitectura: una violación bloquea la CI',
        },
        {
          title: 'Local-first',
          desc: 'Los datos se quedan en tu máquina por defecto; los modelos pueden ejecutarse por completo en local',
        },
      ],
      link: 'Ver cómo ha evolucionado la arquitectura y qué falta',
    },
    layers: [
      {
        name: 'Capa de entrada multimodal',
        subtitle: 'Entra en Liri desde cualquier superficie',
        items: [
          {
            label: 'Terminal REPL',
            detail: 'Una interfaz de terminal construida con React + Ink, con el sistema de compañero Buddy integrado',
          },
          {
            label: 'Cliente de escritorio Tauri',
            detail: '{desktopComponents} componentes TSX en {desktopPages} páginas de funciones (Tauri 2.11 + React 19)',
          },
          {
            label: 'MCP / pasarela de canales',
            detail: 'Servidor MCP y {channels} canales de mensajería (WeChat, DingTalk, Feishu, Telegram y más)',
          },
          {
            label: 'CLI / API HTTP',
            detail: 'Tres ejecutables — Liri / liri-memory / liri-ink — más una API HTTP',
          },
        ],
      },
      {
        name: 'Capa de seguridad primero',
        subtitle: 'Cada entrada pasa por un filtro de seguridad',
        items: [
          {
            label: 'Análisis AST en Rust en tiempo de compilación',
            detail: 'La capa FFI analiza el AST de Bash con {dangerousRules} reglas de comandos peligrosos',
          },
          {
            label: 'Análisis semántico en TypeScript',
            detail:
              'Los comandos compuestos de solo lectura se evalúan segmento a segmento, con motivos de rechazo atribuibles',
          },
          {
            label: 'Motor de reglas Guardrail',
            detail: '{injectionRules} patrones de inyección + {shellRules} reglas específicas de shell',
          },
          {
            label: 'Clasificador AutoMode',
            detail: 'Puntúa el riesgo de la tarea automáticamente y decide entre permitir, preguntar y denegar',
          },
        ],
      },
      {
        name: 'Capa de enrutamiento inteligente',
        subtitle: 'Elección de modelo según el tipo de tarea y su dificultad',
        items: [
          {
            label: '{taskTypes} tipos de tarea detectados',
            detail:
              'codificación, redacción, análisis, herramientas, traducción, búsqueda, ideación, charla informal y más',
          },
          { label: '4 niveles', detail: 'simple / medium / complex / reasoning' },
          {
            label: 'Pipeline de decisión en 5 etapas',
            detail: 'interruptor → vía rápida → persistencia de sesión → juicio del LLM → resolución del nivel',
          },
          {
            label: 'FallbackChain',
            detail:
              'Conmutación por error ordenada cuando el proveedor principal no está disponible, junto con RetryPolicy',
          },
        ],
      },
      {
        name: 'Capa de inyección del segundo cerebro',
        subtitle: 'Base de conocimiento + memoria + eventos de sesión: tres fuentes de contexto recuperables',
        items: [
          {
            label: 'Base de conocimiento',
            detail:
              'Markdown en disco más indexación semántica, con recuperación híbrida por palabra clave / vector / RRF',
          },
          {
            label: 'Sistema de memoria',
            detail: 'Memoria por capas con una tabla vectorial en SQLite y recuperación ponderada por relevancia',
          },
          {
            label: 'Eventos de sesión',
            detail: 'events.jsonl de solo añadir: reproducible y auditable',
          },
          {
            label: 'DreamEngine',
            detail: 'Consolida el conocimiento cuando está inactivo: recoger → analizar → generar → escribir → indexar',
          },
        ],
      },
      {
        name: 'Bucle de decisión TAOR',
        subtitle: 'Think → Act → Observe → Reason',
        items: [
          {
            label: 'Think',
            detail: '{strategies} estrategias de agente: general / codificación / exploración / planificación',
          },
          {
            label: 'Act',
            detail: '{tools} herramientas integradas, registradas dinámicamente según la variante de compilación',
          },
          {
            label: 'Observe',
            detail: 'Evaluación de resultados, ventanas de contexto por capas y compactación automática',
          },
          {
            label: 'Reason',
            detail:
              'Gestión del presupuesto de tokens + reanudación desde puntos de control + corte de circuito por ronda',
          },
        ],
      },
      {
        name: 'Capa de sandbox de ejecución',
        subtitle:
          'Los comandos se ejecutan aislados y degradan con honestidad cuando no hay aislamiento disponible',
        items: [
          { label: 'Linux Landlock', detail: 'Restricciones de acceso al sistema de archivos a nivel de núcleo' },
          { label: 'macOS / Windows', detail: 'Sandbox del sistema con Low IL / objetos Job como alternativa' },
          {
            label: 'Contenedor Docker',
            detail: 'Aislamiento completo en contenedor con límites de recursos y políticas de red',
          },
          {
            label: 'SSH / PTY',
            detail: 'Entornos remotos de ejecución limpios y rutas de pseudo-terminal controladas',
          },
        ],
      },
      {
        name: 'Capa de tareas de larga duración',
        subtitle: 'De una sola conversación a trabajo de varios días',
        items: [
          { label: 'Pipeline PDCA', detail: 'Un bucle Plan-Do-Check-Act que avanza según artefactos reales' },
          {
            label: 'Swarm multiagente',
            detail: 'AgentSwarm con orquestación tipo consejo y descubrimiento dinámico en el registro',
          },
          {
            label: 'Programación Cron',
            detail: 'expresiones once / interval / cron, husos horarios incluidos',
          },
          {
            label: 'Persistencia de tareas',
            detail:
              'Instantáneas de sesión, recuperación desde puntos de interrupción y cuentas atrás visibles mientras espera',
          },
        ],
      },
      {
        name: 'Capa de retroalimentación y evolución',
        subtitle: 'Cada interacción deja evidencia verificable',
        items: [
          {
            label: 'Inducción de patrones de fallo',
            detail:
              'Los patrones de fallo se generalizan de vuelta a los prompts y las habilidades, cerrando el bucle de mejora',
          },
          {
            label: 'Libro de costes',
            detail:
              'Facturado según la tabla de precios de la base de datos, registrando el nombre real del modelo que devuelve el proveedor',
          },
          {
            label: 'Puertas de evaluación',
            detail:
              'Conjuntos de referencia integrados, puntuación de fiabilidad pass^k y medición de seguridad por pares',
          },
          {
            label: 'Repetición de eventos',
            detail: 'El contexto de cada llamada al modelo puede reconstruirse a posteriori',
          },
        ],
      },
    ],
    principlesTitle: 'Filosofía de la arquitectura',
    principles: [
      { title: 'Seguridad integrada', desc: 'La seguridad no es un complemento: es el ADN de cada capa' },
      {
        title: 'Local-first',
        desc: 'Los datos se quedan en local, funciona sin conexión y la privacidad está protegida por defecto',
      },
      { title: 'Enrutamiento inteligente', desc: '{taskTypes} clases de tarea asignadas al nivel de modelo adecuado' },
      {
        title: 'Segundo cerebro',
        desc: 'Base de conocimiento, memoria y registros de eventos: tres capas de contexto recuperables',
      },
      { title: 'Bucle verificable', desc: 'Las lecciones de los fallos vuelven al sistema y las puertas bloquean las regresiones' },
      { title: 'Multimodal unificado', desc: 'Terminal, escritorio, IM y API comparten un mismo motor' },
    ],
  },

  brainSection: {
    title: 'El segundo cerebro',
    subtitle:
      'Base de conocimiento → Memoria → Eventos de sesión: tres capas de contexto recuperable, todas guardadas en tu máquina',
    layers: [
      {
        badge: 'Capa 1: Base de conocimiento',
        title: 'Base de conocimiento',
        desc: 'Markdown en disco más indexación semántica, con la fuente citada en cada resultado',
        tags: ['Markdown en disco', 'Índice semántico JSONL', 'Búsqueda por palabra clave', 'Búsqueda vectorial', 'Fusión RRF'],
      },
      {
        badge: 'Capa 2: Memoria',
        title: 'Sistema de memoria',
        desc: 'Memoria por capas más tablas vectoriales en SQLite, recuperadas con ponderación por relevancia',
        tags: ['Memoria por capas', 'memory_vectors', 'Ponderación por relevancia', 'Limpieza de memoria', 'Inyección de contexto'],
      },
      {
        badge: 'Capa 3: Fuente de verdad',
        title: 'Registro de eventos de sesión',
        desc: 'Todo lo que entra en una petición al modelo se convierte en un evento de sesión que puedes reproducir',
        tags: [
          'events.jsonl de solo añadir',
          'Persistir antes de escribir',
          'Repetición de sesión',
          'Rastro auditable',
          'Registro en tiempo de compilación',
        ],
      },
    ],
    governTitle: 'Organizar y gobernar',
    governSubtitle:
      'Curar conocimiento cuando está inactivo, comprimir contexto cuando se desborda: dos pipelines reales en segundo plano',
    dreamHeading: 'Pipeline de cinco etapas de DreamEngine',
    dreamStages: [
      { name: 'Recoger', desc: 'Reunir sesiones y documentos pendientes de curación' },
      { name: 'Analizar', desc: 'Extraer temas y conclusiones reutilizables' },
      { name: 'Generar', desc: 'Producir notas dirigidas a las capas superiores' },
      { name: 'Escribir', desc: 'Escribir en la base de conocimiento y la memoria' },
      { name: 'Indexar', desc: 'Reconstruir los índices vectoriales y de palabras clave' },
    ],
    contextTitle: 'Gobernanza del contexto por capas',
    contextBody:
      'Cuando una conversación larga se desborda, se descartan primero los turnos más antiguos, reduciendo la memoria en tiempo de compilación de O(total) a O(ventana). Sobrevive una nota de que el texto original es recuperable, los detalles se pueden recuperar por páginas y las marcas de nivel de tokens activan la compresión automática.',
    contextCards: [
      { title: 'Ventanas por capas', desc: 'Recorta primero los turnos antiguos cuando el contexto se desborda' },
      { title: 'Recuperar bajo demanda', desc: 'Recupera el texto original por páginas' },
      { title: 'Compresión en tres niveles', desc: 'Nivel 1/2 en línea + nivel 3 en segundo plano' },
    ],
    pdcaTitle: 'Bucle de automejora PDCA',
    pdcaBody:
      'En tareas de larga duración, Liri ejecuta el bucle Plan-Do-Check-Act por sí solo: descompone la tarea → ejecuta los pasos → revisa los resultados → revisa el plan, hasta terminar o alcanzar una condición de parada.',
    pdcaSteps: [
      { step: 'Plan', desc: 'Descomposición automática' },
      { step: 'Do', desc: 'Ejecución paso a paso' },
      { step: 'Check', desc: 'Revisión automática' },
      { step: 'Act', desc: 'Corrección automática' },
    ],
  },

  capabilities: {
    title: 'Capacidades',
    subtitle: 'Ocho capacidades diferenciales, todas verificables en el código fuente de GitHub',
    items: [
      {
        title: 'Motor de agente profundo',
        description: 'Un bucle TAOR propio con estrategia, memoria y puntos de control',
        details: [
          'Ciclo de decisión TAOR (Think-Act-Observe-Reason)',
          '{strategies} estrategias de agente: general / codificación / exploración / planificación',
          'La reanudación desde puntos de control mantiene recuperables las tareas largas tras una interrupción',
          'Ventanas de contexto por capas con compactación automática en tres niveles',
          '8 motivos de terminación más corte de circuito por ronda para evitar bucles desbocados',
        ],
        highlight: 'Núcleo',
      },
      {
        title: '5 capas de defensa en profundidad',
        description:
          'Análisis AST en Rust en tiempo de compilación → cinco líneas de defensa → aislamiento con sandbox en varios backends',
        details: [
          'Análisis de Bash en tiempo de compilación mediante AST en Rust vía FFI',
          '{dangerousRules} reglas de comandos peligrosos + {injectionRules} reglas de inyección',
          'Motor de reglas de política Guardrail',
          'Clasificador de riesgo AutoMode',
          'Cobertura de sandbox en Landlock / macOS / Windows / Docker / SSH / PTY',
        ],
        highlight: 'Seguridad',
      },
      {
        title: '{tools} herramientas integradas',
        description:
          '{categories} categorías que abarcan archivos, comandos, red, medios, código y colaboración',
        details: [
          'Ejecución de Bash a nivel de AST en Rust',
          'Inteligencia de código con LSP',
          'Extracción y búsqueda web',
          'Procesamiento de notebooks, imágenes, audio y vídeo',
          'Soporte completo de cliente y servidor MCP',
        ],
        highlight: 'Amplitud',
      },
      {
        title: '{channels} canales de mensajería',
        description:
          '{channels} adaptadores de canal, con WeChat / WeCom / DingTalk / Feishu / QQ compatibles',
        details: [
          'Telegram / Discord / Slack / WhatsApp',
          'WeChat / WeCom / DingTalk / Feishu / QQ / Yuanbao',
          'Email / SMS / Webhook / IRC / Matrix',
          'Un catálogo de canales unificado con enrutamiento de pasarela',
          'Recorte de canales en tiempo de compilación para compilaciones más pequeñas',
        ],
        highlight: 'Multiplataforma',
      },
      {
        title: 'Observabilidad de nivel empresarial',
        description: 'Integración con OpenTelemetry, alertas y comprobaciones de estado',
        details: [
          'Tracing + métricas alineados con las convenciones semánticas OTel GenAI',
          'Registro estructurado por niveles',
          'Reglas de alerta y gestión de incidentes',
          'Comprobaciones de estado, copias de seguridad y archivado de datos',
          'Eventos de sesión reproducibles y auditables',
        ],
        highlight: 'Observabilidad',
      },
      {
        title: 'Arquitectura conectable',
        description:
          'SDK de plugins, sistema de habilidades y cuatro protocolos, recortables según la variante de compilación',
        details: [
          '5 variantes de compilación: core / personal / coding / enterprise / headless',
          'Mercado de plugins con carga en caliente y verificación de firmas',
          'Tres fuentes de habilidades aisladas (integradas / de usuario / de terceros)',
          'Protocolos MCP / ACP / A2A / LSP',
          'Arranque en cuatro etapas (T0–T3) con carga bajo demanda',
        ],
        highlight: 'Flexible',
      },
      {
        title: 'Local-first',
        description: 'Modelos locales Ollama / llama.cpp, con los datos en tu máquina por defecto',
        details: [
          'Inferencia local que funciona sin conexión',
          'Un único archivo de datos SQLite que nunca sale del dispositivo',
          'Sesiones guardadas como events.jsonl de solo añadir',
          'Proveedores en la nube como mejora opcional',
          'Directorios de sandbox aislados por espacio de trabajo',
        ],
        highlight: 'Privacidad',
      },
      {
        title: 'Enrutamiento inteligente',
        description:
          '{taskTypes} clases de tarea × 4 niveles × 5 etapas de decisión, más cadenas de conmutación por error entre proveedores',
        details: [
          '{taskTypes} tipos de tarea detectados automáticamente',
          '4 niveles: simple / medium / complex / reasoning',
          '5 etapas de decisión: interruptor → vía rápida → persistencia de sesión → juicio del LLM → nivel',
          'FallbackChain entre proveedores con políticas de reintento',
          'Los precios y las ventanas de contexto se leen de la base de datos',
        ],
        highlight: 'Enrutamiento',
      },
    ],
  },

  channelWall: {
    title: '{channels} canales de mensajería',
    subtitle:
      'Cada uno de los {channels} canales incluye un adaptador propio. Configura sus variables de entorno para activarlo o recórtalo en tiempo de compilación.',
    summary:
      '{count} canales en total · un catálogo unificado · activación por canal · recorte en tiempo de compilación',
  },

  community: {
    title: 'Código abierto · Comunidad',
    subtitle: 'Liri es código abierto y cualquier contribución es bienvenida',
    githubDesc: 'Sigue el proyecto en GitHub, abre Issues o envía PRs',
    communityTitle: 'Únete a la comunidad',
    communityDesc: 'Participa en la conversación, abre Issues o envía PRs',
  },

  comparison: {
    title: 'Autoevaluación de capacidades',
    subtitle:
      'Dieciséis dimensiones, cada una con su estado actual y su ubicación en el código: cada cifra enlaza al código y lo que aún no está terminado también aparece escrito.',
    dimensionHeader: 'Dimensión',
    stateHeader: 'Estado actual',
    statusHeader: 'Progreso',
    sourceHeader: 'Fuente',
    sourceLink: 'Ver',
    statuses: {
      ready: 'Implementado',
      polish: 'En pulido',
      audit: 'Pendiente de auditoría',
      building: 'En desarrollo',
      experimental: 'Experimental',
    },
    statusLegend:
      'El estado lo evalúan los mantenedores y cambia con cada versión; «Ver» salta al directorio correspondiente para que lo compruebes tú mismo.',
    footnote: '* Los datos corresponden al código fuente v{version}; los enlaces apuntan a la rama main del repositorio en GitHub.',
    rows: [
      { dimension: 'Lenguaje', liri: 'TypeScript + Rust', status: 'ready', source: 'app/src' },
      { dimension: 'Local-first', liri: 'Ollama / llama.cpp + SQLite local', status: 'ready', source: 'app/src/ai' },
      {
        dimension: 'Enrutamiento inteligente',
        liri: '{taskTypes} tipos de tarea · 4 niveles · 5 capas de decisión',
        status: 'ready',
        source: 'app/src/ai',
      },
      {
        dimension: 'Modelo de seguridad',
        liri: '{securityLayers} capas de defensa · 6 backends de sandbox',
        status: 'audit',
        source: 'app/src/security',
      },
      {
        dimension: 'Canales de mensajería',
        liri: '{channels} canales (incl. WeChat / DingTalk / Feishu / QQ)',
        status: 'ready',
        source: 'app/src/channels',
      },
      {
        dimension: 'Cliente de escritorio',
        liri: 'Tauri 2.11 · {components} componentes TSX',
        status: 'polish',
        source: 'client/src',
      },
      { dimension: 'Interfaz de terminal', liri: 'React + Ink', status: 'ready', source: 'app/src/ink' },
      {
        dimension: 'Sistema de personalidad',
        liri: '{species} especies × {hats} sombreros × {eyes} ojos',
        status: 'ready',
        source: 'app/src/buddy',
      },
      {
        dimension: 'Interacción por voz',
        liri: 'faster-whisper / Piper en local + nube',
        status: 'ready',
        source: 'app/src/voice',
      },
      {
        dimension: 'Transparencia de costes',
        liri: 'Precios en la base de datos · cada llamada registrada',
        status: 'ready',
        source: 'app/src/cost',
      },
      {
        dimension: 'Segundo cerebro',
        liri: 'Base de conocimiento + memoria + registro de eventos',
        status: 'ready',
        source: 'app/src/knowledge',
      },
      {
        dimension: 'Gobernanza del contexto',
        liri: 'Ventanas por capas + compresión en tres etapas',
        status: 'ready',
        source: 'app/src/context',
      },
      {
        dimension: 'Mercado',
        liri: 'Mercado de plugins + mercado MCP + fuentes de habilidades',
        status: 'building',
        source: 'app/src/plugins',
      },
      {
        dimension: 'Estrategias de agente',
        liri: '{agentStrategies} estrategias · PDCA · Swarm',
        status: 'ready',
        source: 'app/src/agent',
      },
      { dimension: 'Tareas programadas', liri: 'once / interval / cron', status: 'ready', source: 'app/src/chronos' },
      {
        dimension: 'Soporte de protocolos',
        liri: 'MCP + ACP + A2A + LSP',
        status: 'experimental',
        source: 'app/src/mcp',
      },
    ],
  },

  desktopClient: {
    title: 'Cliente de escritorio',
    subtitle:
      'Construido con Tauri 2.11 + React 19 · {components} componentes TSX · {pages} páginas de funciones · una experiencia de escritorio completa',
    sidebar: [
      'Chat',
      'Modelos de IA',
      'Base de conocimiento',
      'Memoria',
      'Habilidades',
      'MCP',
      'Tareas programadas',
      'Centro de costes',
      'Buddy',
      'Ajustes',
    ],
    panelTitle: 'Panel de chat',
    panelUser: 'Liri · Linglong Bird',
    greeting: '¡Hola! Soy Liri, ¿en qué puedo ayudarte?',
    userMessage: 'Ayúdame a analizar los datos de este proyecto',
    reply: 'Claro, analizando...',
    inputPlaceholder: 'Escribe un mensaje y pulsa Enter para enviarlo...',
    mockNote: 'Ilustración de la estructura de la interfaz, no es una captura real',
    features: [
      { label: 'Panel de chat', desc: 'Conversaciones de varios turnos' },
      { label: 'Gestión de modelos', desc: 'Cambia entre modelos' },
      { label: 'Base de conocimiento', desc: 'Recuperación de archivos' },
      { label: 'Memoria', desc: 'Revisa el historial' },
      { label: 'Tareas programadas', desc: 'Programación con Cron' },
      { label: 'Integración MCP', desc: 'Descubre e instala servidores' },
      { label: 'Centro de costes', desc: 'Registro de uso y gasto' },
      { label: 'Buddy', desc: 'Aspecto y datos de crecimiento' },
    ],
  },

  ecosystem: {
    title: 'Ecosistema',
    subtitle:
      'Mercado de plugins + mercado MCP + tres fuentes de habilidades + mercado de plantillas = un ecosistema Liri componible',
    mcp: {
      title: 'Mercado MCP',
      desc: '5 adaptadores de origen, una sola búsqueda',
      items: ['GitHub', 'npm', 'Registro oficial', 'Smithery', 'Servicios incluidos'],
    },
    plugins: {
      title: 'Mercado de plugins',
      desc: 'Registros locales, npm y remotos',
      items: [
        'SDK de plugins + adaptadores',
        'Ciclo de vida y recarga en caliente',
        'Verificación de firmas',
        'Endpoints de configuración + CLI',
        '5 variantes de compilación',
      ],
    },
    skills: {
      title: 'Tres fuentes de habilidades',
      desc: 'Integradas, de usuario y de terceros, aisladas físicamente',
      items: [
        '{skills} habilidades integradas',
        'Habilidades definidas por el usuario',
        'Fuente de terceros ClawHub',
        'Orquestación condicional',
        'Composición y emparejamiento de habilidades',
      ],
    },
    templates: {
      title: 'Plantillas y protocolos',
      desc: 'Plantillas de agentes y de documentos, listas para usar',
      items: [
        'Mercado de plantillas de agentes',
        'Mercado de plantillas de documentos',
        'MCP / ACP / A2A / LSP',
        'Plugins y habilidades componibles',
        'Reutilización parametrizada de plantillas',
      ],
    },
  },

  evolution: {
    meta: {
      title: 'Registro de desarrollo — Liri',
      description:
        'De v0.1 a v0.5.22: cómo Liri pasó de 4.000 archivos a un sistema con límites, puertas y una interfaz que otros pueden asumir. Cada punto de inflexión enlaza con el código y con las pruebas del CHANGELOG.',
    },

    hero: {
      eyebrow: 'REGISTRO DE DESARROLLO',
      title: 'Un camino que aún no está terminado',
      subtitle:
        'De v0.1 a v0.5.22: 156 días, 116 versiones. Esto no es una lista de funciones, sino los errores que cometimos, las reglas que ganamos y los huecos que aún no hemos llenado.',
      stats: [
        { value: '156 días', label: 'desde la primera versión' },
        { value: '116', label: 'versiones' },
        { value: '9', label: 'instantáneas de arquitectura' },
        { value: '20+', label: 'comprobaciones de arquitectura' },
      ],
      scroll: 'Ir a la línea de tiempo',
      snapshot:
        'Instantánea de datos {date} · cifras recogidas del repositorio de Liri por sync-facts y health:arch',
    },

    origin: {
      title: 'Origen',
      paragraphs: [
        'El 25 de mayo de 2026, Liri publicó la v0.1: 100 commits y un asistente de IA de terminal que funcionaba de verdad.',
        'El problema era concreto: que el modelo estuviera de verdad en la terminal, leyera archivos, ejecutara comandos y editara código, en lugar de limitarse a conversar en un cuadro de texto web. Optamos por los modelos locales primero porque no queríamos enviar archivos privados al servidor de otro; optamos por la «seguridad integrada» porque recibe un ordenador real, no solo una API.',
        'Durante los tres meses siguientes añadimos capacidades capa a capa: herramientas, 27 canales de mensajería, un cliente de escritorio, voz, una base de conocimiento. En agosto el repositorio ya tenía más de 4.000 archivos.',
        'Fue también entonces cuando el problema se nombró en voz alta. La revisión de código del 18 de junio de 2026 encontró LocalHTTPService con 7.200 líneas y ChatManager con 3.263, con 150 archivos de prueba frente a 3.742 de código. Dos meses después llegó la primera puntuación de salud de la arquitectura: 10/40, nota D, con 105 archivos sobredimensionados y ninguno registrado.',
        'La lección: que un proyecto pueda pasar a manos de otra persona no depende de cuántas funciones tenga, sino de las reglas que surgen después de chocar contra un muro.',
      ],
    },

    nodes: {
      title: 'Cinco puntos de inflexión',
      note: 'Ordenados por causa, no por calendario: algunos periodos se solapan.',
      items: [
        {
          id: 'n1',
          period: '2026-05-25 → 2026-08',
          title: 'Primero la capacidad, después los límites',
          situation: 'La v0.1 tenía 100 commits; publicar importaba más que la estructura.',
          decision: 'Llenar primero la capacidad: herramientas, canales, escritorio, voz, conocimiento, uno a uno.',
          cost:
            'La primera auditoría fue fea: LocalHTTPService con 7.200 líneas, ChatManager con 3.263, una proporción de pruebas sobre código de alrededor del 4% y una primera puntuación de salud de 10/40 (D), con 105 archivos sobredimensionados sin registrar.',
          result: 'Más de 4.000 archivos, {tools} herramientas, {channels} canales, {desktopComponents} componentes de escritorio.',
          evidence: [
            { label: 'CHANGELOG v0.1', href: 'https://github.com/cocosoft/Liri/blob/main/CHANGELOG.md' },
            {
              label: 'Revisión de código, 18 jun 2026',
              href: 'https://github.com/cocosoft/Liri/blob/main/dev_docs/codebase-review-20260618.md',
            },
          ],
          participate: '¿Quieres añadir una capacidad? Crea un módulo en app/src, no dentro del núcleo.',
        },
        {
          id: 'n2',
          period: '2026-08-09 → 2026-09-30',
          title: 'Aprender a medirnos',
          situation: 'Todo el mundo notaba el problema; nadie sabía decir cuánto de grave era.',
          decision:
            'Convertir la calidad de la arquitectura en una puntuación repetible con un registro y exigir que cada archivo sobredimensionado quedara registrado; renunciamos a la suposición de que la limpieza se sostiene solo con disciplina.',
          cost:
            'Registrar no es dividir: ChatManager pasó de 3.263 a 7.036 líneas (desde entonces se ha dividido hasta {chatManagerLines}). La propia forma de puntuar seguía cambiando, así que sirve como chequeo de salud, no como KPI.',
          result:
            'Nueve instantáneas; los archivos sobredimensionados sin registrar bajaron de 105 a 0 (luego volvieron a 2); la lista pasó a ser un registro trazable.',
          evidence: [
            {
              label: 'architecture-health-history.json',
              href: 'https://github.com/cocosoft/Liri/blob/main/dev_docs/architecture-health-history.json',
            },
            {
              label: 'architecture-health.ts',
              href: 'https://github.com/cocosoft/Liri/blob/main/scripts/architecture-health.ts',
            },
          ],
          participate: 'Reclama un archivo sobredimensionado para dividirlo (ver Formas de ayudar más abajo).',
        },
        {
          id: 'n3',
          period: '2026-10-08 → 10-09',
          title: 'Un borrado equivocado nos dio un proceso de borrado',
          situation:
            'El código había acumulado una capa de «superficies muertas» que parecían no usarse. La limpieza de la v0.4.69 trató el subsistema de sandbox y aislamiento como código muerto: 170 archivos tocados, +9.340 / −10.174 líneas.',
          decision:
            'Al día siguiente, la v0.4.71 lo revirtió todo: 24 archivos restaurados (IsolationManager, EnhancedSandboxManager, PTYSandbox, SSHSandbox, docker/** y más, además de 5 suites de pruebas) y 21 archivos vivos devueltos a su estado anterior.',
          cost: 'Borrar ahora lleva más tiempo: primero se escribe la evidencia. Aun así sale más barato que una reversión.',
          result:
            'La v0.4.72 convirtió el borrado en un proceso, code-deletion.md (CD01–CD07): reunir evidencia, desenganchar los puntos de entrada y luego borrar. «Parece que nadie lo usa» dejó de ser un motivo.',
          evidence: [
            {
              label: 'CHANGELOG v0.4.69 / v0.4.71 / v0.4.72',
              href: 'https://github.com/cocosoft/Liri/blob/main/CHANGELOG.md',
            },
          ],
          participate: 'Revisa un «candidato a código muerto» según CD01–CD07.',
        },
        {
          id: 'n4',
          period: '2026-10-10 → 10-22',
          title: 'Convertir las reglas en puertas',
          situation:
            'Las reglas vivían en documentos y dependían de la disciplina; los documentos y el código empezaron a divergir.',
          decision:
            'Cada regla se convirtió en un bloqueo de CI en lugar de una recomendación: cinco puertas más doc-gate y un job obligatorio sandbox-negative; 413 claves de línea base de valores codificados; un vocabulario de estados de 34 valores con 1.795 pares de línea base; puertas de superficie de arranque, módulos críticos y superficie del núcleo.',
          cost:
            'Unos segundos por commit, y hay que regenerar las líneas base con cada cambio de vocabulario: precisamente para que las definiciones ya no puedan divergir en silencio.',
          result: 'Violaciones de lint:arch en 0; las pruebas pasaron de 3.029 a 7.488.',
          evidence: [
            { label: 'AGENTS.md: lista de puertas', href: 'https://github.com/cocosoft/Liri/blob/main/AGENTS.md' },
            { label: 'Flujo de trabajo de CI', href: 'https://github.com/cocosoft/Liri/blob/main/.github/workflows/ci.yml' },
          ],
          participate: 'Ejecuta las puertas locales (bun run ci) antes de subir cambios y arregla lo que se ponga en rojo.',
        },
        {
          id: 'n5',
          period: '2026-10-05 → 10-28',
          title: 'Encoger el núcleo: de 5.336 líneas a un paquete propio',
          situation:
            'El core era a la vez la implementación de entrada y el patio común de todas las capacidades: cualquiera podía añadirle cosas.',
          decision:
            'Tres pasos: encoger (CoreAPIImpl de 5.336 a 2.521 líneas), extraer (@openliri/kernel como paquete propio; core de 146 a 113 archivos con las puertas de núcleo K01–K08) y después desalojar (37 módulos que incumplían la regla de «cero E/S / cero dependencias hacia arriba» bajaron a app/src, con más de 470 imports actualizados y cinco familias de líneas base regeneradas).',
          cost:
            'Una migración grande y la regeneración completa de las líneas base; desde el 18 de octubre el trabajo llega por lotes y la densidad de commits baja a propósito.',
          result: 'El núcleo ahora expone una interfaz fina; las contribuciones externas tienen por fin un límite claro.',
          evidence: [{ label: 'CHANGELOG v0.5.22', href: 'https://github.com/cocosoft/Liri/blob/main/CHANGELOG.md' }],
          participate: 'Las nuevas capacidades viven fuera del límite del núcleo y empiezan en app/src.',
        },
      ],
      fieldLabels: {
        situation: 'Situación',
        decision: 'Decisión',
        cost: 'Coste',
        result: 'Resultado',
        evidence: 'Evidencia',
        participate: 'Cómo participar',
      },
    },

    model: {
      title: 'Arquitectura: por capas, como un sistema operativo',
      intro:
        'La arquitectura no se inventó desde cero. El núcleo fino, los límites entre subsistemas, la dirección única de las dependencias, las puertas y la observabilidad vienen de décadas de práctica en sistemas operativos; las guías de patrones de diseño e ingeniería publicadas para agentes en los últimos dos años coinciden en las mismas preguntas: capas, límites, estado, gobernanza y evaluación. Nos limitamos con lo primero y nos auditamos con lo segundo.',
      mappingTitle: 'Concepto de sistema operativo → dónde está Liri',
      headers: { concept: 'Concepto', liri: 'En Liri', status: 'Estado' },
      statuses: {
        ready: 'Implementado',
        converging: 'Convergiendo',
        audit: 'Pendiente de auditoría',
        missing: 'Sin cubrir',
      },
      rows: [
        {
          concept: 'Núcleo',
          liri: '@openliri/kernel como paquete propio con una interfaz pública fina, protegido por K01–K08',
          status: 'ready',
        },
        {
          concept: 'Subsistemas',
          liri: 'Herramientas / canales / memoria / enrutamiento / sandbox / tareas / voz / escritorio, cada uno con sus puntos de entrada y límites',
          status: 'converging',
        },
        {
          concept: 'Drivers',
          liri: 'Adaptadores de proveedor, adaptadores de canal y 6 backends de sandbox (Landlock / Docker / SSH / PTY / macOS / Windows)',
          status: 'ready',
        },
        { concept: 'Procesos y planificación', liri: 'Ejecución de sesiones, PDCA, Swarm, Cron', status: 'ready' },
        {
          concept: 'Modelo de permisos',
          liri: 'Cinco capas de defensa más cuatro etapas de aprobación (requested → presented → decided → recorded)',
          status: 'audit',
        },
        {
          concept: 'Observabilidad y auditoría',
          liri: 'Registro de eventos, libro de costes, registro de evidencias',
          status: 'ready',
        },
        {
          concept: 'Mantenedores',
          liri: 'Aún no establecidos: no hay responsables por subsistema ni una vía de traspaso',
          status: 'missing',
        },
      ],
      referenceTitle: 'Con qué nos comparamos',
      referenceBody:
        'Nos comparamos punto por punto con los patrones de diseño de agentes y las guías de ingeniería públicas: los 21 patrones tienen implementación real, pero 3 de los interruptores clave están desactivados por defecto, así que solo decimos «implementado», nunca «activo por defecto». El ciclo de ingeniería se audita igual: arquitectura, compilación, ejecución, gobernanza y optimización.',
      blanksTitle: 'Tres huecos',
      blanks: [
        {
          title: 'Mantenedores por subsistema',
          desc: 'Sin responsables no hay vía de traspaso. Es la pieza más parecida a un sistema operativo y la que nos falta.',
        },
        {
          title: 'Contratos de subsistema',
          desc: 'El diseño de contratos existe, pero no está verificado si el registro / LoopProfile llegó a implementarse: la promesa de estabilidad de las interfaces aún no está fijada.',
        },
        {
          title: 'Puerta de cobertura',
          desc: 'Alrededor del 4% en el momento de la revisión; la CI ejecuta más de 20 comprobaciones de arquitectura, pero aún no hay umbral de cobertura.',
        },
      ],
      honesty:
        'Para ser honestos: la salud de la arquitectura sigue en {healthGrade} ({healthScore}); de {oversized} archivos sobredimensionados, {unregistered} siguen sin registrar, y el mayor sigue en chat (ChatManager se ha dividido de 7.036 a {chatManagerLines} líneas). El núcleo existe, los límites están convergiendo y los mantenedores aún no existen: eso es lo que significa «no está terminado».',
      layersToggle: 'Desplegar las 8 capas funcionales actuales',
      cta: 'Ver el estado completo',
    },

    timeline: {
      title: 'Línea de tiempo',
      subtitle: 'Una entrada por mes: solo cambios de arquitectura y gobernanza, sin commits rutinarios.',
      items: [
        { date: '2026-05-25', text: 'v0.1: 100 commits, el asistente de terminal funciona' },
        {
          date: '2026-06-18',
          text: 'Primera revisión de código: un monolito de 7.200 líneas, proporción de pruebas sobre código de ~4%',
        },
        {
          date: '2026-08-09',
          text: 'Primera puntuación de salud: 10/40 (D), 105 archivos sobredimensionados sin registrar',
        },
        {
          date: '2026-10-09',
          text: 'El sandbox se borra por una limpieza → reversión completa; al día siguiente, proceso de borrado CD01–CD07',
        },
        {
          date: '2026-10-20',
          text: 'Llega la puerta del vocabulario de estados: 34 valores, 1.795 pares de línea base',
        },
        {
          date: '2026-10-28',
          text: 'Se consolida el desalojo del núcleo; herramientas visibles por defecto limitadas a 12 y 1.397 tokens',
        },
        { date: '2026-10-28', text: 'Se publican el sitio de documentación bilingüe y esta página' },
      ],
      more: 'Las actualizaciones mensuales se irán añadiendo aquí.',
    },

    participate: {
      title: 'Formas de ayudar',
      subtitle: 'Esta página no es un informe de cierre, es una invitación. Tres huecos y faltan manos para todos.',
      cards: [
        {
          title: 'Reclama un hueco',
          desc: 'El aislamiento de dominios de conocimiento Domain-first tiene diseño, pero las fases A/B/C no están implementadas; las nuevas capacidades tampoco necesitan entrar en el núcleo.',
          cta: 'Reclamar una tarea',
        },
        {
          title: 'Ayúdanos a pagar la deuda',
          desc: '{oversized} archivos sobredimensionados ({unregistered} sin registrar) esperan a ser divididos; todavía no hay umbral de cobertura.',
          cta: 'Reclamar una tarea',
        },
        {
          title: 'Audita nuestra seguridad',
          desc: 'Las cinco capas de defensa y los seis backends de sandbox están implementados y sus reglas pueden leerse en el código, pero no ha habido auditoría de terceros. Es la retroalimentación que más queremos.',
          cta: 'Ver la lista',
        },
      ],
      audit: {
        title: 'Lista de auditoría de seguridad',
        items: [
          'Reglas de comandos peligrosos: 37 reglas — dónde están y cómo se disparan; construye un caso y comprueba si cae en la regla esperada',
          'Reglas de inyección de prompts: 14 reglas — alimenta un documento malicioso y comprueba si se bloquea',
          'Reglas de shell: 10 entradas de lista blanca / negra — prueba vías de elusión (tuberías, subshells, codificación)',
          'Degradación del sandbox: en qué condiciones degrada cada uno de los 6 backends y si falla en cerrado',
          'Etapas de aprobación: requested → presented → decided → recorded — busca etapas que falten o estén desordenadas',
          'Superficie de privilegios: ¿puede una llamada a herramienta saltarse el clasificador de permisos y escribir o ejecutar directamente?',
        ],
        note: 'Puntos de entrada: app/src/security, app/src/sandbox, app/src/permission.',
      },
      securityNotice:
        'Si encuentras detalles de una vulnerabilidad, repórtalos de forma privada según SECURITY.md; no abras un issue público. Los issues públicos son solo para el proceso y el alcance de la auditoría.',
      ctaGithub: 'Reclama o pregunta en Issues',
      ctaSecurity: 'Abrir la vía de autoevaluación de seguridad',
      fundLink: '¿Prefieres financiarlo? Consulta la página de patrocinio',
    },

    teaser: {
      title: 'Un camino que aún no está terminado',
      paragraphs: [
        'El 25 de mayo de 2026 solo era una v0.1 con 100 commits. Cinco meses después tiene más de 4.000 archivos y 27 canales, y también la factura que viene con ellos: un monolito de 7.000 líneas, 105 archivos sobredimensionados que nadie había registrado y una «limpieza de código muerto» que borró todo el subsistema de sandbox.',
        'Lo restauramos y después convertimos el borrado, los límites y los vocabularios de estados en puertas de CI, una a una. El camino no está terminado.',
      ],
      stats: ['156 días', '116 versiones', '20+ comprobaciones de arquitectura'],
      cta: 'Leer la historia completa',
    },
  },

  hero: {
    subtitle:
      'Linglong Bird · Asistente personal de IA · <span class="text-brand-400">Local-first</span> · <span class="text-brand-400">Seguridad integrada</span>',
    versionPill: 'v{version} · Licencia MIT · Publicado el <span class="whitespace-nowrap">{date}</span>',
    stats: [
      '{n} archivos TS',
      '{n} herramientas integradas',
      '{n} capas de seguridad',
      '{n} canales de mensajería',
      '{n} especies de Buddy',
    ],
    ctaPrimary: 'Empezar',
    ctaGithub: 'GitHub',
    command: 'git clone https://github.com/cocosoft/Liri.git',
    commandHint: '  # luego cd app && bun install',
  },

  highlights: {
    title: 'Más que una lista de funciones',
    subtitle: 'Tres cosas fáciles de pasar por alto y que se usan a diario.',
    cards: [
      {
        id: 'buddy',
        icon: '🐣',
        title: 'Personalidad Buddy',
        desc: 'No es una herramienta, es un compañero: su aspecto se genera de forma determinista a partir de una semilla, así que el mismo Buddy siempre se ve igual; su estado de crecimiento se guarda en disco y se acumula entre sesiones.',
        chips: ['{species} especies', '{hats} sombreros', '{eyes} ojos', '{rarities} niveles de rareza'],
      },
      {
        id: 'cost',
        icon: '🧾',
        title: 'Costes transparentes',
        desc: 'Precios leídos de la base de datos, atribución al nombre real del modelo que devuelve el proveedor y cada llamada escrita en cost_records; el presupuesto primero avisa, luego comprime y al final bloquea.',
        chips: ['Precios en model_registry', 'usage real', 'registro por llamada', 'presupuesto diario'],
      },
      {
        id: 'scenarios',
        icon: '🎯',
        title: 'Cuatro tipos de usuario',
        desc: 'Los desarrolladores ejecutan comandos y editan código; los responsables de seguridad obtienen bloqueo a nivel de AST y rastros de auditoría; los equipos de operaciones lo ejecutan como servicio; el resto lo usa desde una aplicación de mensajería.',
        chips: ['Desarrolladores', 'Responsables de seguridad', 'Equipos de operaciones', 'Cualquier usuario'],
      },
    ],
  },

  limitations: {
    title: 'Limitaciones actuales',
    subtitle:
      'Lo que aún no está terminado durante la iteración rápida: lo escribimos aquí para que no tengas que descubrirlo a la mala.',
    statuses: {
      audit: 'Pendiente de auditoría',
      polish: 'En pulido',
      building: 'En desarrollo',
      experimental: 'Experimental',
      note: 'Nota',
    },
    items: [
      {
        status: 'audit',
        title: 'La seguridad espera una auditoría externa',
        desc: '{securityLayers} capas de defensa y 6 backends de sandbox están implementados, con {sandboxFiles} archivos relacionados con el sandbox que puedes revisar uno a uno, pero todavía no ha habido una auditoría de seguridad de terceros.',
      },
      {
        status: 'polish',
        title: 'La interacción de escritorio sigue en pulido',
        desc: '{desktopComponents} componentes TSX y {desktopPages} páginas ya están listos; los atajos, las animaciones y los casos límite se siguen ajustando.',
      },
      {
        status: 'building',
        title: 'El catálogo del mercado es todavía pequeño',
        desc: 'El mercado de plugins, el mercado MCP y las fuentes de habilidades funcionan de extremo a extremo, pero el catálogo instalable sigue creciendo.',
      },
      {
        status: 'experimental',
        title: 'ACP / A2A son experimentales',
        desc: 'Ambos protocolos siguen evolucionando y sus interfaces pueden cambiar entre versiones; MCP y LSP son estables.',
      },
      {
        status: 'building',
        title: 'La documentación en inglés puede ir por detrás',
        desc: 'La documentación en chino se sincroniza automáticamente desde el repositorio; la versión en inglés es una traducción manual y suele ir una versión por detrás.',
      },
      {
        status: 'note',
        title: 'Manda el repositorio, no el sitio',
        desc: 'Estas páginas se generan desde app/docs. Si algo no coincide con el código fuente, el repositorio de GitHub es la referencia.',
      },
    ],
    cta: '¿Has encontrado un problema? Abre un issue',
  },

  localFirst: {
    title: 'Local-first',
    subtitle:
      'Ejecuta modelos locales con Ollama o llama.cpp y mantén tus datos en tu máquina por defecto. Al cambiar a un proveedor en la nube, solo se envía al proveedor elegido el contenido de esa petición',
    benefits: [
      {
        title: 'Funciona sin conexión',
        desc: 'Con un modelo local de Ollama o llama.cpp puedes conversar y ejecutar herramientas locales sin conexión de red. Las sesiones, la memoria y la base de conocimiento viven en archivos locales.',
      },
      {
        title: 'Tus datos se quedan en local',
        desc: 'Las sesiones, la memoria y la base de conocimiento viven en SQLite local y en tu directorio de trabajo, y el historial de conversación se añade a events.jsonl para poder revisarlo y auditarlo con facilidad.',
      },
      {
        title: 'Añade la nube cuando quieras',
        desc: 'Cuando necesites más potencia, activa proveedores en la nube ({providers} compatibles) en tu configuración y deja que el enrutamiento elija uno según el nivel de la tarea, o quédate solo en local.',
      },
    ],
    compareTitle: 'Local frente a nube',
    compareRows: [
      { label: 'Dónde se ejecuta el modelo', local: 'Tu máquina (Ollama / llama.cpp)', cloud: 'Los servidores del proveedor' },
      { label: '¿Hace falta conexión?', local: 'No', cloud: 'Sí' },
      { label: 'Adónde van los datos de la petición', local: 'Nunca salen de tu máquina', cloud: 'Se envían al proveedor elegido' },
      { label: 'Modelo de coste', local: 'Tu propio hardware', cloud: 'Pago por uso' },
      { label: 'Historial de conversación', local: 'events.jsonl se queda en local', cloud: 'También se queda en local' },
    ],
  },

  quickstart: {
    title: 'Empezar',
    subtitle: 'Tres pasos: instalar dependencias → configurar tu clave de API → ejecutar dev',
    stepLabels: ['Instalar dependencias', 'Configurar la clave de API', 'Iniciar Liri'],
    copy: 'Copiar comando',
    envComment: '# edita .env y añade tu clave de API',
  },

  roadmap: {
    title: 'Versiones y ritmo',
    subtitle:
      'Los números de versión, el recuento de etiquetas y el historial de commits se pueden verificar en GitHub; el historial incluye el desarrollo previo al lanzamiento y la iteración pública empieza con el lanzamiento',
    milestones: [
      {
        quarter: '2026-10-28',
        version: 'v{version}',
        label: 'Versión actual',
        items: [
          '{tools} herramientas integradas en {toolCategories} categorías',
          '{channels} canales de mensajería',
          '{securityLayers} capas de seguridad + 6 backends de sandbox',
          '{desktopComponents} componentes de escritorio · {desktopPages} páginas',
        ],
      },
      {
        quarter: '2026-10',
        version: 'v0.5.13 → v0.5.21',
        label: 'Publicado',
        items: [
          'Ocho versiones en tres días (v0.5.13 → v0.5.21), todas dentro del desarrollo previo al lanzamiento',
          'Módulos del núcleo extraídos, líneas base de las puertas sincronizadas',
          'El progreso del plan ahora avanza según la existencia de artefactos',
          'Los cambios de permisos del sandbox se aplican al instante',
        ],
      },
      {
        quarter: 'Totales del repositorio',
        version: '{releases} etiquetas',
        label: 'Ritmo de versiones',
        items: [
          '{commits} commits hasta la fecha',
          'La CI cubre lint:arch / comprobación de tipos / pruebas unitarias',
          'Repositorio público con issues y PRs visibles',
        ],
      },
      {
        quarter: 'Siguiente',
        version: 'v0.6+',
        label: 'Planificado',
        items: [
          'Se sigue en GitHub Releases e Issues',
          'El sitio de documentación en línea ya está activo (chino e inglés)',
          'Vota las prioridades de funciones en Issues',
        ],
      },
    ],
  },

  security: {
    title: 'Cinco capas de defensa en profundidad',
    subtitle:
      'Del análisis AST en tiempo de compilación al sandbox en tiempo de ejecución: cada recuento de reglas, umbral y política de degradación está en el código fuente',
    layers: [
      {
        title: 'Análisis AST en Rust en tiempo de compilación',
        short:
          'Rust FFI realiza un análisis de seguridad a nivel de AST antes de ejecutar el código, contrastado con {dangerousRules} reglas de comandos peligrosos',
        tag: 'Compilación',
        details: [
          'La capa FFI de Rust analiza el AST de Bash',
          'Análisis del AST de Bash con {dangerousRules} reglas de comandos peligrosos',
          'Detección de inyección por variables y bloqueo de salto de rutas',
          'Detección de manipulación de argumentos con validación de comandos en lista blanca',
        ],
      },
      {
        title: 'Análisis semántico en TypeScript',
        short:
          'Los comandos compuestos se evalúan en tiempo de ejecución segmento a segmento, con motivos de rechazo ligados a la sentencia exacta',
        tag: 'Ejecución',
        details: [
          'Los comandos compuestos de solo lectura pasan segmento a segmento en lugar de rechazarse en bloque',
          '{injectionRules} patrones de inyección detectados, incluidos caracteres de ancho cero y envenenamiento de variables de entorno',
          '{shellRules} reglas específicas de shell (bash / PowerShell / cmd)',
          'Los mensajes de rechazo señalan la causa real y la sentencia infractora',
        ],
      },
      {
        title: 'Motor de reglas Guardrail',
        short:
          'Un sistema de reglas de política configurable con autorización granular por herramienta, canal y grupo de usuarios',
        tag: 'Política',
        details: [
          'deny-by-default con listas blancas',
          'Granularidad de permisos: herramienta → regla → huella',
          'Los cambios de reglas surten efecto de inmediato, sin reiniciar',
          'Los rechazos informan de la regla de origen y de la sentencia coincidente',
        ],
      },
      {
        title: 'Clasificador AutoMode',
        short:
          'Puntúa el riesgo a partir del contexto de la tarea y de la herramienta y decide automáticamente si permitir, preguntar o denegar',
        tag: 'Adaptativo',
        details: [
          'Clasificación de riesgo basada en la semántica del comando y el contexto de la herramienta',
          'Los comandos de bajo riesgo se permiten automáticamente según la política',
          'Los comandos de alto riesgo pasan a aprobación y llegan a la bandeja de entrada',
          'Los comandos no confiables se preguntan por defecto en lugar de denegarse',
        ],
      },
      {
        title: 'Ejecución en sandbox',
        short:
          '6 backends de aislamiento (Landlock / macOS / Windows / Docker / SSH / PTY) para que los comandos que se extralimitan nunca toquen el host',
        tag: 'Aislamiento',
        details: [
          'Linux Landlock: restricciones del sistema de archivos a nivel de núcleo',
          'Sandbox de macOS / Windows Low IL + objeto Job como alternativa',
          'Docker: aislamiento completo con políticas de recursos y de red',
          'Ejecución remota por SSH y rutas PTY controladas',
          'Degradación honesta con un aviso claro cuando no hay backend disponible',
        ],
      },
    ],
    protectionsTitle: 'La seguridad en cifras',
    protections: [
      { label: 'Reglas de comandos peligrosos', value: '{n}', desc: 'Coincidencia a nivel de AST en bash / PowerShell / cmd' },
      {
        label: 'Reglas de detección de inyección',
        value: '{n}',
        desc: 'Cubre caracteres de ancho cero, envenenamiento de variables de entorno y más',
      },
      { label: 'Backends de sandbox', value: '{n}', desc: 'Landlock / macOS / Windows / Docker / SSH / PTY' },
      {
        label: 'Archivos de implementación del sandbox',
        value: '{n}',
        desc: 'Implementaciones en TypeScript bajo app/src/sandbox',
      },
    ],
    summary:
      'Análisis AST en Rust en tiempo de compilación · Análisis semántico en TypeScript · Motor de reglas Guardrail · Clasificador AutoMode · Ejecución en sandbox',
  },

  smartRouter: {
    title: 'Enrutamiento inteligente',
    subtitle:
      'Elige un nivel de modelo según el tipo de tarea y su dificultad y, si el proveedor principal no está disponible, retrocede por el orden configurado',
    taskTypesHeading: 'Detecta automáticamente {taskTypes} tipos de tarea (los {common} más comunes abajo)',
    taskTypes: [
      { name: 'Codificación', desc: 'Generación de código, depuración, revisión' },
      { name: 'Redacción', desc: 'Documentos, textos, traducción' },
      { name: 'Análisis', desc: 'Análisis de datos, razonamiento, planificación' },
      { name: 'Herramientas', desc: 'Archivos, búsqueda, operaciones del sistema' },
      { name: 'Traducción', desc: 'Traducción y localización multilingüe' },
      { name: 'Búsqueda', desc: 'Búsqueda web y recuperación de información' },
      { name: 'Creatividad', desc: 'Lluvia de ideas, diseño, ideación' },
      { name: 'Charla', desc: 'Conversación cotidiana' },
    ],
    layersHeading: 'Pipeline de decisión de {n} capas',
    layers: [
      {
        name: 'L1: Interruptor del enrutador',
        desc: 'Cuando está desactivado, las peticiones van directas al modelo por defecto sin comprobaciones adicionales',
      },
      {
        name: 'L2: Vía rápida',
        desc: 'Las tareas simples o las reglas de prefijo van directas al modelo de nivel bajo',
      },
      {
        name: 'L3: Persistencia de sesión',
        desc: 'Mantiene un modelo por conversación para que no cambie continuamente',
      },
      {
        name: 'L4: Clasificador LLM',
        desc: 'Un modelo pequeño juzga el tipo y la dificultad de la tarea y asigna un nivel',
      },
      {
        name: 'L5: Resolución del nivel',
        desc: 'Asigna los niveles simple/medium/complex/reasoning a modelos concretos',
      },
    ],
    fallbackHeading: 'Cadena de conmutación por error entre proveedores',
    fallbackNote: 'Modelo principal caído → conmutación automática → degradación sin interrupciones',
    fallback: [
      { name: 'Principal', model: 'Proveedor principal · modelo del nivel actual' },
      { name: 'Alternativa 1', model: 'Proveedor de respaldo del mismo nivel' },
      { name: 'Alternativa 2', model: 'Proveedor de respaldo de otro nivel' },
      { name: 'Alternativa 3', model: 'Cualquier otro proveedor configurado' },
      { name: 'Último recurso', model: 'Ollama / llama.cpp en local' },
    ],
  },

  sponsor: {
    meta: {
      title: 'Apoyar a Liri — Liri',
      description:
        'Liri es un proyecto de código abierto mantenido por una sola persona. El patrocinio no es una propina: compra tiempo para la auditoría externa de seguridad, la revisión de la documentación en inglés y la infraestructura.',
    },
    label: 'Apoyo',
    hero: {
      title: 'Apoyar a Liri',
      subtitle:
        'Es un proyecto de código abierto mantenido por una sola persona. El patrocinio no es una propina: compra tiempo para auditorías, documentación e infraestructura.',
      note: 'Cada mes publicamos en qué se ha gastado el dinero en el libro de abajo; lo que es MIT seguirá siendo MIT.',
    },
    channelsTitle: 'Formas de patrocinar',
    channels: [
      {
        title: 'GitHub Sponsors',
        desc: 'Para patrocinadores internacionales, mensual, con la lista de patrocinadores pública en GitHub.',
        cta: 'Patrocinar cada mes',
      },
      {
        title: 'Afdian',
        desc: 'Para patrocinadores en China: Alipay / WeChat, mensual o con el importe que quieras.',
        cta: 'Ir a Afdian',
      },
    ],
    comingSoon: 'Muy pronto',
    pendingNote: 'El canal para China (Afdian) está en preparación y se añadirá aquí.',
    waitlistNote:
      'Cobrar los pagos de GitHub Sponsors exige una cuenta en una región compatible; China continental aún no está en la lista. La solicitud ya se ha enviado y está en revisión.',
    contact: 'Soporte empresarial y cualquier otra cosa: abre un issue (con la etiqueta sponsor)',
    usesTitle: 'Adónde va el dinero',
    usesNote: 'Los porcentajes son el plan de los mantenedores, no una promesa; el gasto real se registra cada mes.',
    uses: [
      {
        label: 'Auditoría externa de seguridad',
        share: '~40%',
        desc: 'Cinco capas de defensa y seis backends de sandbox siguen sin auditoría de terceros: es el mayor hueco',
      },
      {
        label: 'CI y firma de versiones',
        share: '~20%',
        desc: 'Compilaciones multiplataforma, firma de instaladores y la canalización de publicación',
      },
      {
        label: 'Revisión de la documentación en inglés',
        share: '~15%',
        desc: 'La documentación en inglés es una traducción manual y suele ir una versión por detrás del chino',
      },
      {
        label: 'Créditos de API de modelos',
        share: '~15%',
        desc: 'La evaluación y las pruebas de regresión necesitan llamadas reales, no mocks',
      },
      { label: 'Dominio y alojamiento', share: '~10%', desc: 'Sitio web, sitio de documentación y espejos' },
    ],
    notTitle: 'Lo que no compra',
    nots: [
      'No compra prioridad en las funciones: la prioridad de un issue depende del impacto, no del importe',
      'No compra soporte prioritario: todo el mundo hace cola en el mismo gestor de issues',
      'No hay edición privilegiada de código cerrado: lo que es MIT seguirá siendo MIT',
      'No publicamos tu nombre salvo que lo autorices expresamente',
    ],
    tiersTitle: 'Niveles',
    tiers: [
      { title: '10 ¥ / mes', desc: 'Tu nombre aparece en SPONSORS.md' },
      { title: 'Importe libre', desc: 'Apoyo puntual, por el importe que quieras' },
      { title: 'Empresa', desc: 'Logotipo y enlace; factura disponible, contacta a través de los issues' },
    ],
    ledgerTitle: 'Libro transparente',
    ledgerDesc:
      'Una entrada al mes: ingresos / gastos / saldo. El formato queda fijado aquí; la primera entrada llegará en el mes en que se abra el patrocinio.',
    ledgerHeaders: ['Mes', 'Ingresos', 'Gastos', 'Saldo'],
    ledgerEmpty: 'Aún no hay entradas',
    otherTitle: 'Formas de ayudar sin dinero',
    others: [
      { title: 'Star y difusión', desc: 'Ayuda a que lo encuentre quien lo necesita', href: 'https://github.com/cocosoft/Liri' },
      {
        title: 'Un issue reproducible',
        desc: 'Un error reproducible vale más que diez opiniones',
        href: 'https://github.com/cocosoft/Liri/issues/new',
      },
      {
        title: 'Revisión de la documentación en inglés',
        desc: 'La versión inglesa es una traducción manual: las correcciones son bienvenidas',
        href: '/docs',
      },
      {
        title: 'Auditoría de seguridad',
        desc: 'Recorre la lista; no publiques detalles de vulnerabilidades',
        href: '/evolution',
      },
      {
        title: 'Reclama un hueco',
        desc: 'Modelo de mantenedores, contratos de subsistema, puerta de cobertura',
        href: '/evolution',
      },
    ],
    faqTitle: 'Preguntas frecuentes',
    faq: [
      {
        q: '¿Podéis emitir factura?',
        a: 'Por canales personales, no. Para apoyo empresarial, contacta a través de los issues y lo gestionamos con una cuenta de empresa.',
      },
      {
        q: '¿Puedo decidir a qué se destina mi dinero?',
        a: 'Puedes dejarlo por escrito, pero la asignación sigue los porcentajes de arriba.',
      },
      {
        q: '¿Puedo pedir un reembolso?',
        a: 'El patrocinio mensual se puede cancelar en cualquier momento; los meses ya pagados no se reembolsan.',
      },
      {
        q: '¿Aparecerá mi nombre?',
        a: 'Por defecto no. Si quieres aparecer en SPONSORS.md, déjalo escrito al patrocinar.',
      },
    ],
  },

  status: {
    meta: {
      title: 'Estado del proyecto — Liri',
      description:
        'Autoevaluación de capacidades, limitaciones actuales, ritmo de versiones y pila tecnológica: todo lo que Liri ha construido y lo que no, con cada cifra enlazada al código.',
    },
    label: 'Estado',
    title: 'Estado del proyecto',
    subtitle:
      'Autoevaluación de capacidades, limitaciones actuales, ritmo de versiones y pila tecnológica: qué está hecho, qué no, y cada cifra enlaza con el código.',
    jumpLabel: 'En esta página',
    jumps: [
      { href: '#comparison', label: 'Autoevaluación' },
      { href: '#limitations', label: 'Limitaciones' },
      { href: '#roadmap', label: 'Versiones' },
      { href: '#techstack', label: 'Pila tecnológica' },
      { href: '#local-first', label: 'Local-first' },
    ],
    healthNote: 'La tendencia de salud de la arquitectura (9 instantáneas) llegará a esta página en la próxima versión.',
    updateNote: 'Se actualiza con cada versión; si algo no coincide con el código fuente, manda el repositorio de GitHub.',
  },

  techstack: {
    title: 'Pila tecnológica',
    subtitle: 'Una pila moderna, elegida con cuidado en cada capa',
    items: [
      { label: 'TypeScript', pct: '{n} archivos', desc: 'Lenguaje principal · unas {lines} líneas' },
      { label: 'Rust', pct: '{n} módulos', desc: 'Módulos nativos para AST, seguridad y compresión' },
      { label: 'Bun', pct: '', desc: 'Entorno de ejecución' },
      { label: 'React 19 + Ink', pct: '', desc: 'Interfaz de terminal' },
      { label: 'Tauri 2.11', pct: '{n} componentes', desc: 'Cliente de escritorio' },
      { label: 'SQLite', pct: '', desc: 'Almacenamiento de datos y vectores' },
      { label: 'OpenTelemetry', pct: '', desc: 'Observabilidad' },
      { label: 'MCP + ACP + A2A + LSP', pct: '', desc: 'Protocolos' },
      { label: 'Docker', pct: '', desc: 'Uno de los backends de sandbox' },
      { label: 'MIT License', pct: '', desc: 'Licencia de código abierto' },
    ],
  },

  voiceInteraction: {
    title: 'Interacción por voz',
    subtitle: 'Más que escribir: di lo que necesitas y Liri lo entiende, actúa y responde',
    features: [
      {
        title: 'Entrada de voz',
        desc: 'faster-whisper local y SenseVoice, u OpenAI Whisper en la nube',
        platforms: ['faster-whisper local', 'SenseVoice', 'OpenAI Whisper', 'Reconocimiento en streaming'],
      },
      {
        title: 'Salida de voz',
        desc: 'Piper local o Edge / OpenAI en la nube, o tu propio comando personalizado',
        platforms: ['Piper local', 'Edge TTS', 'OpenAI TTS', 'Comando personalizado'],
      },
      {
        title: 'Integrada como herramienta',
        desc: 'La voz en sí es una herramienta que el modelo puede llamar cuando la necesite',
        platforms: ['herramienta tts', 'herramienta audio_play', 'Entrada de voz', 'Reproducción de respuestas'],
      },
      {
        title: 'En todas las superficies',
        desc: 'Escritorio y terminal comparten el mismo servicio de voz',
        platforms: ['Escritorio Tauri', 'Terminal CLI', 'API HTTP'],
      },
    ],
    scenarios: 'Funcionamiento sin manos · Multitarea · Accesibilidad · Comandos de voz ·',
    scenariosHighlight: 'Dilo donde sea y queda hecho',
  },
};
