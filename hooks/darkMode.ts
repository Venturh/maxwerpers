import { useEffect, useState } from 'react';

import Cookies from 'universal-cookie';
const cookie = new Cookies();
export const DARK_MODE_COOKIE = 'dark_mode';
export const DEFAULT_THEME = 'dark';

export function useDarkMode() {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  useEffect(() => {
    if (cookie.get(DARK_MODE_COOKIE)) {
      setTheme(cookie.get(DARK_MODE_COOKIE)!);
    }
  });

  const toggleTheme = () => {
    const { classList } = document.querySelector('html');
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.cookie = `${DARK_MODE_COOKIE}=${nextTheme};SameSite=None; Secure;`;
    if (nextTheme === 'dark') {
      classList.add('dark');
      classList.remove('light');
    } else {
      classList.add('light');
      classList.remove('dark');
    }
  };
  return { theme, toggleTheme };
}
