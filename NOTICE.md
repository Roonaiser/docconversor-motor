# Avisos de licencia

## LibreOffice (carpeta `libreoffice/`)

Los archivos `soffice.*` son una compilación sin modificar de LibreOffice para WebAssembly, hecha por allotropia / Collabora con el nombre ZetaOffice y distribuida en su CDN público (`https://cdn.zetaoffice.net/zetaoffice_latest/`). ZetaOffice es software libre basado en LibreOffice.

- Licencia principal: **Mozilla Public License 2.0** — https://www.mozilla.org/MPL/2.0/
- Partes del código vienen de Apache OpenOffice con licencia Apache 2.0, y LibreOffice incluye bibliotecas de terceros con sus propias licencias (LGPL, MIT, BSD y otras). La lista completa está en https://www.libreoffice.org/about-us/licenses/
- **Código fuente:** LibreOffice core en el commit `efaf0670b4d055f838a2849becb10f08aa06a257` (https://git.libreoffice.org/core y su espejo https://github.com/LibreOffice/core). Las instrucciones para compilarlo a WebAssembly están en `static/README.wasm.md` de ese mismo repositorio. Las ramas exactas que usa ZetaOffice están en https://git.libreoffice.org/core/+/refs/heads/distro/allotropia/zeta-24-2, https://github.com/allotropia/emscripten/commits/fixed-3.1.65, https://github.com/allotropia/qt5/tree/5.15.2%2Bwasm y https://github.com/allotropia/qtbase/tree/5.15.2%2Bwasm.
- Fuentes incluidas: Carlito y Liberation (SIL Open Font License 1.1), Caladea (Apache 2.0), DejaVu (licencia libre de Bitstream Vera), Noto (SIL OFL 1.1), entre otras.

## pandoc (carpeta `pandoc/`)

- `pandoc.wasm.br` es el binario oficial de pandoc 3.10 para WebAssembly (comprimido en brotli), tal como viene en el paquete npm `pandoc-wasm` 1.1.0.
- `pandoc-worker.js` es un worker que lo ejecuta; incluye `core.js` de pandoc-wasm y `@bjorn3/browser_wasi_shim` (MIT o Apache-2.0).
- Licencia: **GNU General Public License, versión 2 o posterior** — https://www.gnu.org/licenses/old-licenses/gpl-2.0.html
- **Código fuente:** https://github.com/jgm/pandoc (etiqueta 3.10) y https://github.com/pandoc/pandoc-wasm. El código del worker está en este repo sin minificar en https://github.com/Roonaiser/docconversor-motor/blob/main/pandoc/fuente-worker.js.

LibreOffice es una marca registrada de The Document Foundation. Este repositorio no está afiliado a The Document Foundation, allotropia ni Collabora.
