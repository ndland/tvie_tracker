import axios from 'axios';
import { useEffect, useState } from 'react';
import MediaCard from '../components/cards/Media/Media';
import { NextPageWithLayout } from './page';

/**
 * @property {string} title - Title of the media
 * @property {string} poster_path - Path of where the poster resides in TMDB
 * @property {string} release_date - Date that the media was released
 */
export interface Media {
  title: string;
  poster_path: string;
  release_date: string;
}

const Home: NextPageWithLayout = () => {
  const [trendingMedia, setTrendingMedia] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/trending/movie/week`, {
        params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        },
      })
      .then(({ data }) => {
        setTrendingMedia(data.results);
      })
      .catch((error) => error);
  }, []);

  return (
    <section>
      <div className="flex min-w-full flex-wrap justify-center gap-4 p-4 md:gap-6">
        {trendingMedia.map((media: Media, i: number) => {
          return (
            <MediaCard
              key={i}
              mediaName={media.title}
              imageSrc={media.poster_path}
              release_date={media.release_date}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Home;
