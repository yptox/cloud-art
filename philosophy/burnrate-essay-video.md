# How do you create an image that burns?

*Essay-video script — the making-of is half the artwork. Target 6–8 minutes.
Screen-capture driven: code, shader iterations, failed takes. Voice: quiet,
technical, first person.*

---

## 1. Cold open (0:00)

Screen recording, no narration: the finished piece. One lush image. A scroll.
The ignition. Hold the silence until the first ember lifts.

VO: "This image cost about three watt-hours to make. The question I couldn't
stop asking was — where did they go?"

Title card: **How do you create an image that burns?**

## 2. Fire is not a video effect (0:40)

The naive versions, shown failing: a dissolve (too clean), an alpha wipe
(too flat), stock fire footage composited over (immediately fake — fire that
ignores the image it consumes).

VO: "Real burning is a boundary phenomenon. Paper doesn't fade — it is
*eaten*, from the edge, along a front. So the fire has to be geometry,
not decoration."

## 3. The signed distance (1:40)

Screen: the shader, live-edited. Visualize the rectangle's edge SDF as a
grayscale field. Then erode it: subtract a growing front. The image
disappears in a clean, dead, rectangular ring — wrong, but wrong in an
instructive way.

VO: "Every pixel knows how far it is from the edge of the image. The burn
is just a number sweeping through that field. But a perfect ring is a
machine's fire. Real fire wanders."

## 4. The noise-advected mask (2:40)

Add fractal noise to the field; animate its advection slowly downward like
rising heat mirrored. The front goes ragged, organic. Show the same burn
with the mask amplitude at 0 / 0.25 / 0.5 — the moment it starts looking
*found* rather than made.

VO: "You displace the distance field with turbulence that drifts, and the
front stops being a shape and becomes a behavior."

## 5. Anatomy of the front (3:40)

Freeze one frame, annotate zones on-screen like a diagram:
preheat (emissive cracks glowing through the intact surface) → white-hot
rim (a blackbody ramp: dull red, orange, white) → char band (the image's
own luminance crushed to soot, cracked, ember veins) → crumble (alpha
eaten with high-frequency noise) → gone. Then the two layers that sell it:
heat-haze refraction bending the pristine image beneath, and ember
particles lifting off the front on their own updraft.

VO: "Six cheap tricks. Together they add up to the one expensive thing:
plausibility."

## 6. The part that isn't a trick (4:40)

Cut away from shaders. The cost model on screen: the Luccioni/Jernite/
Strubell table, the Li et al. water intensities, the manifest JSON with its
per-image watt-hours and data-center coordinates.

VO: "The fire is simulated. The cost is not. Every image in the batch
carries an estimate scaled from published measurements — energy, water,
GPU-seconds, and the coordinates of the building that paid. Estimates,
because providers don't publish per-query figures. The vagueness isn't a
flaw in the piece. The vagueness *is* the piece."

## 7. The gesture (5:40)

Phone in hand, filmed over the shoulder. Thumb scrolls; image ignites;
ledger ticks. Slow.

VO: "I wired the burn to the scroll because the scroll is the cheapest
gesture a body can make. Beauty and expenditure, one motion. The only
ethical act available inside the work is refusing to scroll — and I built
it, with everything platforms have taught us, so that you won't."

## 8. Receipt (6:30)

The browser tab close-up: `BURNRATE ⌘ 48.5 Wh · 127 mL · 12 img`.
The tab closes. Black.

VO: "The feed never ends. Closing it is the only exit — and the title bar
keeps the receipt."

End card: URL. No music sting. Room tone.
