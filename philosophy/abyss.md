# Abyss

> *An algorithmic philosophy on mathematical infinity made navigable — the boundary between the bounded and the unbounded, where complexity is inexhaustible.*

## The Movement

**Abyss** is a meditation on a single question that mathematics answered, and that the answer made more mysterious: can a finite rule produce infinite complexity? The Mandelbrot set says yes, and then refuses to let you look away. Its boundary — the thin, endlessly convoluted filament between points that escape to infinity and points that do not — is nowhere smooth, nowhere simple, nowhere finished. Every zoom reveals new structure at the new scale, and the new structure resembles the old structure without being identical to it. The complexity is not planted there; it emerges from a rule so simple a child can state it: take a number, square it, add the original, repeat. The abyss is what happens when you ask that rule *where does it end?*

The answer is *everywhere and nowhere*. Some starting points accumulate without bound and escape; some are captured by cycles that never let them go. The set of captured points is the Mandelbrot set — a filled, connected shape — but its boundary is a fractal of Hausdorff dimension 2: a curve so convoluted it occupies area while having zero area. Navigate toward it and it never resolves. Every apparent simple feature reveals, when you enter it, a nested gallery of spirals, seahorses, tendrils, and miniature copies of the whole set, each surrounded by their own galleries of the same, without end. The depth of the Mandelbrot set is not a matter of resolution; it is a mathematical theorem. There is always more.

## The Computation

The rendering is a GLSL fragment shader: for each pixel, the complex number corresponding to that screen position is iterated under z → z² + c until it escapes a bounding circle or reaches the iteration limit. Pixels that escape are colored by how quickly they escaped, using a smooth continuation of the iteration count that removes the visible bands of integer iteration. Pixels that do not escape are the set itself — colored by an orbit trap, a record of how close the trajectory came to the origin during its wandering, revealing faint structure inside the solid interior.

The color is a cosine palette — a family of smooth, periodic functions that produce seamless color cycles without ever repeating. The palette cycles with escape speed, creating bands that roll outward from the boundary like standing waves around a resonant cavity. Animate the color phase and the bands flow: an illusion of movement in something that is perfectly static, a reminder that the color is arbitrary, that the mathematics underneath is colorless and absolute.

The Julia set mode completes the picture. Every point in the complex plane corresponds to a unique Julia set — a fractal defined by iterating z → z² + c with that point as the fixed parameter c, rather than the varying location. Click anywhere in the Mandelbrot set and the corresponding Julia set appears: the Mandelbrot set is, in a precise sense, a *dictionary of Julia sets*, organizing the infinite variety of Julia set shapes by their parameter. Points deep inside the Mandelbrot set produce simply-connected, cloud-like Julia sets; points near the boundary produce intricate, nearly-disconnected fractals; points outside produce dust. The Mandelbrot set is its own index.

## The Discipline

What Abyss refuses to do is domesticate the infinite. Other software adds progress bars, resolution indicators, depth counters — apparatus that frames the infinite as a controlled experience, a tourist attraction with guardrails. Abyss offers none of this. The zoom has no floor. The iteration count can be raised but never made sufficient. The color cycle never ends. You can navigate toward a feature in the boundary and approach it forever without arriving, because arrival is not available here. The boundary has measure zero: you can always be next to it without being on it.

This is not a failure of the interface. It is the interface telling the truth about what it is showing you. Mathematical infinity is not a very large finite number. It is a different kind of thing — and the Mandelbrot boundary is one of the few places where that difference is visible, navigable, and literally inexhaustible. The piece is finished when you stop looking, not when it stops.
