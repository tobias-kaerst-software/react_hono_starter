import { useCallback, useEffect, useState } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState(typeof window === 'undefined' ? 'light' : window.theme || 'light');

  const toggleTheme = useCallback(() => {
    window.document.documentElement.classList.add('disable-transitions');
    setTimeout(() => window.document.documentElement.classList.remove('disable-transitions'), 200);
    window?.setPreferredTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme]);

  useEffect(() => {
    window.onThemeChange = setTheme;
  }, []);

  return [theme, toggleTheme] as const;
};
