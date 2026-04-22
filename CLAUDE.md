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
- **Tipografía por defecto de cuerpo: `text-body-md`** — nunca `text-body-lg` para texto corriente
- Los colores los vincula automáticamente `global.css` por clase de tamaño — no añadir `text-text-X` explícito en párrafos normales
- Jerarquía completa en `apps/.claude/rules/frontend.md`

## Tablas

Cabeceras `<th>`: usar siempre `class="subsection-label text-left font-normal"` — nunca `.tag` (es un chip, no una cabecera).
Celdas `<td>`: `class="font-body text-label-xs"`.

```html
<th class="subsection-label text-left font-normal pb-3 pr-6">Columna</th>
<td class="font-body text-label-xs py-3 pr-6">Valor</td>
```

## Componentes obligatorios — usar siempre, sin excepciones

- **Títulos de sección**: `<SectionLabel label="/nombre" />` — nunca un `<h2>` custom
- **Botones y enlaces de acción**: `<Btn href="...">texto</Btn>` — nunca `<a>` con clases custom de botón
- **Puntos de lista**: `<span class="w-1 h-1 mt-2 rounded-full bg-text-4 flex-shrink-0" aria-hidden="true" />` — neutros, sin color primario

## Páginas de detalle de proyecto (work/[slug])

Patrón fijo — copiar de `src/pages/work/portfolio.astro`:
- `<main class="pt-32 pb-48 px-5 md:px-8">` — igual que `[slug].astro`
- Header: category label (`font-data text-label-sm text-primary-500`) → h1 → summary (`text-body-md`) → meta row → cover image
- Secciones internas: `<section class="pt-12 pb-12">` + `<SectionLabel>`
- Navegación entre proyectos: dos `<Btn href>` en un `<div class="pt-12 flex justify-between gap-4">`
- Sin líneas divisoras entre secciones (`border-t`, `border-b`, `divider`)

## i18n

- Español es el idioma principal y único activo
- Inglés (`/en/*`) pendiente — no implementar hasta que se indique
- Todo el contenido de secciones vive en `src/i18n/es.json`

## Infraestructura

- Repo privado: `kako-ai` (master)
- Repo público: `alejandromorenomartin-portfolio` (main) → Vercel
- Para sincronizar usar `/sync-portfolio`
