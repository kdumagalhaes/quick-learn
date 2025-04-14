import { Brain } from "lucide-react";

export const Hero = () => {
  return (
    <div className="mx-auto mt-10 max-w-80">
      <h1 className="text-4xl font-bold text-indigo-800 flex items-center justify-center gap-2">
        <Brain className="text-indigo-600" />
        QuickLearn
      </h1>
      <p className="text-gray-400 mt-2">
        Learn something new in under 3 minutes!
      </p>
    </div>
  );
};
