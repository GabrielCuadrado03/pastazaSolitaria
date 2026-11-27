# Unidos por la Esperanza · Pastaza Solidaria

Sitio informativo de solidaridad, desarrollado con Astro, TypeScript y CSS. No procesa pagos ni registra donaciones.

## Desarrollo
Requiere Node.js 22.12+.
```sh
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## Ramas y despliegue
- dev: desarrollo y revisión.
- main: producción, únicamente después de aprobación.
- Vercel: importar el repositorio, seleccionar Astro, Node 22, build `npm run build`, output `dist`, rama de producción `main`.
- El sitio incluye noindex mientras no se configure PUBLIC_CAMPAIGN_LIVE=true. Noindex no es un control de acceso. Un preview o repositorio público es accesible para terceros.

## Contenido y autorización
- `src/data/campaign.ts`: cifras provisionales, fuentes, actividades y casos.
- `src/components/ChildCard.astro`: tarjetas de apoyo.
- `public/images/`: únicamente fotografías originales autorizadas, sin metadatos personales innecesarios. No subir afiches con cuentas ni imágenes identificables sin consentimiento.
- Antes de activar un caso: confirmar consentimiento del representante, nombre/foto autorizados, titularidad, tipo y vigencia de la cuenta, y autorización de su titular. No almacenar datos privados no aprobados en Git.
- Verificar cifras, fuentes, eventos y responsable de contacto antes de lanzamiento. El logo institucional y la ilustración conmemorativa requieren autorización de uso.
- No se publican montos recaudados ni se centralizan fondos. El apoyo, cuando se habilite, será directo a las familias.

Estado inicial: prototipo público sin datos identificables ni cuentas reales. Bingo pendiente de confirmación; rifa no habilitada sin verificación.
