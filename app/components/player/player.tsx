interface PlayerProps {
  video: {
    id: string;
    title: string;
  };
}
export const Player = ({ video }: PlayerProps) => {
  return (
    <div className="aspect-video w-full max-w-4xl">
      <iframe
        className="w-full h-full rounded-lg"
        src={`https://www.youtube.com/embed/${video.id}`}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};
