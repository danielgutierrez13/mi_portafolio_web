# Portafolio — Cesar Daniel Gutiérrez Villegas · Software Engineer

Portafolio profesional personal de una sola página (SPA) construido con **React 19** y **TypeScript**. Presenta experiencia laboral, servicios, proyectos, stack técnico, código abierto, formación y certificaciones, con tema oscuro/claro y un sistema de animaciones y microinteracciones cuidado (todo respetando `prefers-reduced-motion`).

**Stack:** React 19 · TypeScript · Vite · CSS vanilla con design tokens · cero librerías de UI.

---

## ✨ Características

### Secciones
- **Hero** — pitch, acciones, tarjeta API decorativa y CV descargable
- **Sobre mí** — icono de marca terminal, datos, idiomas y bio
- **Stack técnico** — métricas y grid de habilidades por categoría
- **Servicios** — tarjetas de áreas de valor (backend, frontend, RPA, móvil, IA)
- **Experiencia** — timeline con modalidad, constancias y referencias
- **Proyectos** — carrusel paginado con filtro por categoría (Todos / Laborales / Personales)
- **Open source** — perfil de GitHub y repos destacados
- **Formación** — grados + carrusel de capacitaciones con certificados
- **Contacto** — terminal decorativa, botones y redes sociales

### Animaciones e interacciones
- **Tema oscuro / claro** persistido en `localStorage`, con **transición de revelado circular** (View Transitions API) desde el botón, y fallback + reduced-motion
- **Scroll reveal** con `IntersectionObserver` y **aparición escalonada** de tarjetas en grids
- **Hero**: fondo *aurora* animado, título con efecto **decode/scramble** y **API card** cuyo JSON aparece en streaming línea a línea
- **Métricas** del Stack que **cuentan** desde 0 al entrar en pantalla
- **Barras de idioma** que se llenan al revelarse la sección
- **Marquee infinito** con los logos del stack (colorean al hover) y **fondos animados temáticos** por sección (logos de tecnología / iconos dev en baja opacidad)
- **Nav** con iconos por enlace, **subrayado animado**, resaltado de la **sección activa** (scroll-spy), barra que se **encoge al hacer scroll**, **barra de progreso** de lectura y menú móvil animado
- Microinteracciones: cursor de terminal en los *eyebrows*, lift/rebote en iconos sociales, flechas que se deslizan en botones y carrusel
- **Reduced-motion**: todas las animaciones se desactivan o muestran su estado final

### Base técnica
- Carrusel de proyectos y de capacitaciones paginados con swipe táctil (hook `useSwipe` compartido)
- Lightbox accesible nativo (`<dialog>`) con transición fade + scale (`@starting-style`) para certificados, diplomas, proyectos, constancias y CV
- Flag `confidential` por proyecto que oculta capturas y enlaces externos
- Logos de marca en SVG (paths inline en `techLogos.ts`) — sin peticiones externas
- SVG sprite inline para los iconos de UI — sin peticiones externas
- Interfaces TypeScript co-ubicadas con sus datos en `src/data/` — sin barrel files
- Tipado estricto (`strict`, `noUnusedLocals`, `noUnusedParameters`) y ESLint limpio
- Diseño responsivo (móvil, tablet, escritorio) — cero dependencias de UI, CSS vanilla con design tokens

---

## 🛠️ Tecnologías

| Tecnología            | Versión |
|-----------------------|---------|
| React / React DOM     | 19.2.6  |
| TypeScript            | 6.0.3   |
| Vite                  | 8.0.12  |
| @vitejs/plugin-react  | 6.0.1   |
| Vitest                | 4.1.11  |
| ESLint                | 10.3.0  |
| typescript-eslint     | 8.61.1  |

---

## 📋 Prerrequisitos

- Node.js 20 o superior
- npm 10 o superior

---

## 📦 Dependencias

### Producción

| Dependencia | Versión | Licencia | Propósito                                    |
|-------------|---------|----------|----------------------------------------------|
| react       | ^19.2.6 | MIT      | Biblioteca de UI declarativa con hooks       |
| react-dom   | ^19.2.6 | MIT      | Renderizado de React en el DOM del navegador |

