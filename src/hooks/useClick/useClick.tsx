import { MutableRefObject, useEffect, useRef } from 'react';

export const useClick = <T extends HTMLElement>(onClick: () => void): MutableRefObject<T | null> => {
    const elementRef = useRef<T | null>(null);

    useEffect(() => {
        const currentRef = elementRef.current;
        if (currentRef) {
            currentRef.addEventListener('click', onClick);
        }

        return () => {
            if (currentRef) {
                currentRef.removeEventListener('click', onClick);
            }
        };
    }, [onClick]);

    return elementRef;
};
