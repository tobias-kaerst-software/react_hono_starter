import { create } from 'zustand';

import { createSelectors } from '$/lib/zustand';

interface BearState {
  bears: number;
  foo: number;
  increase: (by: number) => void;
  increment: () => void;
}

export const useBearStore = createSelectors(
  create<BearState>()((set) => ({
    bears: 0,
    foo: 0,
    increase: (by) => set((state) => ({ bears: state.bears + by })),
    increment: () => set((state) => ({ bears: state.bears + 1 })),
  })),
);
