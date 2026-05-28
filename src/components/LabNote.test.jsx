import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { LabNote } from './LabNote';

describe('LabNote', () => {
  it('renders note content', () => {
    render(<LabNote note="Test note content" />);
    expect(screen.getByText('Test note content')).toBeInTheDocument();
  });

  it('renders lab note prefix', () => {
    render(<LabNote note="Something" />);
    expect(screen.getByText('// LAB_NOTE:')).toBeInTheDocument();
  });

  it('applies connector style when hasConnector is true', () => {
    const { container } = render(<LabNote note="Something" hasConnector />);
    const labNoteDiv = container.firstChild;
    // Check that it doesn't have the default solid border
    expect(labNoteDiv.style.borderLeft).toContain('dashed');
    expect(labNoteDiv.style.marginLeft).toBe('21px');
    expect(labNoteDiv.style.opacity).toBe('0.8');
  });

  it('standardizes opacity to 0.8 even without connector', () => {
    const { container } = render(<LabNote note="Something" />);
    const labNoteDiv = container.firstChild;
    expect(labNoteDiv.style.opacity).toBe('0.8');
  });
});
