import React, {
  ComponentProps,
  ComponentType,
  createContext,
  useContext,
  useMemo,
} from 'react';

export const makeInjectable = <S extends { [key: string]: ComponentType<any> }>(
  injectables: S
) => {
  const Context = createContext(injectables);
  const useInjections = () => useContext(Context);

  return <
    P extends {},
    D extends typeof injectables,
    I = { [key in keyof D]: ComponentType<ComponentProps<D[key]>> }
  >(
    Component: ComponentType<P>
  ) => {
    const WrappedComponent = ({
      injections = {},
      ...props
    }: P & { injections?: Partial<I> }) => {
      const injected = useMemo(() => ({ ...injectables, ...injections }), [
        injections,
      ]);

      return (
        <Context.Provider value={injected}>
          <Component {...(props as P)} />
        </Context.Provider>
      );
    };

    WrappedComponent.displayName = `Injectable(${Component.displayName ||
      Component.name})`;

    return {
      Component: WrappedComponent,
      useInjections,
    };
  };
};
