#!/usr/bin/env node
/*
  BURNRATE batch pipeline — pre-generates the feed's image batch plus a
  per-image metadata manifest (model class, inference time, estimated Wh,
  water draw, data-center site), so the artwork ships as the specified
  architecture: pre-generated imagery + cited cost metadata.

  The generator drives burnrate.html's #gen harness in headless Chromium,
  so the batch is pixel-identical to what the live-synthesis fallback
  would produce for the same seed index — one deterministic feed.

  Usage:
    node scripts/generate-batch.mjs [count] [width] [height] [quality]
  Defaults: 240 images, 832×1216, JPEG q0.72, written to batch/.

  Requires: npm i playwright  (plus a Chromium; PLAYWRIGHT_BROWSERS_PATH
  or executablePath via CHROMIUM env var are honored).
*/
import { chromium } from 'playwright';
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here    = dirname(fileURLToPath(import.meta.url));
const root    = join(here, '..');
const outDir  = join(root, 'batch');
const count   = parseInt(process.argv[2] || '240', 10);
const width   = parseInt(process.argv[3] || '832', 10);
const height  = parseInt(process.argv[4] || '1216', 10);
const quality = parseFloat(process.argv[5] || '0.72');

mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM || undefined,
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader',
         '--disable-gpu-sandbox', '--no-sandbox'],
});
const page = await browser.newPage({ viewport: { width: 320, height: 240 } });
page.on('pageerror', e => { console.error('page error:', e.message); process.exitCode = 1; });

await page.goto('file://' + join(root, 'burnrate.html') + '#gen');
await page.waitForFunction(() => !!window.__burnrateGen);

const images = [];
let bytes = 0;
for (let i = 0; i < count; i++) {
  const { dataURL, meta } = await page.evaluate(([i, w, h, q]) => ({
    dataURL: window.__burnrateGen.render(i, w, h, q),
    meta:    window.__burnrateGen.meta(i),
  }), [i, width, height, quality]);
  const file = `img-${String(i).padStart(4, '0')}.jpg`;
  const buf = Buffer.from(dataURL.split(',')[1], 'base64');
  writeFileSync(join(outDir, file), buf);
  bytes += buf.length;
  images.push({ file, res: `${width}x${height}`, ...meta });
  if ((i + 1) % 20 === 0)
    console.log(`${i + 1}/${count}  (${(bytes / 1048576).toFixed(1)} MB)`);
}

const manifest = {
  work: 'BURNRATE',
  generated: new Date().toISOString(),
  count: images.length,
  note: 'Per-image cost figures are estimates scaled from published per-query '
      + 'measurements: energy from Luccioni, Jernite & Strubell, "Power Hungry '
      + 'Processing" (2023, ~2.9 Wh mean per generated image); water from Li, '
      + 'Yang, Islam & Ren, "Making AI Less Thirsty" (2023, 1.8-12 L/kWh by '
      + 'site). Coordinates are published hyperscale data-center locations. '
      + 'Providers do not disclose per-query figures; estimation is the point.',
  units: { wh: 'watt-hours', ml: 'millilitres of freshwater',
           gpu: 'GPU-seconds', infer: 'inference wall-clock seconds' },
  images,
};
writeFileSync(join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 1));
console.log(`done: ${images.length} images, ${(bytes / 1048576).toFixed(1)} MB + manifest.json`);
await browser.close();
