import { useEffect, useState } from 'react';

const checkEnvironment = () =>
  Boolean(
    typeof window !== 'undefined' &&
      window.document &&
      window.document.createElement
  );

export const useBrowser = () => {
  const [isBrowser, setBrowser] = useState(checkEnvironment());

  useEffect(() => {
    setBrowser(checkEnvironment());
  }, []);

  return isBrowser;
};
