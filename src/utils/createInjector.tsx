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
    const WithInjector = ({
      injections = {},
      ...props
    }: P & { injections?: Partial<I> }) => {
      const injected = useMemo(() => ({ ...injectables, ...injections }), [
        injections,
      ]);

      return (
        <Context.Provider value={injected}>
          <Component {...((props as unknown) as P)} />
        </Context.Provider>
      );
    };

    WithInjector.displayName = `withInjector(${Component.displayName ||
      Component.name})`;

    return WithInjector;
  };

  return {
    withInjector,
    useInjections,
  };
};
