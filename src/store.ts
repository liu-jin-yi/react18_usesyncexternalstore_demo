import { useSyncExternalStore } from "react";

function createStore(initStore: { count1: number; count2: number }) {
  let state = initStore;
  const listeners = new Set<
    (state: { count1: number; count2: number }) => void
  >();
  return {
    getState() {
      return state;
    },
    setState(newState: { count1: number; count2: number }) {
      state = newState;
      listeners.forEach((listener) => listener(newState));
    },
    subscribe(listener: (state: { count1: number; count2: number }) => void) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}

export const store = createStore({
  count1: 0,
  count2: 0,
});

export const useStore = (
  selector: (state: { count1: number; count2: number }) => number
) => {
  return useSyncExternalStore(store.subscribe, () =>
    selector(store.getState())
  );
};
