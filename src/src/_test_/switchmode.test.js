import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Switchmode from '../pages/switchmode';

describe('Switchmode Component', () => {
  test('renders Switchmode component', () => {
    const { getByTestId } = render(<Switchmode />);
    const switchInput = getByTestId('themeToggle');
    expect(switchInput).toBeInTheDocument();
  });

  test('initial theme is light', () => {
    const { container } = render(<Switchmode />);
    expect(container.querySelector('.light-theme')).toBeInTheDocument();
    expect(document.body.classList.contains('dark-theme')).toBe(false);
  });

  test('can toggle theme to dark', () => {
    const { container, getByTestId } = render(<Switchmode />);
    const switchInput = getByTestId('themeToggle');

    fireEvent.click(switchInput);

    expect(container.querySelector('.dark-theme')).toBeInTheDocument();
    expect(document.body.classList.contains('dark-theme')).toBe(true);
  });

  test('can toggle theme back to light', () => {
    const { container, getByTestId } = render(<Switchmode />);
    const switchInput = getByTestId('themeToggle');

    // Switch to dark
    fireEvent.click(switchInput);
    // Switch back to light
    fireEvent.click(switchInput);

    expect(container.querySelector('.light-theme')).toBeInTheDocument();
    expect(document.body.classList.contains('dark-theme')).toBe(false);
  });
});
