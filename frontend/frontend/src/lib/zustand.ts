/* eslint-disable @typescript-eslint/no-explicit-any */

import { StoreApi, UseBoundStore } from 'zustand';

type WithSelectors<S> = S extends { getState: () => infer T }
  ? {
      get: { [K in keyof T as T[K] extends (...args: any[]) => any ? K : never]: () => T[K] };
      use: { [K in keyof T as T[K] extends (...args: any[]) => any ? never : K]: () => T[K] };
    } & S
  : never;

export const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(_store: S) => {
  const store = _store as WithSelectors<typeof _store>;
  store.use = {};
  store.get = {};

  for (const [k, v] of Object.entries(store.getState())) {
    if (typeof v === 'function') (store.get as any)[k] = () => v;
    else (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
};
