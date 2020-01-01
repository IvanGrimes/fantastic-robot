import React, {
  ComponentProps,
  ComponentType,
  createContext,
  useContext,
  useMemo,
} from 'react';

export const createInjector = <
  D extends { [key: string]: ComponentType<any> },
  I = { [key in keyof D]: ComponentType<ComponentProps<D[key]>> }
>(
  injectables: I
) => {
  const Context = createContext(injectables);
  const useInjections = () => useContext(Context);
  const withInjector = <P extends {}>(Component: ComponentType<P>) => {
    const WithInjector = (props: P) => {
      const injections = useInjections();
      const injected = useMemo(() => ({ ...injectables, ...injections }), [
        injections,
      ]);

      return (
        <Context.Provider value={injected}>
          <Component {...props} />
        </Context.Provider>
      );
    };

    WithInjector.inject = (injections: Partial<I>) => (props: P) => {
      const injected = useMemo(() => ({ ...injectables, ...injections }), []);

      return (
        <Context.Provider value={injected}>
          <Component {...props} />
        </Context.Provider>
      );
    };

    return WithInjector;
  };

  return {
    withInjector,
    useInjections,
  };
};
