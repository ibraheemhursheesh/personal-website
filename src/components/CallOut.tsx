import { Lightbulb } from "lucide-react";

export default function CallOut({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-yellow-400/40 py-3 px-5 2 sm:px-5t-5 rounded-sm flex items-start gap-2 sm:gap-5 mt-5 text-base sm:text-[1.1rem]">
      <Lightbulb size={20} className="shrink-0 min-h-lh" />
      {children}
    </div>
  );
}
