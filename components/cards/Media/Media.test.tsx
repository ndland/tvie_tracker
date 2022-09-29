import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { exampleMovie, mockMediaProps } from './Media.mocks';
import { Base } from './Media.stories';

describe('Media Card', () => {
  beforeEach(() => {
    render(<Base {...mockMediaProps.base} />);
  });

  it('should render correctly', () => {
    expect(screen.getByText(exampleMovie.title)).toBeInTheDocument();
  });

  it('should display a picture of the movie', async () => {
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    await waitFor(() => {
      expect(image).toHaveAttribute(
        'src',
        expect.stringContaining(encodeURIComponent(exampleMovie.poster_path))
      );
    });
  });

  it('contains a thumbs up icon for liking a movie/tv show', () => {
    const thumbsUpIcon = screen.getByLabelText(/thumbs up/i);
    expect(thumbsUpIcon).toBeInTheDocument();

    userEvent.hover(thumbsUpIcon);
    expect(thumbsUpIcon).toHaveClass('hover:stroke-green-400');
  });

  it('contains a thumbs down icon for liking a movie/tv show', () => {
    const thumbsDownIcon = screen.getByLabelText(/thumbs down/i);
    expect(thumbsDownIcon).toBeInTheDocument();

    userEvent.hover(thumbsDownIcon);
    expect(thumbsDownIcon).toHaveClass('hover:stroke-red-400');
  });
});