### Desarrollo

| Dependencia                   | Versión  | Licencia   | Propósito                                               |
|-------------------------------|----------|------------|---------------------------------------------------------|
| typescript                    | ^6.0.3   | Apache-2.0 | Tipado estático y verificación en compilación           |
| vite                          | ^8.0.12  | MIT        | Bundler y servidor de desarrollo con HMR                |
| @vitejs/plugin-react          | ^6.0.1   | MIT        | Fast Refresh y JSX transform para Vite                  |
| @types/react                  | ^19.2.14 | MIT        | Tipos TypeScript para React                             |
| @types/react-dom              | ^19.2.3  | MIT        | Tipos TypeScript para React DOM                         |
| vitest                        | ^4.1.11  | MIT        | Runner de tests unitarios compatible con Vite           |
| @vitest/coverage-v8           | ^4.1.11  | MIT        | Cobertura de código mediante V8                         |
| @testing-library/react        | ^16.3.2  | MIT        | Utilidades de render y queries para tests de React      |
| @testing-library/user-event   | ^14.6.1  | MIT        | Simulación de interacciones reales de usuario           |
| @testing-library/jest-dom     | ^6.9.1   | MIT        | Matchers adicionales para el DOM en Vitest              |
| jsdom                         | ^29.1.1  | MIT        | Entorno DOM simulado para tests                         |
| eslint                        | ^10.3.0  | MIT        | Linter de código estático                               |
| @eslint/js                    | ^10.0.1  | MIT        | Reglas ESLint para JavaScript                           |
| typescript-eslint             | ^8.61.1  | MIT        | Reglas ESLint para TypeScript                           |
| eslint-plugin-react-hooks     | ^7.1.1   | MIT        | Reglas de uso correcto de hooks de React                |
| eslint-plugin-react-refresh   | ^0.5.2   | MIT        | Compatibilidad de componentes con Fast Refresh          |
| globals                       | ^17.6.0  | MIT        | Variables globales del entorno browser para ESLint      |

---

## 🚀 Scripts

| Comando                 | Descripción                                                  |
|-------------------------|--------------------------------------------------------------|
| `npm run dev`           | Inicia el servidor de desarrollo con HMR en `localhost:5173` |
| `npm run build`         | Compila TypeScript y genera el bundle de producción          |
| `npm run preview`       | Previsualiza el bundle de producción localmente              |
| `npm run lint`          | Ejecuta ESLint sobre todos los archivos del proyecto         |
| `npm test`              | Ejecuta la suite de tests con Vitest (una sola pasada)       |
| `npm run test:watch`    | Ejecuta los tests en modo watch                              |
| `npm run test:coverage` | Genera reporte de cobertura en `coverage/`                   |

---

## 📁 Estructura del Proyecto

