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
});
