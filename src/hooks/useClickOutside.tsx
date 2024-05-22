import { useEffect, RefObject } from 'react';

export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  handler: (event: MouseEvent) => void,
  additionalRefs?: RefObject<HTMLElement>[]
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isOutsideAllRefs = (refs: RefObject<HTMLElement>[]) => {
        return refs.every(
          (ref) => ref.current && !ref.current.contains(event.target as Node)
        );
      };

      if (ref.current && !ref.current.contains(event.target as Node) && (!additionalRefs || isOutsideAllRefs(additionalRefs))) {
        handler(event);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler, additionalRefs]);
};
