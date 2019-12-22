import React, { useRef } from 'react';
import { useNearScreen } from '../../hooks/useNearScreen';

type Props = {
  children: any;
  force?: boolean;
};

export function DynamicRendering({ children, force = false }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const isNearScreen = useNearScreen({ ref });

  if (isNearScreen || force) {
    return children;
  }

  return (
    <div
      ref={element => {
        ref.current = element;
      }}
      style={{ height: `100px`, border: '1px solid red' }}
    />
  );
}
