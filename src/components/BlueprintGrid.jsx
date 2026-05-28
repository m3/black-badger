import React from 'react';

export const BlueprintGrid = ({ children, label }) => (
  <div className="blueprint-container" style={{ position: 'relative', border: '1px solid #222', margin: '20px 0', padding: '40px' }}>
    <div style={{ position: 'absolute', top: '-10px', left: '-10px', color: '#10f3c1', fontFamily: 'monospace' }}>+</div>
    <div style={{ position: 'absolute', top: '-10px', right: '-10px', color: '#10f3c1', fontFamily: 'monospace' }}>+</div>
    <div style={{ position: 'absolute', bottom: '-10px', left: '-10px', color: '#10f3c1', fontFamily: 'monospace' }}>+</div>
    <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', color: '#10f3c1', fontFamily: 'monospace' }}>+</div>
    {label && (
      <div style={{ position: 'absolute', top: '10px', left: '10px', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#666', textTransform: 'uppercase' }}>
        [ {label} ]
      </div>
    )}
    {children}
  </div>
);
