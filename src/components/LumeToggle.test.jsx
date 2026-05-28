import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { LumeToggle } from './LumeToggle';

describe('LumeToggle', () => {
  it('renders EXPOSE when not night', () => {
    render(<LumeToggle isNight={false} onToggle={() => {}} />);
    expect(screen.getByText('EXPOSE')).toBeInTheDocument();
  });

  it('renders CHARGED when night', () => {
    render(<LumeToggle isNight={true} onToggle={() => {}} />);
    expect(screen.getByText('CHARGED')).toBeInTheDocument();
  });

  it('calls onToggle when clicked', () => {
    const onToggle = vi.fn();
    render(<LumeToggle isNight={false} onToggle={onToggle} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onToggle).toHaveBeenCalledTimes(1);
  });
});
