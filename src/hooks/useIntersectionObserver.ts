import * as React from 'react';

export function useIntersectionObserver<TElement extends Element>(values: {
  readonly ref: React.RefObject<TElement>,
  onIntersect(intersectionObserverEntry: IntersectionObserverEntry): void,
  readonly observeOnce: boolean,
  readonly rootMargin?: string,
  readonly threshold?: number | number[]
}): void {

  // By default invoke callback in advance when the target is about to enter the viewport
  const { ref, onIntersect, observeOnce, rootMargin = '0px 0px 250px', threshold = 0 } = values;

  React.useEffect(() => {

    const current: TElement | null = ref.current;
    if (!current) {
      return undefined;
    }

    // TODO: Add polyfill to support older browsers
    const intersectionObserver = new IntersectionObserver(
      (intersectionObserverEntries: IntersectionObserverEntry[], _intersectionObserver: IntersectionObserver) => {
        for (const intersectionObserverEntry of intersectionObserverEntries) {
          if (intersectionObserverEntry.isIntersecting) {
            onIntersect(intersectionObserverEntry);
            if (observeOnce) {
              _intersectionObserver.unobserve(intersectionObserverEntry.target);
            }
          }
        }
      },
      {
        rootMargin,
        threshold
      });

    intersectionObserver.observe(current);
    return () => intersectionObserver.unobserve(current);

  }, [ref, onIntersect, observeOnce, rootMargin, threshold]);
}
