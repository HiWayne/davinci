export interface DemoStore {
  bar: string;
  foo: number;
  setBar: (bar: string) => void;
  setOrAddFoo: (foo: number | undefined) => void;
}

const createDemoStore: (
  set: (
    nextStateOrUpdater: object | ((state: any) => void),
    shouldReplace?: boolean | undefined,
  ) => void,
) => DemoStore = (set) => ({
  bar: '',
  foo: 0,
  setBar(bar: string) {
    set((state) => {
      state.demo.bar = bar;
    });
  },
  setOrAddFoo(foo: number | undefined) {
    set((state) => {
      if (typeof foo === 'number') {
        state.demo.foo = foo;
      } else {
        state.demo.foo++;
      }
    });
  },
});

export default createDemoStore;