```
mi_portafolio_web/
├── public/
│   ├── favicon.svg                      # Favicon estilo terminal
│   └── docs/                            # Diplomas, certificados, constancias y CV (PDF/imagen)
│       ├── cv/                          # CV en PDF
│       ├── certs/                       # Certificados y diplomas
│       ├── experience/                  # Certificados de trabajo por empresa
│       └── projects/                    # Capturas de proyectos públicos
├── src/
│   ├── main.tsx                         # Entry point — monta <App> con StrictMode
│   ├── App.tsx                          # Raíz: ThemeProvider + secciones de la página
│   ├── index.css                        # Punto de entrada de estilos (@imports)
│   │
│   ├── data/                            # Interfaces + constantes co-ubicadas por sección
│   │   ├── nav.ts · hero.ts · about.ts · stack.ts
│   │   ├── services.ts                  # ServiceItem · SERVICES
│   │   ├── experience.ts · projects.ts · education.ts
│   │   ├── opensource.ts                # Repo, OpenSource · OPEN_SOURCE
│   │   ├── techLogos.ts                 # TechLogo · TECH_LOGOS (paths SVG de marca)
│   │   ├── contact.ts · cv.ts
│   │
│   ├── context/
│   │   ├── ThemeContext.ts              # Definición del contexto de tema
│   │   ├── ThemeProvider.tsx            # Persiste tema + transición circular (View Transitions)
│   │   └── useTheme.ts                  # Hook consumidor del contexto
│   │
│   ├── hooks/
│   │   ├── useScrollReveal.ts           # IntersectionObserver genérico para reveals
│   │   ├── useCountUp.ts                # Conteo animado de números al entrar en vista
│   │   ├── useScramble.ts               # Efecto decode/scramble de texto
│   │   ├── useCarousel.ts               # Estado del carrusel de imágenes
│   │   └── useSwipe.ts                  # Swipe táctil compartido entre carruseles
│   │
│   ├── components/
│   │   ├── Nav.tsx                      # Nav sticky: iconos, scroll-spy, progreso, theme toggle
│   │   ├── Footer.tsx
│   │   ├── SVGSprite.tsx                # Sprite SVG inline con los iconos de UI
│   │   │
│   │   ├── layout/
│   │   │   ├── Container.tsx            # Wrapper de ancho máximo
│   │   │   └── Section.tsx              # Wrapper de sección + fondo animado opcional
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.tsx · Chip.tsx · Icon.tsx · SectionHead.tsx
│   │   │   ├── Eyebrow.tsx              # Etiqueta mono con cursor de terminal
│   │   │   ├── Lightbox.tsx             # Modal accesible <dialog> con transición
│   │   │   ├── ScrambleText.tsx         # Texto con efecto decode
│   │   │   ├── TechLogo.tsx             # Logo de marca desde techLogos.ts
│   │   │   └── SectionBackground.tsx    # Capa de iconos/logos animados de fondo
│   │   │
│   │   └── sections/
│   │       ├── Hero/ (Hero.tsx, ApiCard.tsx)   # Aurora, título scramble, API card en streaming
│   │       ├── TechMarquee/TechMarquee.tsx     # Marquee infinito de logos del stack
│   │       ├── About/About.tsx                 # Icono de marca, datos, idiomas animados, bio
│   │       ├── Stack/Stack.tsx                 # Métricas con count-up + grid de skills
│   │       ├── Services/Services.tsx           # Tarjetas de servicios
│   │       ├── Experience/Experience.tsx       # Timeline + constancias + referencias
│   │       ├── Projects/ (Projects, ProjectLightbox, Carousel)  # Carrusel + filtro por categoría
│   │       ├── OpenSource/OpenSource.tsx       # Perfil de GitHub + repos
│   │       ├── Education/ (Education, CertLightbox)   # Grados + capacitaciones
│   │       └── Contact/Contact.tsx             # Terminal + botones + redes sociales
│   │
│   └── styles/
│       ├── base.css                     # Tokens CSS, dark mode, reset, View Transitions
│       ├── layout.css                   # Contenedor, sección, reveal
│       ├── ui/                          # button · chip · eyebrow · section-head · lightbox · carousel
│       └── sections/                    # nav · hero · marquee · section-bg · about · stack ·
│                                        # services · experience · projects · opensource ·
│                                        # education · contact · footer
│
├── index.html                           # Shell HTML — lang="es"
├── vite.config.js                       # Configuración de Vite + Vitest
├── tsconfig.json                        # Configuración TypeScript strict
├── eslint.config.js                     # Configuración ESLint flat config
└── package.json                         # Dependencias y scripts
```
---

## 📄 Licencia

Proyecto de código abierto bajo licencia **[MIT](LICENSE)** © 2026 Cesar Daniel Gutiérrez Villegas.
Puedes usar el código como referencia o base para tu propio portafolio; los documentos personales en `public/docs/` (CV, diplomas, certificados) no forman parte de la licencia.

---

## 📞 Contacto

| Campo             | Valor                                             |
|-------------------|---------------------------------------------------|
| **Desarrollador** | Cesar Daniel Gutiérrez Villegas                   |
| **Correo**        | dgutierrezvillegas@gmail.com                      |
| **Ubicación**     | Piura, Perú                                       |
| **Portafolio**    | https://daniel-gutierrez-portafolio.vercel.app    |
| **LinkedIn**      | https://linkedin.com/in/daniel-gutierrez-villegas |
| **GitHub**        | https://github.com/danielgutierrez13              |
