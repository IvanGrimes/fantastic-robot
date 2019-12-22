import { useState, useEffect, MutableRefObject } from 'react';

declare global {
  interface Element {
    _onIntersect(observer: IntersectionObserver): void;
    _isSubscribed?: boolean;
  }
}

let observer: IntersectionObserver;
const isClient = typeof window !== 'undefined';

const hasIntersectionObserverSupport = () =>
  typeof IntersectionObserver !== 'undefined';

const getIntersectionObserver = () => {
  return Promise.resolve(
    isClient &&
      !hasIntersectionObserverSupport() &&
      // @ts-ignore
      import('intersection-observer')
  );
};

const intersectionObserverOptions = {
  root: null,
  rootMargin: '200px 0px 0px 0px',
};

const handleIntersect: IntersectionObserverCallback = (
  entries,
  localObserver
) => {
  entries
    .filter(entry => entry.isIntersecting)
    .forEach(entry => {
      const { target } = entry;

      target._onIntersect(localObserver);
    });
};

const getObserver = () =>
  // eslint-disable-next-line consistent-return
  getIntersectionObserver().then(_ => {
    if (observer) {
      return observer;
    }

    if (isClient) {
      return new IntersectionObserver(
        handleIntersect,
        intersectionObserverOptions
      );
    }
  });

export const useNearScreen = ({
  ref,
}: {
  ref: MutableRefObject<HTMLElement | null>;
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const { current } = ref;

    if (!current) {
      return;
    }

    getObserver().then(localObserver => {
      if (localObserver) {
        localObserver.observe(current);
      }
    });

    current._onIntersect = localObserver => {
      setShow(true);

      localObserver.unobserve(current);
    };

    // eslint-disable-next-line consistent-return
    return () => {
      current._isSubscribed = false;
    };
  }, [ref]);

  return show;
};
