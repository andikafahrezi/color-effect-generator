// src/utils/colorMath.js
// Fungsi-fungsi untuk konversi warna dan operasi math

/**
 * Convert HEX to HSL
 * Input: "#3b82f6"
 * Output: [217, 91, 60] → [hue, saturation, lightness]
 */
export function hexToHsl(hex) {
  let r = parseInt(hex.slice(1, 3), 16) / 255;
  let g = parseInt(hex.slice(3, 5), 16) / 255;
  let b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s;
  let l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        h = 0;
    }
    h /= 6;
  }

  return [h * 360, s * 100, l * 100];
}

/**
 * Convert HSL to HEX
 * Input: hue(0-360), saturation(0-100), lightness(0-100)
 * Output: "#rrggbb"
 */
export function hslToHex(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;
  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return (
    "#" +
    [r, g, b]
      .map((x) => Math.round(x * 255).toString(16).padStart(2, "0"))
      .join("")
  );
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

/**
 * Convert HEX to RGB array
 * Input: "#3b82f6"
 * Output: [59, 130, 246]
 */
export function hexToRgb(hex) {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ];
}

/**
 * Convert RGB to HEX
 * Input: 59, 130, 246
 * Output: "#3b82f6"
 */
export function rgbToHex(r, g, b) {
  return (
    "#" +
    [r, g, b]
      .map((x) => Math.round(x).toString(16).padStart(2, "0"))
      .join("")
  );
}

/**
 * Linear interpolation (lerp) dua warna
 * Digunakan untuk membuat gradient stops
 * Input: "#6366f1", "#ec4899", 0.5
 * Output: warna di tengah antara dua warna
 */
export function lerpHex(hexA, hexB, t) {
  const ra = hexToRgb(hexA);
  const rb = hexToRgb(hexB);
  return rgbToHex(
    ra[0] + (rb[0] - ra[0]) * t,
    ra[1] + (rb[1] - ra[1]) * t,
    ra[2] + (rb[2] - ra[2]) * t
  );
}

/**
 * Validasi & normalize hex color
 * Input bisa: "#3b82f6", "3b82f6", "#3BF", "3BF"
 * Output: "#3b82f6" (lowercase, 6 digit) atau null kalau invalid
 */
export function validateHex(v) {
  if (!v) return null;
  if (!v.startsWith("#")) v = "#" + v;
  if (/^#[0-9a-fA-F]{6}$/.test(v)) return v.toLowerCase();
  // expand 3-digit shorthand
  if (/^#[0-9a-fA-F]{3}$/.test(v)) {
    const c = v.slice(1);
    return "#" + c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
  }
  return null;
}