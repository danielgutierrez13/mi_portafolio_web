import { createContext } from 'react';

export type Lang = 'es' | 'en';

export interface LangContextValue {
  readonly lang: Lang;
  readonly toggle: () => void;
}

export const LangContext = createContext<LangContextValue | null>(null);
