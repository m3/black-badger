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

describe('Inquiry Modal State Reset', () => {
  it('resets inquirySent state when closing the modal', async () => {
    vi.useFakeTimers();
    render(<App />);
    
    // Open modal
    const inquireBtn = screen.getAllByText(/INITIATE BUILD/i)[0];
    fireEvent.click(inquireBtn);
    
    // Fill and submit form
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Test message' } });
    
    const submitBtn = screen.getByText(/Submit Build Request/i);
    fireEvent.click(submitBtn);
    
    // Verify success message
    expect(screen.getByText(/Thank you! We have received your inquiry./i)).toBeInTheDocument();
    
    // Close modal via 'X'
    const closeBtn = screen.getByText('×');
    fireEvent.click(closeBtn);
    
    // Reopen modal
    fireEvent.click(inquireBtn);
    
    // Verify form is visible (inquirySent reset to false)
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.queryByText(/Thank you! We have received your inquiry./i)).not.toBeInTheDocument();
    
    vi.useRealTimers();
  });
});
