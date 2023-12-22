import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import ThemedContext from './ThemedContext';

const ThemedComponent = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemedContext />
    </ThemeContext.Provider>
  );
};

export default ThemedComponent;