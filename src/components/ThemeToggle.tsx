import React, { useEffect, useState } from 'react';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggle = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

return (
  <button
    onClick={toggle}
    aria-label="Toggle theme"
    title="Toggle theme"
    className="p-2 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 transition-colors"
  >
    {theme === 'dark' ? (
      <img
        src="/projects/green.svg"
        alt="Light mode"
        className="w-5 h-5"
      />
    ) : (
      <img
        src="/projects/dark.svg"
        alt="Dark mode"
        className="w-5 h-5"
      />
    )}
  </button>
);

};

export default ThemeToggle;

//Light/Dark