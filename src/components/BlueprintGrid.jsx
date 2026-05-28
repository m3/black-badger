import React from 'react';

export const BlueprintGrid = ({ children, label }) => (
  <div className="blueprint-container blueprint-border" style={{ margin: '20px 0', padding: '40px' }}>
    <div className="corner-tl">+</div>
    <div className="corner-tr">+</div>
    <div className="corner-bl">+</div>
    <div className="corner-br">+</div>
    {label && (
      <div className="tech-label" style={{ position: 'absolute', top: '10px', left: '10px', fontSize: '0.65rem', opacity: 0.6 }}>
        [ {label} ]
      </div>
    )}
    {children}
  </div>
);
