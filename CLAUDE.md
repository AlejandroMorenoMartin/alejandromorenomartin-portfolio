# portfolio — Instrucciones para Claude

Stack: Astro 4 + TypeScript + Tailwind CSS v3 + Roboto Mono + Press Start 2P

## Estructura de componentes

```
src/
  components/
    Nav.astro          ← navegación fija top
    Footer.astro       ← footer con fecha ISO + hora Madrid
    sections/
      Hero.astro       ← bio + thinking widget + nav de secciones
      Work.astro       ← proyectos (carousel)
      About.astro      ← quién soy
      Craft.astro      ← stack tecnológico
      Experience.astro ← trayectoria laboral (timeline)
      Education.astro  ← formación + certificaciones (tabs)
  pages/
    index.astro        ← /
    proyectos.astro    ← /proyectos
    sobre-mi.astro     ← /sobre-mi
    trayectoria.astro  ← /trayectoria
  styles/
    global.css         ← tokens de diseño, layout base, utilities
  i18n/
    es.json            ← contenido en español (idioma principal)
    en.json            ← contenido en inglés (pendiente implementar)
```

## Reglas de layout

- `main { padding: 6rem 0 }` — el doble de h-12 (nav/footer = 3rem)
- `.section-padding { @apply px-8 pt-12 pb-16; }` — padding estándar de sección
- Estructura de sección: `<section class="section-padding"> <div class="container-wide">`
- Títulos de página: `<div class="px-8 pb-0"> <div class="container-wide"> <h1 ...>`
- **Nunca** usar `h-full`, `flex-1` ni `justify-center` en secciones
- Contenido siempre fluye top-left en document order

## Tipografía y color

- Nav y footer: `text-body-md text-text-5` sin excepciones
- Títulos de página: `text-display-md text-text-2 uppercase`
- Jerarquía completa en `apps/.claude/rules/frontend.md`

## i18n

- Español es el idioma principal y único activo
- Inglés (`/en/*`) pendiente — no implementar hasta que se indique
- Todo el contenido de secciones vive en `src/i18n/es.json`

## Infraestructura

- Repo privado: `kako-ai` (master)
- Repo público: `alejandromorenomartin-portfolio` (main) → Vercel
- Para sincronizar usar `/sync-portfolio`
