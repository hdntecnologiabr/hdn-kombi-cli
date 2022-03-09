import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Routes from './Routes';

describe('Router', () => {
  it('should render only the example page route', () => {
    render(
      <MemoryRouter>
        <Routes />
      </MemoryRouter>
    );
    waitFor(() => {
      expect(screen.getByText('It works! Translate value')).toBeInTheDocument();
    });
  });
});
