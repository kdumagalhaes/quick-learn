import { Hero } from "./components/hero/hero";
import { TeachMeButton } from "./components/teach-me-button/teach-me-button";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 max-w-lg mx-auto">
      <Hero />
      <TeachMeButton />
    </div>
  );
}
