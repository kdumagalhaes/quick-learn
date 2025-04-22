import { getRandomVideo } from "./api/youtube";
import { Player } from "./components/player/player";
import { TeachMeButton } from "./components/teach-me-button/teach-me-button";

export default async function Home() {
  const video = await getRandomVideo();

  return (
    <div className="flex flex-col items-center gap-8 x-auto my-16 px-6">
      <Player
        video={{ title: video.title, id: video.id, duration: video.duration }}
      />
      <TeachMeButton />
    </div>
  );
}
