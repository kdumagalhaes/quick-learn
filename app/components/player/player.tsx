interface PlayerProps {
  video: {
    id: string;
    title: string;
    duration: number;
  };
}
export const Player = ({ video }: PlayerProps) => {
  return (
    <div className="aspect-video w-full max-w-4xl shadow-xl/20 mb-24">
      <iframe
        className="w-full h-full rounded-lg"
        src={`https://www.youtube.com/embed/${video.id}`}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <h2 className="font-extrabold mt-8 text-neutral-800">{video.title}</h2>
      <p className="text-neutral-800">{video.duration}</p>
    </div>
  );
};
