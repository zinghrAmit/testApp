import React, { createContext, useState, useEffect, useContext } from 'react';
import { Appearance, useColorScheme } from 'react-native';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const colorScheme = useColorScheme(); // Detect system theme
    const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');

    useEffect(() => {
        const listener = (preferences) => {
            setIsDarkMode(preferences.colorScheme === 'dark');
        };
        
        const subscription = Appearance.addChangeListener(listener);

        return () => subscription.remove(); // Remove the listener properly
    }, []);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
