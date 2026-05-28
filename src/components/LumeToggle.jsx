import React from 'react';

export const LumeToggle = ({ isNight, onToggle }) => (
  <button 
    className={`lume-toggle ${isNight ? 'is-active' : ''}`} 
    onClick={onToggle}
    style={{
      background: isNight ? 'var(--lume-glow)' : 'transparent',
      color: isNight ? '#000' : 'var(--lume-glow)',
      border: '1px solid var(--lume-glow)',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.7rem',
      padding: '4px 10px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      borderRadius: '2px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}
  >
    <span style={{ 
      display: 'inline-block', 
      width: '8px', 
      height: '8px', 
      borderRadius: '50%', 
      background: isNight ? '#000' : 'var(--lume-glow)',
      boxShadow: isNight ? 'none' : '0 0 8px var(--lume-glow)'
    }}></span>
    {isNight ? 'CHARGED' : 'EXPOSE'}
  </button>
);
