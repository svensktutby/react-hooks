import { MutableRefObject, useEffect, useRef } from 'react';

export const useHover = <T extends HTMLElement>(onHover: () => void): MutableRefObject<T | null> => {
    const elementRef = useRef<T | null>(null);

    useEffect(() => {
        const currentRef = elementRef.current;
        if (currentRef) {
            currentRef.addEventListener('mouseenter', onHover);
        }

        return () => {
            if (currentRef) {
                currentRef.removeEventListener('mouseenter', onHover);
            }
        };
    }, [onHover]);

    return elementRef;
};
