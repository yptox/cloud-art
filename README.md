# Crenate

*A generative study in differential growth — a boundary that outgrows its own skin.*

![Six seeds of Crenate across six palettes](gallery.png)

**Crenate** grows a single closed filament that accretes new material faster than its
area can hold, and so must buckle into nested, self-avoiding folds — the same quiet
mechanism that crimps the margin of a leaf, convolutes a cortex, and ruffles a sea
slug. Nothing is drawn. A boundary is *grown*, and then it stops, and what remains is
the fossil of that growth: a crenate-edged organism, shaded by depth and mottled by the
field that fed it.

It is pure algorithmic art — every form emerges from four small forces in tension, held
on the short leash of a seed. The same seed always folds the same organism, node for
node. Change the seed and the entire morphology reorganizes into a different coast, a
different reef, a different brain.

## Open it

Open [`crenate.html`](crenate.html) in any modern browser. Nothing to install — p5.js
loads from a CDN and everything else is inline and self-contained. Watch the boundary
grow and fold in real time; when it settles it renders the finished plate.

## The controls

**Seed** — step through organisms with ‹ ›, roll the dice, or jump to a number.
(Arrow keys ← → also step seeds.)

**Form**
| Control | What it tunes |
|---|---|
| Density | how much material the organism accretes (how full it gets) |
| Filament spacing | how finely the boundary is sampled |
| Fold spacing | the gap repulsion keeps between neighbouring folds — the openness |
| Cohesion | how tightly the filament holds itself together |
| Smoothing | how graceful vs. jagged the line is |
| Growth rate | how fast new material arrives (slow = open & relaxed, fast = tight) |
| Growth bias | the *un*evenness of growth — what drives the lobes and bays |
| Lobe scale | the size of the hungry / quiet regions |
| Turbulence | brownian breath that seeds the buckling |

**Palette** — six curated palettes, or hand-tune the ground, edge, core, and line
colours. Coloring maps a dark **core** outward to a lobed **edge**, mottled by the same
field that drove the growth.

**Actions** — Regenerate, Reset to defaults, and Download a PNG of the current plate.

## Reproducibility

Seeded randomness (`randomSeed` + `noiseSeed`) drives everything, and growth advances a
fixed number of deterministic steps, so a given seed + parameters always produces the
identical organism. Share a seed; share the artwork.

## A quiet note

The default seed is **1917** — the year a certain monograph *On Growth and Form* argued
that living shape is the work of physical forces and growth differentials, not drafting.
That is the whole of this piece's philosophy, and it is felt rather than announced.
Those who know will catch it; everyone else simply gets an organism.

## Files

- [`crenate.html`](crenate.html) — the complete, self-contained interactive artwork
- [`philosophy/crenate.md`](philosophy/crenate.md) — the algorithmic philosophy / manifesto
- `gallery.png`, `preview-seed1917.png` — reference renders generated from the algorithm
