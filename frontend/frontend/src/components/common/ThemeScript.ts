export type Theme = 'dark' | 'light';

declare global {
  interface Window {
    onThemeChange: (theme: Theme) => void;
    setPreferredTheme: (theme: Theme) => void;
    theme: Theme;
  }
}

(() => {
  window.onThemeChange = () => {};

  const setTheme = (newTheme: Theme) => {
    document.documentElement.classList.remove(window.theme);
    window.theme = newTheme;
    window.onThemeChange(newTheme);
    document.documentElement.classList.add(newTheme);
  };

  const preferredTheme = localStorage.getItem('theme') as Theme;

  window.setPreferredTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  darkQuery.addEventListener('change', (e) => {
    window.setPreferredTheme(e.matches ? 'dark' : 'light');
  });

  setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
})();
