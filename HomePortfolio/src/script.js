const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.1
});

reveals.forEach(reveal => {
  observer.observe(reveal);
});
const toggle = document.getElementById('toggleTheme');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');

  // Salvar no localStorage
  if (document.body.classList.contains('light-mode')) {
    localStorage.setItem('theme', 'light');
    toggle.textContent = '🌙 Alternar Tema';
  } else {
    localStorage.setItem('theme', 'dark');
    toggle.textContent = '☀️ Alternar Tema';
  }
});

// Carregar preferencia salva
window.onload = () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'light') {
    document.body.classList.add('light-mode');
    toggle.textContent = '🌙 Alternar Tema';
  }
};