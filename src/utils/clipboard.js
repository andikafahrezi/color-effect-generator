// src/utils/clipboard.js
// Helper untuk copy to clipboard

/**
 * Copy text ke clipboard
 * @param {string} text - teks yang mau dicopy
 * @param {function} onSuccess - callback saat berhasil
 */
export function copyToClipboard(text, onSuccess) {
  navigator.clipboard.writeText(text).then(() => {
    if (onSuccess) onSuccess();
  });
}   