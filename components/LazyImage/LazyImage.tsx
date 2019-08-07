import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  memo,
  DragEvent,
} from 'react';
import { LazyImageProps } from './index';
import { Figure, Image } from './LazyImage.styles';

export const _LazyImage = ({
  className = '',
  src,
  alt = '',
  ratio,
}: LazyImageProps) => {
  const [isLoaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const handleLoad = useCallback(() => setLoaded(true), []);
  const handleDragStart = useCallback((ev: DragEvent) => {
    ev.preventDefault();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;

    if (image) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(({ isIntersecting }) => {
            if (isIntersecting) {
              image.src = src;

              observer.disconnect();
            }
          });
        },
        {
          rootMargin: '200px 0px 200px 0px',
        }
      );

      observer.observe(container || image);
    }
  }, [src]);

  return (
    <Figure
      className={className}
      ref={containerRef}
      ratio={ratio}
      isLoaded={isLoaded}
    >
      <Image
        onLoad={handleLoad}
        alt={alt}
        ref={imageRef}
        isVisible={isLoaded}
        onDragStart={handleDragStart}
      />
    </Figure>
  );
};

export const LazyImage = memo(_LazyImage);
