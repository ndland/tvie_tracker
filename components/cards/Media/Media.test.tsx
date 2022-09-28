import { render, screen } from '@testing-library/react';
import Media from './Media';

describe('Media Card', () => {
  it('should render correctly', () => {
    render(<Media mediaName="movie" />);

    expect(screen.getByText(/movie/i)).toBeInTheDocument();
  });

  it('should display a picture of the movie', () => {
    render(<Media mediaName="demo" />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
