import { createContext } from "react";

export interface ILanguageContext {
  language: "tr" | "en";
  setLanguage: (language: "tr" | "en") => void;
}

export const LanguageContext = createContext<ILanguageContext | undefined>(
  undefined
);
