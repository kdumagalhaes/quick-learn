import { BrainCircuit } from "lucide-react";

export const Header = () => {
  return (
    <header className="flex items-center gap-2.5 py-4 px-16 bg-white">
      <BrainCircuit className="text-indigo-600" />
      <h1 className="text-2xl border-r-gray-400 pr-3 font-extrabold text-neutral-800">
        QuickLearn
      </h1>
    </header>
  );
};
