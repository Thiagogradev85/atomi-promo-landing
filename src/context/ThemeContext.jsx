import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [variant, setVariant] = useState('orange');
  const toggle = () => setVariant(v => (v === 'orange' ? 'gold' : 'orange'));
  return (
    <ThemeContext.Provider value={{ variant, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
