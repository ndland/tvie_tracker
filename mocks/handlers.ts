import { rest } from 'msw';
import { TrendingMovieResponse } from './types';

export const handlers = [
  rest.get('*/trending/movie/week', (_req, res, ctx) => {
    return res(
      ctx.json<TrendingMovieResponse>({
        page: 1,
        results: [
          {
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
            popularity: 4055.863,
            release_date: '2022-07-03',
            video: false,
            vote_average: 7.47,
            vote_count: 1146,
          },
          {
            adult: false,
            backdrop_path: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg',
            id: 616037,
            title: 'Thor: Love and Thunder',
            original_language: 'en',
            original_title: 'Thor: Love and Thunder',
            overview:
              'After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.',
            poster_path: '/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg',
            media_type: 'movie',
            genre_ids: [14, 28, 35],
            popularity: 1832.813,
            release_date: '2022-07-06',
            video: false,
            vote_average: 6.77,
            vote_count: 3905,
          },
        ],
      })
    );
  }),
];
