const isBrowser =
  typeof window !== 'undefined' && typeof document !== 'undefined';
const html = isBrowser ? document.querySelector('html') : null;
const body = isBrowser ? document.body : null;
const elements = [html, body];
let previousScrollPosition = 0;

export const changeDocumentScroll = (nextScroll: boolean) => {
  if (!nextScroll) {
    previousScrollPosition = window.scrollY;
  }

  elements.forEach(element => {
    if (element) {
      element.style.position = nextScroll ? '' : 'fixed';
    }
  });

  if (nextScroll) {
    window.scrollTo({ top: previousScrollPosition, behavior: 'smooth' });

    previousScrollPosition = 0;
  }
};
