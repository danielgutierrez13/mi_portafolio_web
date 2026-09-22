import { createContext } from 'react';

export interface ThemeContextValue {
  readonly isDark: boolean;
  readonly toggle: (origin?: { x: number; y: number }) => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);
