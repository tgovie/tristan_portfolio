/**
 * Deterministic pseudo-random data for the decorative charts.
 * Seeded so server and client render identical markup (no hydration mismatch).
 */

export function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Random walk with optional per-step volatility profile. */
export function randomWalk(seed: number, length: number, drift = 0, vol = 1, volProfile?: (i: number) => number) {
  const rand = mulberry32(seed);
  const out: number[] = [];
  let v = 0;
  for (let i = 0; i < length; i++) {
    const scale = volProfile ? volProfile(i / length) : 1;
    v += drift + (rand() - 0.5) * 2 * vol * scale;
    out.push(v);
  }
  return out;
}

/** U-shaped intraday volume profile (busy open and close, quiet midday). */
export function volumeProfile(seed: number, length: number) {
  const rand = mulberry32(seed);
  return Array.from({ length }, (_, i) => {
    const x = i / (length - 1);
    const u = 0.28 + 1.5 * Math.pow(x - 0.5, 2) * 2.6 + (x < 0.08 ? 0.6 * (1 - x / 0.08) : 0) + (x > 0.93 ? 0.5 * ((x - 0.93) / 0.07) : 0);
    return Math.max(0.08, u * (0.82 + rand() * 0.36));
  });
}

/** Convert a series to an SVG path within a width × height box. */
export function toPath(values: number[], width: number, height: number, pad = 2) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const step = width / (values.length - 1);
  return values
    .map((v, i) => {
      const x = i * step;
      const y = pad + (1 - (v - min) / range) * (height - pad * 2);
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
}
