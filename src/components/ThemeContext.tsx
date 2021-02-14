import React, { createContext, useEffect, useMemo, useState } from 'react';

type Theme = 'dark' | 'light';

interface ContextValue {
  theme: Theme | null;
  setTheme: (theme: Theme) => void;
}

const defaultValue: ContextValue = {
  theme: null,
  setTheme: () => {},
};

export const ThemeContext = createContext<ContextValue>(defaultValue);

export const ThemeProvider: React.FC = ({ children }) => {
  const [_theme, _setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    try {
      if (document.documentElement.classList.contains('dark')) {
        _setTheme('dark');
      } else {
        _setTheme('light');
      }
    } catch {}
  }, []);

  const contextValue = useMemo(() => {
    const setTheme = (theme: Theme) => {
      _setTheme(theme);

      if (_theme === 'dark') {
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
      }

      try {
        localStorage.setItem('theme', theme);
      } catch {}
    };

    return {
      theme: _theme,
      setTheme,
    };
  }, [_theme, _setTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
