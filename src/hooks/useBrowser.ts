export const useBrowser = () =>
  Boolean(
    typeof window !== 'undefined' &&
      window.document &&
      window.document.createElement
  );
