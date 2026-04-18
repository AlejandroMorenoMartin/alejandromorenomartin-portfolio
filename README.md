# alejandro-portfolio

Sitio web personal — `https://alejandromorenomartin.com`

---

## Desarrollo local

```bash
# Desde la raíz del monorepo
cd C:/kako_asus/kako-ai
pnpm --filter=alejandromorenomartin-portfolio dev
```

Abre `http://localhost:4321`. Hot reload activo.
Para pararlo: `Ctrl + C`

```bash
# Build y preview local
pnpm --filter=@kako-ai/portfolio build
pnpm --filter=@kako-ai/portfolio preview
```

---

## Deploy a producción

1. Commitea los cambios en el monorepo
   ```bash
   git add <archivos>
   git commit -m "feat: descripción"
   git push origin master
   ```

2. Sincroniza al repo público (dispara Vercel)
   ```bash
   git subtree push --prefix=apps/portfolio https://github.com/AlejandroMorenoMartin/alejandromorenomartin-portfolio.git main
   ```
   > Desde Claude Code: `/sync-portfolio`

3. Vercel despliega automáticamente en `alejandromorenomartin.com`

**Si el push es rechazado:** nunca editar el repo público directamente — siempre editar aquí y sincronizar.

---

## Versión

La versión en `package.json` se actualiza manualmente antes de cada push relevante.
