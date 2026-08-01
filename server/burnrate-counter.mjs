#!/usr/bin/env node
/*
  BURNRATE global counter — the lightweight backend. One planetary ledger:
  every viewer's burn accumulates here and never resets.

  GET  /api/burnrate         -> {wh, ml, gpu, img}
  POST /api/burnrate {delta} -> merged totals (deltas clamped to sane bounds)

  State persists to burnrate-total.json beside this file. No dependencies.
  Run: node server/burnrate-counter.mjs      (PORT env var, default 8787)

  The artwork looks for the endpoint at same-origin /api/burnrate, or at
  ?api=<url> / window.BURNRATE_ENDPOINT. Behind nginx on the Optiplex:
    location /api/burnrate { proxy_pass http://127.0.0.1:8787; }
*/
import http from 'node:http';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const FILE = fileURLToPath(new URL('./burnrate-total.json', import.meta.url));
const KEYS = ['wh', 'ml', 'gpu', 'img'];
const MAX_DELTA = { wh: 50, ml: 500, gpu: 120, img: 5 };   // per-post sanity clamp

let total = { wh: 0, ml: 0, gpu: 0, img: 0 };
try { total = { ...total, ...JSON.parse(readFileSync(FILE, 'utf8')) }; } catch {}

let dirty = false;
setInterval(() => {
  if (!dirty) return;
  dirty = false;
  try { writeFileSync(FILE, JSON.stringify(total)); } catch {}
}, 2000).unref?.();

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'content-type');
  if (req.method === 'OPTIONS') { res.writeHead(204); return res.end(); }

  const url = req.url.split('?')[0];
  if (url !== '/api/burnrate' && url !== '/') { res.writeHead(404); return res.end(); }

  if (req.method === 'GET') {
    res.setHeader('content-type', 'application/json');
    return res.end(JSON.stringify(total));
  }
  if (req.method === 'POST') {
    let body = '';
    req.on('data', c => { body += c; if (body.length > 1024) req.destroy(); });
    req.on('end', () => {
      try {
        const d = JSON.parse(body);
        for (const k of KEYS) {
          const v = Number(d[k]);
          if (Number.isFinite(v) && v > 0) total[k] += Math.min(v, MAX_DELTA[k]);
        }
        dirty = true;
        res.setHeader('content-type', 'application/json');
        res.end(JSON.stringify(total));
      } catch {
        res.writeHead(400); res.end();
      }
    });
    return;
  }
  res.writeHead(405); res.end();
});

const port = Number(process.env.PORT) || 8787;
server.listen(port, () => console.log(`burnrate counter on :${port} — total`, total));
