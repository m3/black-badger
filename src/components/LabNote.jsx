import React from 'react';

export const LabNote = ({ note }) => (
  <div className="lab-note" style={{ borderLeft: '2px solid #333', paddingLeft: '15px', margin: '20px 0' }}>
    <span className="note-label" style={{ fontFamily: 'var(--font-mono)', color: 'var(--lume-glow)', fontSize: '0.7rem', display: 'block', marginBottom: '5px' }}>// LAB_NOTE:</span>
    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>{note}</p>
  </div>
);
