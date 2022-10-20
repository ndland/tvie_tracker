import { render, screen } from '@testing-library/react';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import Home from '.';

let axiosSpy = axios as jest.Mocked<typeof axios>;

describe('Index Page', () => {
  console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
  beforeEach(() => {
    axiosSpy = jest.spyOn(axios, 'get');

    render(<Home />);
  });

  it('fetches data from The TVDB to populate the trending media titles', async () => {
    await act(() => {
      expect(axiosSpy).toHaveBeenCalledWith(
        `${process.env.NEXT_PUBLIC_TVDB_BASE_URL}/trending/movie/week`,
        { params: { api_key: process.env.NEXT_PUBLIC_TVDB_API_KEY } }
      );
    });
  });

  it('renders multiple <MediaCard> on the page', async () => {
    expect(await screen.findAllByRole('img')).toHaveLength(2);
  });
});
