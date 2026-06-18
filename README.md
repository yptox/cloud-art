# Cloud Art

*A series of generative studies — each piece a different window onto the emergent, the infinite, or the living.*

---

## [Crenate](crenate.html)

*A boundary that outgrows its own skin.*

![Six seeds of Crenate across six palettes](gallery.png)

Grows a single closed filament that accretes new material faster than its area can hold, and so must buckle into nested, self-avoiding folds — the same quiet mechanism that crimps the margin of a leaf, convolutes a cortex, and ruffles a sea slug. Nothing is drawn. A boundary is *grown*, and then it stops, and what remains is the fossil of that growth: a crenate-edged organism, shaded by depth and mottled by the field that fed it.

**Technique:** Differential growth via a spatial-hash force simulation in p5.js. Per-node Perlin growth accumulators, Laplacian smoothing, cohesion/repulsion springs. Seeded and fully reproducible.

**Default seed 1917** — the year D'Arcy Thompson's *On Growth and Form* argued that living shape is the work of physical forces, not drafting.

**→ [Open Crenate](crenate.html)** | [Philosophy](philosophy/crenate.md)

---

## [Vermiculate](vermiculate.html)

*Two chemicals, an eternal dance.*

The Gray-Scott reaction-diffusion model: two chemicals A and B share a medium. B autocatalyzes (feeds on A and itself), while A is continuously replenished and B is continuously removed. Out of feed rate, kill rate, and diffusion alone — no blueprint, no instruction — the field discovers its own morphology: spots, stripes, mazes, spirals, labyrinthine convolutions. Every run from a new seed produces a new spatial arrangement of the same chemical grammar.

**Technique:** WebGL 2.0 ping-pong framebuffers. Gray-Scott equations in a GLSL compute shader, evaluated at 512×512 per step. Toroidal boundary conditions allow infinite zoom and pan through the living field. Click to disturb; scroll to zoom into the pattern's own intricate sub-structure.

**Default seed 1952** — the year Alan Turing's *The Chemical Basis of Morphogenesis* predicted that pattern could arise from diffusion and reaction alone.

**→ [Open Vermiculate](vermiculate.html)** | [Philosophy](philosophy/vermiculate.md)

---

## [Abyss](abyss.html)

*z → z² + c — where does it end?*

The Mandelbrot set, rendered in GLSL with smooth iteration-count coloring and orbit-trap depth layers. Its boundary is a fractal of Hausdorff dimension 2: a curve so convoluted it occupies area while having zero area. Navigate toward any feature and it never resolves — every zoom reveals new structure at the new scale, without end, because that is what the mathematics guarantees. Click anywhere in Mandelbrot mode to open the Julia set for that parameter, exploring the infinite catalogue of Julia set shapes indexed by the Mandelbrot set itself.

**Technique:** WebGL 2.0 fragment shader with per-pixel Mandelbrot/Julia iteration, Hubbard-Douady smooth escape count, orbit-trap ring and axis-proximity layers. Cosine palette with animatable color phase. Zoom range 1× to ~10⁶×.

**→ [Open Abyss](abyss.html)** | [Philosophy](philosophy/abyss.md)

---

## Running

Open any `.html` file directly in a modern browser. No install, no server — each piece is fully self-contained. Crenate uses p5.js from a CDN; Vermiculate and Abyss require WebGL 2.0 (Chrome 56+, Firefox 51+, Safari 15+).

## Files

```
crenate.html              differential growth (p5.js)
vermiculate.html          reaction-diffusion (WebGL 2)
abyss.html                fractal zoom (WebGL 2)
philosophy/
  crenate.md              algorithmic philosophy
  vermiculate.md          algorithmic philosophy
  abyss.md                algorithmic philosophy
gallery.png               Crenate contact sheet (6 seeds × 6 palettes)
preview-seed1917.png      Crenate hero render
```
