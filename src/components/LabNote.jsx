import React from 'react';

export const LabNote = ({ note }) => (
  <div style={{ borderLeft: '2px solid #333', paddingLeft: '15px', margin: '20px 0' }}>
    <span style={{ fontFamily: 'var(--font-mono)', color: '#10f3c1', fontSize: '0.7rem', display: 'block', marginBottom: '5px' }}>// LAB_NOTE:</span>
    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#9ca3af', margin: 0 }}>{note}</p>
  </div>
);
