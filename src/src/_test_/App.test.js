// App.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../pages/App';

test("renders App component without crashing", () => {
  render(<App />);
});
