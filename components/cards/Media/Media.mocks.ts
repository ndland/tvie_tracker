import { IMedia } from './Media';

export const exampleMovie = {
  adult: false,
  backdrop_path: '/pRrq1t1rBEELElYUA3B2eM3AXnP.jpg',
  id: 718930,
  title: 'Bullet Train',
  original_language: 'en',
  original_title: 'Bullet Train',
  overview:
    "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.",
  poster_path: '/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg',
  media_type: 'movie',
  genre_ids: [28, 35, 53],
  popularity: 1478.084,
  release_date: '2022-07-03',
  video: false,
  vote_average: 7.439,
  vote_count: 949,
};

const base: IMedia = {
  mediaName: exampleMovie.title,
  imageSrc: `https://image.tmdb.org/t/p/original${exampleMovie.poster_path}`,
  release_date: exampleMovie.release_date
};

export const mockMediaProps = {
  base,
};
