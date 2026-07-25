// --- Font size toggle ---
// Switches between normal size and a larger size for easier reading.
// The single button's label updates to reflect the current state.
// Remembers the choice using localStorage so it persists on reload.

const FONT_SIZE_KEY = 'nepaliClassFontSize';
const LARGE_SIZE = '140%';
const NORMAL_SIZE = '100%';

function updateButtonLabel(size) {
  const btn = document.getElementById('font-toggle-btn');
  if (!btn) return;
  btn.textContent = (size === LARGE_SIZE) ? '戻す' : '文字を大きく';
}

function applyFontSize(size) {
  document.documentElement.style.fontSize = size;
  localStorage.setItem(FONT_SIZE_KEY, size);
  updateButtonLabel(size);
}

function toggleFontSize() {
  const current = localStorage.getItem(FONT_SIZE_KEY) || NORMAL_SIZE;
  applyFontSize(current === LARGE_SIZE ? NORMAL_SIZE : LARGE_SIZE);
}

document.addEventListener('DOMContentLoaded', function () {
  const saved = localStorage.getItem(FONT_SIZE_KEY) || NORMAL_SIZE;
  applyFontSize(saved);
});
