# Stack — apps/portfolio

## Astro 4
**Qué es:** Framework web orientado a contenido que genera HTML estático por defecto.
**Uso aquí:** Framework principal del portfolio. Genera páginas estáticas ultraligeras. Cada sección (Hero, About, Work, etc.) es un componente `.astro`.

## TypeScript
**Qué es:** Superset tipado de JavaScript.
**Uso aquí:** Tipado de datos (proyectos, experiencia, traducciones i18n) y configuración del proyecto. Modo strict activado.

## Tailwind CSS
**Qué es:** Framework de utilidades CSS.
**Uso aquí:** Todo el estilado del portfolio. Configurado para consumir los tokens del design system (`@kako-ai/design-system`). Sin estilos custom salvo lo que Tailwind no puede expresar.

## @kako-ai/design-system
**Qué es:** Paquete interno de kako-ai con tokens de diseño.
**Uso aquí:** Fuente única de verdad para colores (oro #E4A711), tipografía (Poppins/Roboto), spacing, sombras y motion. El `tailwind.config.ts` del portfolio extiende este paquete.

## @astrojs/sitemap
**Qué es:** Plugin oficial de Astro para generar sitemaps.
**Uso aquí:** Genera `/sitemap-index.xml` automáticamente en cada build, incluyendo las rutas en ES y EN para SEO.

## @vercel/analytics
**Qué es:** Analytics ligero de Vercel sin cookies.
**Uso aquí:** Mide visitas y páginas más vistas del portfolio sin impacto en rendimiento ni necesidad de banner de cookies.

## Vercel
**Qué es:** Plataforma de deploy para frontends.
**Uso aquí:** Hosting del portfolio. Deploy automático en cada push a `master`. Dominio: `alejandromorenomartin.com`.
