import React, { useState } from 'react';

export const useLightMode = () => {
    const [ theme, setTheme] = useState('light');

    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }
    return [theme, toggleTheme];
}