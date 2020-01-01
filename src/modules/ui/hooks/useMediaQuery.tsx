import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

type MatchMedia = (query: string) => boolean;

const MediaQueryContext = createContext<{ ssrMatchMedia?: MatchMedia }>({
  ssrMatchMedia: undefined,
});

export const MediaQueryProvider = ({
  matchMedia,
  children,
}: {
  matchMedia?: MatchMedia;
  children: ReactNode | ReactNode[];
}) => (
  <MediaQueryContext.Provider value={{ ssrMatchMedia: matchMedia }}>
    {children}
  </MediaQueryContext.Provider>
);

export const useMediaQuery = (query: string) => {
  const { ssrMatchMedia } = useContext(MediaQueryContext);
  const [matches, setMatches] = useState(
    ssrMatchMedia ? ssrMatchMedia(query) : false
  );

  useEffect(() => {
    const mediaQuery = matchMedia(query);

    function onChange(this: MediaQueryList, ev: MediaQueryListEvent) {
      setMatches(ev.matches);
    }

    setMatches(mediaQuery.matches);

    mediaQuery.addListener(onChange);

    return () => mediaQuery.removeListener(onChange);
  }, [query]);

  return matches;
};
