import './style.css';

const themeToggle = document.querySelector<HTMLButtonElement>('#theme-toggle');

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

const setTheme = (theme: 'light' | 'dark') => {
  document.documentElement.classList.toggle('dark', theme === 'dark');

  themeToggle?.setAttribute(
    'aria-label',
    theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
  );
};

const initialTheme = getInitialTheme();

setTheme(initialTheme);

themeToggle?.addEventListener('click', () => {
  const isDark = document.documentElement.classList.contains('dark');
  const nextTheme = isDark ? 'light' : 'dark';

  localStorage.setItem('theme', nextTheme);
  setTheme(nextTheme);
});
