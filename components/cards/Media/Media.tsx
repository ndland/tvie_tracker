import Image from 'next/image';

export interface IMedia {
  mediaName: string;
}

const Media: React.FC<IMedia> = ({ mediaName }) => (
  <div className="text-3xl font-extrabold w-1/4 h-96 text-center bg-slate-200 rounded-md">
    <div className="py-2">{mediaName}</div>
    <div className="w-full h-full relative">
      <Image
        className="rounded-md"
        src="https://bit.ly/3Si7L3q"
        alt="Movie Poster"
        layout="fill"
      />
    </div>
  </div>
);

export default Media;
