import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from './App';

describe('App Secret Lab Easter Egg', () => {
  it('opens the secret lab modal when clicking the technical coordinate in the footer', () => {
    render(<App />);
    
    // Find coordinate in footer
    const coordinate = screen.getByText(/ACCESS_LAB: 57.7089° N, 11.9746° E/i);
    expect(coordinate).toBeInTheDocument();
    
    // Click it
    fireEvent.click(coordinate);
    
    // Check if modal appears
    expect(screen.getByText(/MATERIAL SECRETS REVEALED/i)).toBeInTheDocument();
    expect(screen.getByText(/BADGERITE DUST & CANADIAN OPTIMISM/i)).toBeInTheDocument();
    expect(screen.getByText(/🇨🇦 STAMPED IN TITANIUM/i)).toBeInTheDocument();
  });
});
