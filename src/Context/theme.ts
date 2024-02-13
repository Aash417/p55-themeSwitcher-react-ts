import { createContext, useContext } from 'react';

interface themeType{
	themeMode: string;
	darkTheme: () => void;
	lightTheme: () => void;
}
export const ThemeContext = createContext<themeType>({
	themeMode: 'light',
	darkTheme: () => {},
	lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
	return useContext(ThemeContext)
}
