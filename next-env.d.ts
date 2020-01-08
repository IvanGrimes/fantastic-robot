// / <reference types="next" />
// / <reference types="next/types/global" />

declare namespace React {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: import('styled-components').ThemedCssFunction;
  }
}

declare module '*.svg' {
  const content: string;
  export default content;
}
