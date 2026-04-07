import { useStore } from '../../stores/useStore';

export function LoadingScreen() {
  const isLoaded = useStore((s) => s.isLoaded);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#0a1628] flex flex-col items-center justify-center transition-opacity duration-1000 ${
        isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Animierte Blueprint-Linien */}
      <svg width="120" height="120" viewBox="0 0 120 120" className="mb-8">
        <rect
          x="10" y="10" width="100" height="100"
          fill="none" stroke="#4a9eff" strokeWidth="0.5" opacity="0.3"
          strokeDasharray="400" strokeDashoffset="400"
          className="animate-[draw_2s_ease-in-out_infinite]"
        />
        <rect
          x="25" y="25" width="70" height="70"
          fill="none" stroke="#4a9eff" strokeWidth="0.5" opacity="0.5"
          strokeDasharray="280" strokeDashoffset="280"
          className="animate-[draw_2s_ease-in-out_0.3s_infinite]"
        />
        <rect
          x="40" y="40" width="40" height="40"
          fill="none" stroke="#00d4ff" strokeWidth="0.5" opacity="0.7"
          strokeDasharray="160" strokeDashoffset="160"
          className="animate-[draw_2s_ease-in-out_0.6s_infinite]"
        />
        {/* Kreuz in der Mitte */}
        <line x1="60" y1="45" x2="60" y2="75" stroke="#4a9eff" strokeWidth="0.5" opacity="0.4" />
        <line x1="45" y1="60" x2="75" y2="60" stroke="#4a9eff" strokeWidth="0.5" opacity="0.4" />
      </svg>
      <p className="text-[#4a9eff]/60 text-xs font-mono tracking-[0.4em] uppercase">
        Konstruktion läuft...
      </p>
    </div>
  );
}
