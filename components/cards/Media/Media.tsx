import {
  HandThumbDownIcon,
  HandThumbUpIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

export interface IMedia {
  mediaName: string;
  imageSrc: string;
}

const Media: React.FC<IMedia> = ({ mediaName, imageSrc }) => (
  <div className="w-1/4 bg-slate-200 rounded-md">
    <div className="text-center">
      <div className="text-3xl font-extrabold ">
        <div className="py-2">{mediaName}</div>
      </div>
      <div className="h-96 w-full relative">
        <Image
          className="rounded-md"
          src={imageSrc}
          alt="Movie Poster"
          layout="fill"
        />
      </div>
      <div className="flex h-12 space-x-2 items-center justify-center">
        <div>Like</div>
        <HandThumbUpIcon
          className="hover:stroke-green-400 h-6 w-6"
          aria-label="Thumbs Up"
        />
        <HandThumbDownIcon
          className="hover:stroke-red-400 h-6 w-6"
          aria-label="Thumbs Down"
        />
        <div>Dislike</div>
      </div>
    </div>
  </div>
);

export default Media;
