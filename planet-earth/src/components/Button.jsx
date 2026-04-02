import React, { useState, useEffect } from 'react';

export default function ActionControls() {
  // We start with a default, but useEffect will sync it with the "Save File"
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState('EN');

  // 1. SYNC ON LOAD: This runs once when you change pages
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const savedLang = localStorage.getItem('lang') || 'EN';

    setIsDark(savedTheme === 'dark');
    setLang(savedLang);

    // Apply the saved theme to the HTML tag immediately
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Tell Astro components which language to show
    window.dispatchEvent(new CustomEvent('langChange', { detail: savedLang }));
  }, []);

  // 2. TOGGLE THEME: Save to localStorage so it persists
  const toggleTheme = () => {
    const newTheme = !isDark ? 'dark' : 'light';
    setIsDark(!isDark);
    
    // Update the HTML attribute (this triggers your CSS variables)
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Save the choice
    localStorage.setItem('theme', newTheme);
  };

  // 3. TOGGLE LANGUAGE: Save to localStorage
  const toggleLang = (selectedLang) => {
    setLang(selectedLang);
    localStorage.setItem('lang', selectedLang);
    
    window.dispatchEvent(new CustomEvent('langChange', { detail: selectedLang }));
  };

  return (
    <div className="nav-controls">
      {/* Theme Slider */}
      <div className="theme-switch-wrapper">
        <label className="theme-switch">
          {/* Changed toggleTheme to the onChange handler */}
          <input type="checkbox" checked={isDark} onChange={toggleTheme} />
          <div className="slider round">
            <div className="icon-container">
              <svg className="icon moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              <svg className="icon sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            </div>
          </div>
        </label>
      </div>

      {/* Segmented Language Switcher */}
      <div className="lang-switcher">
        <button 
          className={`lang-option ${lang === 'EN' ? 'active' : ''}`} 
          onClick={() => toggleLang('EN')}
        >EN</button>
        <button 
          className={`lang-option ${lang === 'PT' ? 'active' : ''}`} 
          onClick={() => toggleLang('PT')}
        >PT</button>
      </div>

      <a 
        href={lang === 'EN' ? '/Paloma_Guth_Kronbauer_cv-english.pdf' : '/Paloma_Guth_Kronbauer_cv-portugues.pdf'} 
        download={lang === 'EN' ? 'Paloma_Guth_Kronbauer_cv-english.pdf' : 'Paloma_Guth_Kronbauer_cv-portugues.pdf'} 
        className="cv-btn"
      >
        CV
      </a>    
    </div>
  );
}