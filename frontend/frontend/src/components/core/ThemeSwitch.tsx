import { Switch } from '$/components/ui/switch';
import { useTheme } from '$/hooks/useTheme';

export const ThemeSwitch = () => {
  const [theme, toggleTheme] = useTheme();
  return <Switch checked={theme === 'light'} onCheckedChange={toggleTheme} />;
};
