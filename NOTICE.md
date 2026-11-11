# Avisos de licencia

## LibreOffice (carpeta `libreoffice/`)

Los archivos `soffice.*` son una compilación sin modificar de LibreOffice para WebAssembly, hecha por allotropia / Collabora con el nombre ZetaOffice y distribuida en su CDN público (`https://cdn.zetaoffice.net/zetaoffice_latest/`). ZetaOffice es software libre basado en LibreOffice.

- Licencia principal: **Mozilla Public License 2.0** — https://www.mozilla.org/MPL/2.0/
- Partes del código vienen de Apache OpenOffice con licencia Apache 2.0, y LibreOffice incluye bibliotecas de terceros con sus propias licencias (LGPL, MIT, BSD y otras). La lista completa está en https://www.libreoffice.org/about-us/licenses/
- **Código fuente:** LibreOffice core en el commit `efaf0670b4d055f838a2849becb10f08aa06a257` (https://git.libreoffice.org/core y su espejo https://github.com/LibreOffice/core). Las instrucciones para compilarlo a WebAssembly están en `static/README.wasm.md` de ese mismo repositorio.
- Fuentes incluidas: Carlito y Liberation (SIL Open Font License 1.1), Caladea (Apache 2.0), DejaVu (licencia libre de Bitstream Vera), Noto (SIL OFL 1.1), entre otras.

LibreOffice es una marca registrada de The Document Foundation. Este repositorio no está afiliado a The Document Foundation, allotropia ni Collabora.
