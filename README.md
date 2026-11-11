# Motor de docconversor

Copia fija de los motores que usa el [conversor de documentos](https://docconversor.alegainfo.xyz) en el navegador. Se sirven con GitHub Pages en `https://roonaiser.github.io/docconversor-motor/`.

Nada de esto procesa archivos en un servidor: el navegador de cada persona descarga estos archivos una vez y convierte sus documentos en su propio equipo.

## Qué hay

| Carpeta | Qué es | Licencia |
|---|---|---|
| `libreoffice/efaf067/` | LibreOffice compilado a WebAssembly (compilación ZetaOffice 24, build `efaf0670b4d055f838a2849becb10f08aa06a257`, del 13 de mayo de 2025). Copia exacta de `https://cdn.zetaoffice.net/zetaoffice_latest/` | MPL-2.0 y licencias de terceros de LibreOffice (ver `NOTICE.md`) |

Los binarios grandes (`*.wasm.br`, `*.data.br`) están comprimidos en brotli, igual que en el CDN original. `manifest.json` anota el tamaño abierto y la huella SHA-256 de cada archivo.

## Cómo se actualiza

Desde el repo `docconversor`:

```bash
npm run motor -- ../docconversor-motor
```

Crea una carpeta nueva con el build id, sin tocar las anteriores. Después hay que cambiar la versión en `lib/oficina/motor.ts` de docconversor.
