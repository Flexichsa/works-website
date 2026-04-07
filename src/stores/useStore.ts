import { create } from 'zustand';

interface WorksStore {
  activeFloor: number;
  setActiveFloor: (floor: number) => void;
  explodeAmount: number;
  setExplodeAmount: (amount: number) => void;
  isLoaded: boolean;
  setIsLoaded: (loaded: boolean) => void;
  isMobile: boolean;
  setIsMobile: (mobile: boolean) => void;
  hoveredFloor: number | null;
  setHoveredFloor: (floor: number | null) => void;
}

export const useStore = create<WorksStore>((set) => ({
  activeFloor: 5,
  setActiveFloor: (floor) => set({ activeFloor: floor }),
  explodeAmount: 0,
  setExplodeAmount: (amount) => set({ explodeAmount: amount }),
  isLoaded: false,
  setIsLoaded: (loaded) => set({ isLoaded: loaded }),
  isMobile: false,
  setIsMobile: (mobile) => set({ isMobile: mobile }),
  hoveredFloor: null,
  setHoveredFloor: (floor) => set({ hoveredFloor: floor }),
}));
