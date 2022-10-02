import axios from 'axios';
import { useEffect, useState } from 'react';
import MediaCard from '../components/cards/Media/Media';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const [trendingMedia, setTrendingMedia] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_TVDB_BASE_URL}/trending/movie/week`, {
        params: {
          api_key: process.env.NEXT_PUBLIC_TVDB_API_KEY,
        },
      })
      .then(({ data }) => {
        setTrendingMedia(data.results);
      })
      .catch((error) => error);
  }, []);

  return (
    <section>
      <div className="grid grid-cols-5 gap-4 m-4">
        {trendingMedia.map((media, i) => {
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
