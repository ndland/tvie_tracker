import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import Home from '.';

describe('Index Page', () => {
  it('fetches data from The TVDB to populate the trending media titles', async () => {
    const axiosSpy = jest.spyOn(axios, 'get');
    render(<Home />);

    await waitFor(() => {
      expect(axiosSpy).toHaveBeenCalledWith(
        `${process.env.NEXT_PUBLIC_TVDB_BASE_URL}/trending/all/week`,
        { params: { api_key: process.env.NEXT_PUBLIC_TVDB_API_KEY } }
      );
    });
  });

  it('renders multiple <MediaCard> on the page', () => {
    render(<Home />);

    expect(screen.getAllByAltText(/media/i)).toHaveLength(6);
  });
});
