import React from 'react';
import { render } from '@testing-library/react';
import website4art from '../js/website4art';

test('renders learn react link', () => {
  const { getByText } = render(<website4art />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
