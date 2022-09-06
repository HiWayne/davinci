import create from 'zustand';
import { immer } from 'zustand/middleware/immer';

// 示例
import createDemoStore from './demo';
import type { DemoStore } from './demo';

interface Store {
  demo: DemoStore;
}

const useStore = create(
  immer<Store>((set) => ({
    demo: createDemoStore(set),
  })),
);

export default useStore;
