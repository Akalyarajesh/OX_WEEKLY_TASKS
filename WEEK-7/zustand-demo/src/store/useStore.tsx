import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

type StoreState = {
  count: number;
  increase: () => void;
  decrease: () => void;
};

const useStore = create<StoreState>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increase: () => set((state) => ({ count: state.count + 1 })),
        decrease: () => set((state) => ({ count: state.count - 1 })),
      }),
      {
        name: "counter-storage",
      },
    ),
    { name: "counterstore" },
  ),
);

export default useStore;
