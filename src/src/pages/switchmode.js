
import React, { useState } from 'react';
import './switchmode.css'; // Import your stylesheet

function Switchmode() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('dark-theme', !isDarkTheme);
  };

  return (
    <div className={`theme-container ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <label className="switch" htmlFor="themeToggle">
      <input id="themeToggle" data-testid="themeToggle" type="checkbox" defaultChecked={isDarkTheme} onChange={toggleTheme} />
        <span className="slider round"></span>
        
      </label>
      {/* Other components or content go here */}
    </div>
  );
}

export default Switchmode;
