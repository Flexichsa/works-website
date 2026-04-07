import { useStore } from '../../stores/useStore';
import { FLOORS } from '../../utils/constants';

export function Navigation() {
  const activeFloor = useStore((s) => s.activeFloor);

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-end gap-3">
      {FLOORS.map((floor) => (
        <div
          key={floor.id}
          className="flex items-center gap-3 group cursor-pointer"
          style={{ pointerEvents: 'auto' }}
        >
          <span
            className={`text-xs font-mono tracking-wider transition-all duration-300 ${
              activeFloor === floor.level
                ? 'text-[#00d4ff] opacity-100 translate-x-0'
                : 'text-[#6a8aaa] opacity-0 group-hover:opacity-60 translate-x-2 group-hover:translate-x-0'
            }`}
          >
            {floor.label}
          </span>
          <div className="relative">
            <div
              className={`w-2 h-2 rounded-full border transition-all duration-300 ${
                activeFloor === floor.level
                  ? 'bg-[#00d4ff] border-[#00d4ff] scale-125 shadow-[0_0_10px_#00d4ff40]'
                  : 'bg-transparent border-[#4a9eff]/40 group-hover:border-[#4a9eff]'
              }`}
            />
            {activeFloor === floor.level && (
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-[#00d4ff] animate-ping opacity-20" />
            )}
          </div>
        </div>
      ))}
    </nav>
  );
}
