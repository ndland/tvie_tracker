import {
  HandThumbDownIcon,
  HandThumbUpIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState } from 'react';

export interface IMedia {
  mediaName: string;
  imageSrc: string;
  release_date: string;
}

const Media: React.FC<IMedia> = ({ mediaName, imageSrc, release_date }) => {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  const toggleThumbsUpClass = () => {
    setLike(!like);
  };

  const toggleThumbsDownClasss = () => {
    setDislike(!dislike);
  };

  return (
    <div className="w-[185px] rounded-md bg-slate-400">
      <div
        className={'group relative h-[278px] w-full rounded-md bg-slate-200'}
      >
        <Image
          className="rounded-md"
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${imageSrc}`}
          alt={`${mediaName} Poster`}
          layout="fill"
        />
        <div className="absolute top-0 left-0 right-0 bg-black text-center text-2xl text-white opacity-0 duration-500 group-hover:bg-opacity-40 group-hover:opacity-100">
          {mediaName} ({new Date(release_date).getFullYear()})
        </div>
      </div>
      <div className="flex h-12 items-center justify-center space-x-2 text-white">
        <div>Like</div>
        <HandThumbUpIcon
          className={`h-6 w-6 ${
            like ? 'fill-green-400 stroke-green-400' : 'hover:stroke-green-400'
          }`}
          aria-label="Thumbs Up"
          onClick={() => toggleThumbsUpClass()}
        />
        <HandThumbDownIcon
          className={`h-6 w-6 ${
            dislike ? 'fill-red-400 stroke-red-400' : 'hover:stroke-red-400'
          }`}
          aria-label="Thumbs Down"
          onClick={() => toggleThumbsDownClasss()}
        />
        <div>Dislike</div>
      </div>
    </div>
  );
};

export default Media;
