// Worker de pandoc (se empaqueta con esbuild en scripts/motor.mts y se sirve desde docconversor-motor).
// Corre pandoc como un programa aparte: recibe archivos por mensajes y devuelve los convertidos.
// pandoc y pandoc-wasm tienen licencia GPL-2.0 o posterior; este worker se distribuye con ellos.

import { createPandocInstance } from "../node_modules/pandoc-wasm/src/core.js";

let pandoc = null;

self.onmessage = async (ev) => {
  const m = ev.data;
  try {
    if (m.tipo === "iniciar") {
      pandoc = await createPandocInstance(m.wasm);
      postMessage({ tipo: "listo" });
      return;
    }
    if (m.tipo !== "convertir") return;
    const entrada = {};
    for (const [nombre, bytes] of Object.entries(m.archivos)) entrada[nombre] = new Blob([bytes]);
    const r = await pandoc.convert(m.opciones, m.stdin ?? null, entrada);
    const archivos = {};
    for (const [nombre, blob] of Object.entries(r.files)) {
      if (nombre in m.archivos) continue;
      archivos[nombre] = new Uint8Array(await blob.arrayBuffer());
    }
    postMessage({ tipo: "hecho", id: m.id, stdout: r.stdout, stderr: r.stderr, avisos: r.warnings, archivos });
  } catch (e) {
    postMessage({ tipo: "hecho", id: m.id, error: String(e?.message ?? e) });
  }
};
