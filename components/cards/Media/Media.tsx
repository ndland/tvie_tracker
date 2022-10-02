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
  const [thumbsUpClicked, setThumbsClicked] = useState(false);
  const [thumbsDownClicked, setThumbsDownClicked] = useState(false);

  const toggleThumbsUpClass = () => {
    setThumbsClicked(!thumbsUpClicked);
  };

  const toggleThumbsDownClasss = () => {
    setThumbsDownClicked(!thumbsDownClicked);
  };

  return (
    <div className="bg-slate-200 rounded-md">
      <div className="text-center">
        <div className="h-12 text-2xl font-bold">
          <div className="py-2">
            {mediaName}
            {release_date ? ` (${new Date(release_date).getFullYear()})` : ''}
          </div>
        </div>
        <div className="h-80 w-full relative">
          {imageSrc || imageSrc != '' ? (
            <Image
              className="rounded-md"
              src={`${process.env.NEXT_PUBLIC_TVDB_IMAGE_URL}${imageSrc}`}
              alt={`${mediaName} Poster`}
              layout="fill"
            />
          ) : (
            <div>Media Poster</div>
          )}
        </div>
        <div className="flex h-12 space-x-2 items-center justify-center">
          <div>Like</div>
          <HandThumbUpIcon
            className={`w-6 h-6 ${
              thumbsUpClicked
                ? 'fill-green-400 stroke-green-400'
                : 'hover:stroke-green-400'
            }`}
            aria-label="Thumbs Up"
            onClick={() => toggleThumbsUpClass()}
          />
          <HandThumbDownIcon
            className={`w-6 h-6 ${
              thumbsDownClicked
                ? 'fill-red-400 stroke-red-400'
                : 'hover:stroke-red-400'
            }`}
            aria-label="Thumbs Down"
            onClick={() => toggleThumbsDownClasss()}
          />
          <div>Dislike</div>
        </div>
      </div>
    </div>
  );
};

export default Media;
