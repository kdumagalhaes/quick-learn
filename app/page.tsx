import { getRandomVideo } from "./api/youtube";
import { Hero } from "./components/hero/hero";
import { Player } from "./components/player/player";
import { TeachMeButton } from "./components/teach-me-button/teach-me-button";

export default async function Home() {
  const video = await getRandomVideo();

  return (
    <div className="flex flex-col items-center gap-8 x-auto">
      <Hero />
      <Player video={{ title: video.title, id: video.id }} />
      <TeachMeButton />
    </div>
  );
}
