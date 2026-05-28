import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BlueprintGrid } from './BlueprintGrid';

describe('BlueprintGrid', () => {
  it('renders children', () => {
    render(
      <BlueprintGrid>
        <div data-testid="child">Child Content</div>
      </BlueprintGrid>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });

  it('renders corner crosshairs', () => {
    const { container } = render(<BlueprintGrid>Content</BlueprintGrid>);
    const pluses = screen.getAllByText('+');
    expect(pluses).toHaveLength(4);
  });

  it('renders label when provided', () => {
    render(<BlueprintGrid label="SYSTEM_ALPHA">Content</BlueprintGrid>);
    expect(screen.getByText('[ SYSTEM_ALPHA ]')).toBeInTheDocument();
  });
});
