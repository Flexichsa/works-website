import { useStore } from '../../stores/useStore';
import { FLOORS } from '../../utils/constants';

export function FloorIndicator() {
  const activeFloor = useStore((s) => s.activeFloor);
  const floor = FLOORS.find((f) => f.level === activeFloor);

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <div className="flex items-center gap-3">
        <div className="border border-[#4a9eff]/20 px-3 py-2">
          <span className="text-[#00d4ff] text-2xl font-mono font-light">
            {String(activeFloor).padStart(2, '0')}
          </span>
        </div>
        <div>
          <p className="text-[#e0f0ff] text-sm font-light tracking-wide">{floor?.label}</p>
          <p className="text-[#6a8aaa] text-xs font-mono">{floor?.description}</p>
        </div>
      </div>
    </div>
  );
}
