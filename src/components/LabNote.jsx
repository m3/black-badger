import React from 'react';

export const LabNote = ({ note, hasConnector }) => (
  <div className="lab-note" style={{ 
    borderLeft: hasConnector ? '1px dashed var(--lume-glow)' : '2px solid #333', 
    paddingLeft: '15px', 
    margin: hasConnector ? '0 0 20px 0' : '20px 0',
    marginLeft: hasConnector ? '21px' : '0',
    opacity: 0.8
  }}>
    <span className="note-label" style={{ 
      fontFamily: 'var(--font-mono)', 
      color: 'var(--lume-glow)', 
      fontSize: '0.7rem', 
      display: 'block', 
      marginBottom: '5px' 
    }}>// LAB_NOTE:</span>
    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>{note}</p>
  </div>
);
