import { useTheme } from '$/components/common/theme/ThemeProvider';
import { Switch } from '$/components/ui/switch';

export const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  return <Switch checked={theme === 'light'} onCheckedChange={toggleTheme} />;
};
