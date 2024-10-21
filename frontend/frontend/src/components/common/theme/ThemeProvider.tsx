import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { Theme } from '$/components/common/theme/ThemeScript';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(typeof window === 'undefined' ? 'light' : window.theme || 'light');

  const toggleTheme = useCallback(() => {
    window.document.documentElement.classList.add('disable-transitions');
    setTimeout(() => window.document.documentElement.classList.remove('disable-transitions'), 200);
    const newTheme = theme === 'light' ? 'dark' : 'light';
    window.setPreferredTheme(newTheme);
    setTheme(newTheme);
  }, [theme]);

  useEffect(() => {
    window.onThemeChange = setTheme;

    return () => {
      window.onThemeChange = () => {};
    };
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
