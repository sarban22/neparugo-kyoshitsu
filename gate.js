// --- Simple client-side password gate ---
// NOTE: This is NOT real security. Anyone who views this file
// can find the password below. Use this only to keep casual visitors
// out, not to protect sensitive information.
 
const GATE_PASSWORD = "2026";
const SESSION_KEY = "nepaliClassUnlocked";
 
function unlockSite() {
  document.getElementById('password-gate').style.display = 'none';
  document.getElementById('site-content').style.display = 'block';
}
 
function checkGatePassword() {
  const input = document.getElementById('gate-password').value;
  if (input === GATE_PASSWORD) {
    sessionStorage.setItem(SESSION_KEY, "1");
    unlockSite();
  } else {
    document.getElementById('gate-error').textContent = 'パスワードが違います。もう一度お試しください。';
  }
}
 
document.addEventListener('DOMContentLoaded', function () {
  const passwordInput = document.getElementById('gate-password');
 
  // Allow pressing Enter to submit
  passwordInput.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') checkGatePassword();
  });
 
  // Skip the gate if already unlocked earlier in this browser tab/session
  if (sessionStorage.getItem(SESSION_KEY) === "1") {
    unlockSite();
  }
});
 